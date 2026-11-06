import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { SceneExploration } from "../src/engine/exploration/SceneExploration.ts";
import { PlayfulNarration } from "../src/engine/exploration/PlayfulNarration.ts";
import type { PlayLine, PlayProfile } from "../src/engine/exploration/PlayProfile.ts";
import { Popup } from "../src/engine/Popup.ts";
import { ColoringPuzzle } from "../src/engine/ColoringPuzzle.ts";
import { CountingLesson } from "../src/engine/learning/CountingLesson.ts";
import type { InteractionManager } from "../src/engine/interaction/InteractionManager.ts";
import type { Hotspot, ScreenPoint } from "../src/engine/interaction/Hotspot.ts";

const treeProfile: PlayProfile = {
  id: "tree",
  lines: [{ text: "Rustle, rustle!", speaker: "narrator" }],
  focusReplies: { frog: [{ text: "I'm a tree. Our frog can hop!", speaker: "narrator" }] },
  surprise: "acorns"
};
const ground: PlayProfile = { id: "ground", lines: [{ text: "Pat, pat!", speaker: "narrator" }] };

function character(profile: PlayProfile): Popup {
  const popup = new Popup();
  popup.playProfile = profile;
  popup.snapOpen();
  return popup;
}

function fixture() {
  const active = new Set<Hotspot>();
  const misses = new Set<(point: ScreenPoint) => void>();
  const removed: Hotspot[] = [];
  const interaction = {
    register: (hotspot: Hotspot) => {
      active.add(hotspot);
      return () => {
        if (active.delete(hotspot)) removed.push(hotspot);
      };
    },
    onMiss: (listener: (point: ScreenPoint) => void) => {
      misses.add(listener);
      return () => { misses.delete(listener); };
    }
  };
  let busy = false;
  const spoken: PlayLine[] = [];
  const events: string[] = [];
  const speech = new PlayfulNarration(() => busy, (line) => {
    spoken.push(line);
    events.push(`speak:${line.text}`);
    return () => { events.push(`cancel:${line.text}`); };
  });
  const triggered: { kind: string; object: THREE.Object3D }[] = [];
  const positioned: { kind: string; position: THREE.Vector3 }[] = [];
  const projected: ScreenPoint[] = [];
  const updates: number[] = [];
  let disposedEffects = 0;
  let sounds = 0;
  const exploration = new SceneExploration(interaction, speech, {
    trigger: (kind, object) => { triggered.push({ kind, object }); },
    triggerAt: (kind, position) => { positioned.push({ kind, position: position.clone() }); },
    update: (dt) => { updates.push(dt); },
    dispose: () => { disposedEffects++; }
  }, {
    project: (point) => {
      projected.push(point);
      return new THREE.Vector3(point.x / 100, 0.025, -point.y / 100);
    }
  }, ground, () => { sounds++; });
  const click = (popup: Popup) => {
    const hotspot = [...active].find((candidate) => candidate.object === popup.root && candidate.priority === -1);
    assert.ok(hotspot, "explorable artwork has its own fallback action");
    hotspot.onClick();
  };
  return {
    exploration, interaction, active, misses, removed, spoken, events, triggered, positioned, projected, updates, click,
    miss: (point: ScreenPoint) => { for (const listener of misses) listener(point); },
    setBusy: (value: boolean) => { busy = value; },
    sounds: () => sounds,
    disposedEffects: () => disposedEffects
  };
}

test("every character tap gets a reaction, surprise and sound even while narration is busy or cooling down", () => {
  const f = fixture();
  const tree = character(treeProfile);
  let reactions = 0;
  const react = tree.react.bind(tree);
  tree.react = () => { reactions++; react(); };
  tree.root.position.set(-2, 0.02, -5);
  f.exploration.add(tree);
  f.setBusy(true);
  f.click(tree);
  f.click(tree);
  assert.deepEqual(f.spoken, []);
  f.setBusy(false);
  f.click(tree);
  f.click(tree);
  assert.equal(f.spoken.length, 1);
  assert.equal(reactions, 4);
  assert.equal(f.sounds(), 4);
  assert.deepEqual(f.triggered.map((effect) => effect.kind), ["acorns", "acorns", "acorns", "acorns"]);
  assert.ok(f.triggered.every((effect) => effect.object === tree.root));
  assert.equal(tree.isColored, false);
  assert.deepEqual(tree.root.position.toArray(), [-2, 0.02, -5]);
  assert.deepEqual(tree.root.scale.toArray(), [1, 1, 1]);
  const hotspot = [...f.active][0];
  assert.equal(hotspot.priority, -1);
  assert.equal(hotspot.generous, false, "exploration does not broaden a puzzle target's hit area");
});

test("empty-paper taps always sparkle at the projected position, without interrupting busy speech", () => {
  const f = fixture();
  f.setBusy(true);
  f.miss({ x: 230, y: 90 });
  f.miss({ x: 400, y: 120 });
  assert.deepEqual(f.projected, [{ x: 230, y: 90 }, { x: 400, y: 120 }]);
  assert.deepEqual(f.positioned.map((effect) => effect.kind), ["stars", "stars"]);
  assert.deepEqual(f.positioned[0].position.toArray(), [2.3, 0.025, -0.9]);
  assert.deepEqual(f.spoken, []);
  assert.equal(f.sounds(), 2);
  f.setBusy(false);
  f.miss({ x: 100, y: 100 });
  f.miss({ x: 120, y: 100 });
  assert.deepEqual(f.spoken, [ground.lines[0]]);
  assert.equal(f.positioned.length, 4);
  assert.equal(f.sounds(), 4);
});

