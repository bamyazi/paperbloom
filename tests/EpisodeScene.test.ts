import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import * as THREE from "three";
import { EpisodeScene } from "../src/game/episodes/EpisodeScene.ts";
import { NEW_EPISODES } from "../src/game/episodes/definitions.ts";
import { Scene06Sky } from "../src/game/scenes/Scene06_Sky.ts";
import type { SceneContext, StoryScene } from "../src/engine/StoryScene.ts";
import type { Hotspot, ScreenPoint, ViewportSize } from "../src/engine/interaction/Hotspot.ts";
import { HotspotPicker } from "../src/engine/interaction/HotspotPicker.ts";
import { InteractionManager } from "../src/engine/interaction/InteractionManager.ts";

/**
 * The canvas stub permits scene geometry/lifecycle tests without a GPU. It does
 * not rasterize artwork; real-browser QA owns silhouette and visual checks.
 */
function createDrawingContext(canvas: SceneCanvas): CanvasRenderingContext2D {
  const noop = () => {};
  const context: Record<string, unknown> = {
    canvas,
    createPattern: () => ({}),
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
    getImageData: (_x: number, _y: number, width: number, height: number) => {
      const data = new Uint8ClampedArray(width * height * 4);
      data.fill(255);
      return { data, width, height };
    },
    measureText: (text: string) => ({ width: text.length * 8 })
  };
  for (const name of [
    "arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip",
    "closePath", "drawImage", "ellipse", "fill", "fillRect", "fillText",
    "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect",
    "restore", "rotate", "roundRect", "save", "scale", "setLineDash",
    "setTransform", "stroke", "strokeRect", "strokeText", "translate"
  ]) {
    context[name] = noop;
  }
  return context as unknown as CanvasRenderingContext2D;
}

class SceneCanvas extends EventTarget {
  width = 1;
  height = 1;
  readonly style = { cursor: "default" };
  private readonly captures = new Set<number>();
  private readonly context = createDrawingContext(this);

  constructor(readonly viewport: ViewportSize = { width: 1, height: 1 }) {
    super();
  }

  getContext(): CanvasRenderingContext2D {
    return this.context;
  }

  getBoundingClientRect(): DOMRect {
    const { width, height } = this.viewport;
    return {
      x: 40, y: 28, left: 40, top: 28, right: 40 + width,
      bottom: 28 + height, width, height, toJSON: () => ({ width, height })
    };
  }

  setPointerCapture(pointerId: number): void {
    this.captures.add(pointerId);
  }

  hasPointerCapture(pointerId: number): boolean {
    return this.captures.has(pointerId);
  }

  releasePointerCapture(pointerId: number): void {
    this.captures.delete(pointerId);
  }

  tap(point: ScreenPoint): void {
    for (const type of ["pointerdown", "pointerup"]) {
      const event = new Event(type);
      Object.assign(event, {
        pointerId: 1, pointerType: "touch", button: 0,
        clientX: point.x + 40, clientY: point.y + 28
      });
      this.dispatchEvent(event);
    }
  }
}

/** Record public registrations while retaining the real picking/gesture code. */
class ObservedInteraction extends InteractionManager {
  readonly active: Hotspot[] = [];

  override register(hotspot: Hotspot): () => void {
    this.active.push(hotspot);
    const unregister = super.register(hotspot);
    return () => {
      const index = this.active.indexOf(hotspot);
      if (index >= 0) this.active.splice(index, 1);
      unregister();
    };
  }

  override unregister(object: THREE.Object3D): void {
    const index = this.active.findIndex((hotspot) => hotspot.object === object);
    if (index >= 0) this.active.splice(index, 1);
    super.unregister(object);
  }

  override clear(): void {
    this.active.length = 0;
    super.clear();
  }
}

const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
before(() => {
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: (tag: string) => {
        assert.equal(tag, "canvas", "scene art should only need canvas creation");
        return new SceneCanvas();
      }
    }
  });
});
after(() => {
  if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
  else Reflect.deleteProperty(globalThis, "document");
});

function createFixture(episode: StoryScene, viewport: ViewportSize) {
  const canvas = new SceneCanvas(viewport);
  canvas.width = viewport.width * 3;
  canvas.height = viewport.height * 3;
  const camera = new THREE.PerspectiveCamera(72, viewport.width / viewport.height, 0.1, 200);
  const world = new THREE.Scene();
  world.fog = new THREE.Fog("#efe9d8", 18, 40);
  world.background = new THREE.Color("#efe9d8");
  const interaction = new ObservedInteraction(camera, canvas as unknown as HTMLElement);
  const captions: string[] = [];
  const endings: string[] = [];
  const chimes: number[] = [];
  const narrator = {
    isSpeaking: false,
    cancel: () => { narrator.isSpeaking = false; }
  };
  let successes = 0;
  let completions = 0;
  episode.onComplete = () => { completions += 1; };
  const context: SceneContext = {
    scene: world,
    camera,
    interaction,
    hud: {
      showCaption: (text: string) => { captions.push(text); },
      showEndCard: (title: string) => {
        endings.push(title);
        narrator.isSpeaking = true;
      }
    } as unknown as SceneContext["hud"],
    sound: {
      pop: () => {},
      chime: (index: number) => { chimes.push(index); },
      success: () => { successes += 1; }
    } as unknown as SceneContext["sound"],
    narrator: narrator as SceneContext["narrator"]
  };
  episode.enter(context);
  return {
    episode, canvas, camera, world, interaction, captions, endings, chimes, narrator,
    successes: () => successes,
    completions: () => completions
  };
}

function advanceToPuzzle(fixture: ReturnType<typeof createFixture>): void {
  for (let frame = 0; frame < 200 && fixture.interaction.active.length === 0; frame += 1) {
    fixture.episode.update(0.1);
    assert.equal(fixture.completions(), 0, "camera travel must not finish the puzzle");
  }
  assert.ok(fixture.interaction.active.length > 0, "the puzzle must eventually become playable");
}

/** Find a real mesh hit within a conservative screen band above the caption. */
function reachablePoint(
  hotspot: Hotspot,
  active: readonly Hotspot[],
  camera: THREE.PerspectiveCamera,
  viewport: ViewportSize
): ScreenPoint | null {
  camera.updateWorldMatrix(true, false);
  hotspot.object.updateWorldMatrix(true, true);
  const picker = new HotspotPicker(camera);
  const points: ScreenPoint[] = [];
  hotspot.object.traverseVisible((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.userData.render) return;
    mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox!;
    for (const xFraction of [0.5, 0.25, 0.75]) {
      for (const yFraction of [0.5, 0.25, 0.75]) {
        const projected = new THREE.Vector3(
          THREE.MathUtils.lerp(box.min.x, box.max.x, xFraction),
          THREE.MathUtils.lerp(box.min.y, box.max.y, yFraction),
          box.min.z
        ).applyMatrix4(mesh.matrixWorld).project(camera);
        if (projected.z < -1 || projected.z > 1) continue;
        points.push({
          x: (projected.x + 1) * viewport.width / 2,
          y: (1 - projected.y) * viewport.height / 2
        });
      }
    }
  });
  return points.find((point) =>
    point.x >= 24 && point.x <= viewport.width - 24 &&
    point.y >= 24 && point.y <= viewport.height * 0.72 &&
    picker.pick(active, point, viewport, 0) === hotspot
  ) ?? null;
}