test("pond taps reward every touch with fish and sound while the water stays still", () => {
  const f = fixture();
  const pond = character({ id: "pond", reaction: "still", surprise: "fish", lines: [] });
  pond.root.position.set(1.5, 0.025, -7);
  let reactions = 0;
  pond.react = () => { reactions++; };
  f.exploration.add(pond);
  for (let tap = 0; tap < 3; tap++) f.click(pond);
  assert.equal(reactions, 0, "the pond never receives the character bounce reaction");
  assert.equal(f.sounds(), 3);
  assert.deepEqual(f.triggered.map((effect) => effect.kind), ["fish", "fish", "fish"]);
  assert.ok(f.triggered.every((effect) => effect.object === pond.root));
  assert.deepEqual(pond.root.position.toArray(), [1.5, 0.025, -7]);
  assert.equal(pond.isColored, false);
});

test("the puzzle target supplies a useful focus reply while optional taps never solve it", () => {
  const f = fixture();
  const tree = character(treeProfile);
  const frog = character({ id: "frog", lines: [{ text: "Ribbit!", speaker: "frog" }] });
  f.exploration.add(tree);
  f.exploration.startPuzzle([frog]);
  f.click(tree);
  assert.deepEqual(f.spoken, [treeProfile.focusReplies!.frog[0]]);
  assert.equal(tree.isColored, false);
  assert.equal(frog.isColored, false);
});

test("a successful puzzle tap cancels its owned aside before counting and finishing keeps effects playful", () => {
  const f = fixture();
  const tree = character(treeProfile);
  const first = character({ id: "frog", lines: [] });
  const second = character({ id: "frog", lines: [] });
  f.exploration.add(tree);
  const counting = new CountingLesson({
    cancel: () => { f.events.push("cancel:counting-instruction"); },
    enqueue: (text) => { f.events.push(`count:${text}`); }
  });
  let completions = 0;
  new ColoringPuzzle({
    interaction: f.interaction as unknown as InteractionManager,
    exploration: f.exploration,
    counting,
    targets: [first, second].map((popup) => ({ popup, color: "#45a64b" })),
    onComplete: () => {
      completions++;
      f.events.push("ending");
      // These taps remain rewarding while the ending owns narration.
      f.exploration.update(3);
      f.click(tree);
      f.miss({ x: 200, y: 100 });
    }
  });
  f.click(tree);
  const aside = f.spoken[0];
  const puzzleTap = (popup: Popup) => {
    const hotspot = [...f.active].find((candidate) => candidate.object === popup.root);
    assert.ok(hotspot);
    hotspot.onClick();
  };
  puzzleTap(first);
  assert.deepEqual(f.events.slice(-3), [
    `cancel:${aside.text}`, "cancel:counting-instruction", "count:One."
  ]);
  puzzleTap(second);
  assert.equal(completions, 1);
  assert.equal(counting.isComplete, true);
  assert.deepEqual(f.events.slice(-2), ["count:Two.", "ending"]);
  assert.equal(f.spoken.length, 1, "closing dialogue cannot be delayed by optional chatter");
  assert.equal(f.triggered.length, 2);
  assert.equal(f.positioned.length, 1);
  assert.equal(f.sounds(), 3);
});

test("disposing exploration removes only its registrations and stale callbacks cannot create aftereffects", () => {
  const f = fixture();
  const tree = character(treeProfile);
  f.exploration.add(tree);
  const explorationTap = [...f.active][0];
  const staleMiss = [...f.misses][0];
  const puzzle: Hotspot = { object: tree.root, onClick() {} };
  f.interaction.register(puzzle);
  f.click(tree);
  f.exploration.update(0.1);
  f.exploration.dispose();
  f.exploration.dispose();
  assert.deepEqual([...f.active], [puzzle]);
  assert.deepEqual(f.removed, [explorationTap]);
  assert.equal(f.misses.size, 0);
  assert.equal(f.disposedEffects(), 1);
  assert.equal(f.events.filter((event) => event.startsWith("cancel:")).length, 1);
  explorationTap.onClick();
  staleMiss({ x: 100, y: 100 });
  f.exploration.update(10);
  assert.equal(f.triggered.length, 1);
  assert.equal(f.positioned.length, 0);
  assert.equal(f.sounds(), 1);
  assert.deepEqual(f.updates, [0.1]);
  assert.equal(f.spoken.length, 1);
});

test("unprofiled or hidden artwork does not produce optional play", () => {
  const f = fixture();
  f.exploration.add(new Popup());
  assert.equal(f.active.size, 0);
  const tree = character(treeProfile);
  f.exploration.add(tree);
  tree.root.visible = false;
  f.click(tree);
  assert.equal(f.triggered.length, 0);
  assert.equal(f.sounds(), 0);
  assert.equal(f.spoken.length, 0);
});