test("the new episodes offer four distinct, finite colouring puzzles", () => {
  assert.equal(NEW_EPISODES.length, 4);
  assert.equal(new Set(NEW_EPISODES.map((episode) => episode.id)).size, 4);
  assert.equal(new Set(NEW_EPISODES.map((episode) => episode.title)).size, 4);
  for (const episode of NEW_EPISODES) {
    assert.ok(episode.targets.length >= 3 && episode.targets.length <= 5);
    assert.ok(episode.opening.trim());
    assert.ok(episode.prompt.trim());
    assert.ok(episode.ending.trim());
    for (const target of episode.targets) {
      assert.ok(target.element.parts.length > 0);
      assert.ok(Number.isFinite(target.x) && Number.isFinite(target.z));
      assert.ok(Number.isFinite(target.scale) && target.scale > 0);
      assert.ok(/^#[0-9a-f]{6}$/i.test(target.color));
    }
  }
});

for (const viewport of [{ width: 844, height: 390 }, { width: 640, height: 360 }]) {
  for (const definition of NEW_EPISODES) {
    test(`${definition.title} is reachable and completable at ${viewport.width}×${viewport.height}`, (context) => {
      const fixture = createFixture(new EpisodeScene(definition), viewport);
      context.after(() => {
        fixture.episode.exit();
        fixture.interaction.dispose();
      });
      assert.equal(fixture.episode.root.parent, fixture.world);
      advanceToPuzzle(fixture);
      assert.equal(fixture.interaction.active.length, definition.targets.length);
      assert.ok(fixture.captions.includes(definition.prompt));

      // Verify reachability again after idle animations have advanced at the
      // stopped camera, rather than checking only the activation frame.
      for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
      const cameraAtPuzzle = fixture.camera.position.clone();
      const targets = [...fixture.interaction.active];
      for (const [index, hotspot] of targets.entries()) {
        const point = reachablePoint(hotspot, fixture.interaction.active, fixture.camera, viewport);
        assert.ok(point, `${definition.id} target ${index + 1} needs a distinct visible tap point above the caption`);
        fixture.canvas.tap(point);
        assert.equal(fixture.interaction.active.length, targets.length - index - 1);
        assert.equal(fixture.chimes.length, index + 1);
        assert.equal(fixture.completions(), 0, "colouring starts the hold before any transition");
      }
      assert.equal(fixture.successes(), 1);
      assert.ok(fixture.captions.includes(definition.ending));

      // At five rendered frames per wall-clock second, these capped updates
      // represent only two story seconds, so a wall timer must not turn the page.
      for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
      assert.equal(fixture.completions(), 0);
      for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
      assert.equal(fixture.completions(), 1);
      assert.ok(Math.abs(fixture.camera.position.z - cameraAtPuzzle.z) < 0.001);
      fixture.canvas.tap({ x: viewport.width / 2, y: viewport.height / 2 });
      assert.equal(fixture.completions(), 1, "the transition callback must only fire once");
      assert.equal(fixture.successes(), 1);
    });
  }
}

test("leaving an unfinished episode removes its scene graph and active taps", (context) => {
  const fixture = createFixture(new EpisodeScene(NEW_EPISODES[0]), { width: 844, height: 390 });
  context.after(() => fixture.interaction.dispose());
  advanceToPuzzle(fixture);
  const hotspot = fixture.interaction.active[0];
  const point = reachablePoint(hotspot, fixture.interaction.active, fixture.camera, fixture.canvas.viewport);
  assert.ok(point);

  fixture.episode.exit();
  assert.equal(fixture.episode.root.parent, null);
  assert.equal(fixture.episode.root.children.length, 0);
  assert.equal(fixture.interaction.active.length, 0);
  fixture.canvas.tap(point);
  assert.equal(fixture.chimes.length, 0);
  assert.equal(fixture.completions(), 0);
});

test("leaving during the celebration cancels the pending chapter callback", (context) => {
  const viewport = { width: 844, height: 390 };
  const fixture = createFixture(new EpisodeScene(NEW_EPISODES[0]), viewport);
  context.after(() => fixture.interaction.dispose());
  advanceToPuzzle(fixture);
  for (const hotspot of [...fixture.interaction.active]) {
    const point = reachablePoint(hotspot, fixture.interaction.active, fixture.camera, viewport);
    assert.ok(point);
    fixture.canvas.tap(point);
  }
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  fixture.episode.exit();
  for (let frame = 0; frame < 30; frame += 1) fixture.episode.update(0.1);

  assert.equal(fixture.episode.root.children.length, 0);
  assert.equal(fixture.completions(), 0);
});

test("the sky ending waits for four animated story seconds before covering the wash", (context) => {
  const viewport = { width: 844, height: 390 };
  const fixture = createFixture(new Scene06Sky(), viewport);
  context.after(() => {
    fixture.episode.exit();
    fixture.interaction.dispose();
  });
  advanceToPuzzle(fixture);
  for (const hotspot of [...fixture.interaction.active]) {
    const point = reachablePoint(hotspot, fixture.interaction.active, fixture.camera, viewport);
    assert.ok(point, "the sun and clouds need visible tap points");
    fixture.canvas.tap(point);
  }
  assert.equal(fixture.successes(), 1);
  assert.deepEqual(fixture.endings, []);
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, []);
  assert.equal(fixture.completions(), 0);
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 1);
  fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, ["The End"]);
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, ["The End"]);
  assert.equal(fixture.completions(), 1);
});

function finishPuzzle(fixture: ReturnType<typeof createFixture>): void {
  advanceToPuzzle(fixture);
  for (const hotspot of [...fixture.interaction.active]) {
    const point = reachablePoint(hotspot, fixture.interaction.active, fixture.camera, fixture.canvas.viewport);
    assert.ok(point);
    fixture.canvas.tap(point);
  }
}

test("a chapter waits for long closing narration and a fresh quiet pause", (context) => {
  const fixture = createFixture(new EpisodeScene(NEW_EPISODES[0]), { width: 844, height: 390 });
  context.after(() => {
    fixture.episode.exit();
    fixture.interaction.dispose();
  });
  finishPuzzle(fixture);
  fixture.narrator.isSpeaking = true;
  for (let frame = 0; frame < 80; frame += 1) fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 0, "the page must remain while the ending is spoken");

  fixture.narrator.isSpeaking = false;
  for (let frame = 0; frame < 4; frame += 1) fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 0);
  fixture.narrator.isSpeaking = true;
  fixture.episode.update(0.1);
  fixture.narrator.isSpeaking = false;
  for (let frame = 0; frame < 5; frame += 1) fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 0, "another utterance restarts the quiet pause");
  fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 1);
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 1);
});

test("the sky end card shares the narration gate before speaking its own ending", (context) => {
  const fixture = createFixture(new Scene06Sky(), { width: 844, height: 390 });
  context.after(() => {
    fixture.episode.exit();
    fixture.interaction.dispose();
  });
  finishPuzzle(fixture);
  fixture.narrator.isSpeaking = true;
  for (let frame = 0; frame < 80; frame += 1) fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, []);
  assert.equal(fixture.completions(), 0);

  fixture.narrator.isSpeaking = false;
  for (let frame = 0; frame < 5; frame += 1) fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, []);
  fixture.episode.update(0.1);
  assert.equal(fixture.completions(), 1);
  fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, ["The End"]);
  assert.equal(fixture.narrator.isSpeaking, true, "showing the card starts its own narration");
  for (let frame = 0; frame < 20; frame += 1) fixture.episode.update(0.1);
  assert.deepEqual(fixture.endings, ["The End"]);
  assert.equal(fixture.completions(), 1);
});

test("leaving the finale restores its borrowed atmosphere for a fresh reading", (context) => {
  const fixture = createFixture(new Scene06Sky(), { width: 844, height: 390 });
  context.after(() => fixture.interaction.dispose());
  const fogBefore = fixture.world.fog!.color.clone();
  const backgroundBefore = (fixture.world.background as THREE.Color).clone();
  finishPuzzle(fixture);
  for (let frame = 0; frame < 20; frame++) fixture.episode.update(0.1);
  assert.equal(fixture.world.fog!.color.equals(fogBefore), false);
  assert.equal((fixture.world.background as THREE.Color).equals(backgroundBefore), false);
  fixture.episode.exit();
  assert.equal(fixture.world.fog!.color.equals(fogBefore), true);
  assert.equal((fixture.world.background as THREE.Color).equals(backgroundBefore), true);
  assert.equal(fixture.narrator.isSpeaking, false);
  assert.equal(fixture.interaction.active.length, 0);
});
