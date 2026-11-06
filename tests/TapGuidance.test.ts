import assert from "node:assert/strict";
import { test } from "node:test";
import { TapGuidance } from "../src/engine/guidance/TapGuidance.ts";
import type { TapHint, TapHintView } from "../src/engine/guidance/TapGuidance.ts";
import { Popup } from "../src/engine/Popup.ts";

const flashingChanges = new WeakMap<Popup, boolean[]>();

function target(): Popup {
  const popup = new Popup();
  const changes: boolean[] = [];
  flashingChanges.set(popup, changes);
  const setHintFlashing = popup.setHintFlashing.bind(popup);
  popup.setHintFlashing = (flashing) => {
    changes.push(flashing);
    setHintFlashing(flashing);
  };
  popup.snapOpen();
  return popup;
}

function isFlashing(popup: Popup): boolean {
  return flashingChanges.get(popup)?.at(-1) ?? false;
}

function fixture(targets: Popup[] = [target(), target()]) {
  const narration = { active: false };
  const hints: TapHint[] = [
    { text: "Tap a little friend.", speaker: "narrator" },
    { text: "Can you find this one?", speaker: "mabli" }
  ];
  const spoken: TapHint[] = [];
  const shown: Popup[] = [];
  const emphasized: boolean[] = [];
  const events: string[] = [];
  const visible = new Set(targets);
  let marker: Popup | null = null;
  let updates = 0;
  const view: TapHintView = {
    canShow: (popup) => visible.has(popup),
    show: (popup, stronger = false) => {
      marker = popup;
      shown.push(popup);
      emphasized.push(stronger);
    },
    update: () => { updates++; },
    reset: () => { marker = null; }
  };
  const guidance = new TapGuidance({
    hints,
    isNarrating: () => narration.active,
    showHint: (hint) => {
      spoken.push(hint);
      events.push(`speak:${hint.text}`);
      narration.active = true;
      return () => {
        events.push(`cancel:${hint.text}`);
        narration.active = false;
      };
    },
    view
  });
  guidance.start(targets);
  return {
    guidance, targets, narration, hints, spoken, shown, emphasized, events, visible,
    marker: () => marker,
    updates: () => updates
  };
}

test("the first hint waits for eight quiet seconds after narration finishes", () => {
  const f = fixture();
  f.narration.active = true;
  f.guidance.update(60);
  assert.equal(f.spoken.length, 0);
  f.narration.active = false;
  f.guidance.update(7.9);
  assert.equal(f.spoken.length, 0);
  f.guidance.update(0.1);
  assert.deepEqual(f.spoken, [f.hints[0]]);
  assert.equal(f.shown[0], f.targets[0]);
});

test("queued counting or other narration cannot be interrupted by an idle hint", () => {
  const f = fixture();
  f.guidance.update(7);
  f.narration.active = true;
  f.guidance.update(20);
  assert.equal(f.spoken.length, 0);
  f.narration.active = false;
  f.guidance.update(7.9);
  assert.equal(f.spoken.length, 0);
  f.guidance.update(0.1);
  assert.equal(f.spoken.length, 1);
});

test("hints keep repeating twelve quiet seconds apart and flash from the third onward", () => {
  const f = fixture();
  f.guidance.update(8);
  f.guidance.update(30);
  assert.equal(f.spoken.length, 1);
  f.narration.active = false;
  f.guidance.update(11.9);
  assert.equal(f.spoken.length, 1);
  f.guidance.update(0.1);
  assert.deepEqual(f.spoken, f.hints);
  assert.deepEqual(f.emphasized, [false, false]);
  assert.equal(isFlashing(f.targets[0]), false);

  for (let count = 3; count <= 5; count++) {
    f.narration.active = false;
    f.guidance.update(11.9);
    assert.equal(f.spoken.length, count - 1);
    f.guidance.update(0.1);
    assert.equal(f.spoken.length, count);
    assert.equal(f.spoken.at(-1), f.hints[(count - 1) % f.hints.length]);
    assert.equal(f.emphasized.at(-1), true);
    assert.equal(isFlashing(f.targets[0]), true);
  }
  assert.equal(f.marker(), f.targets[0]);
  assert.ok(f.updates() > 0);
});

test("successful taps cancel only their hint before the next count and restart the delay", () => {
  const f = fixture();
  f.guidance.update(8);
  f.targets[0].colorize("#f4c20d");
  f.guidance.progress(f.targets[0]);
  f.events.push("count:One.");
  assert.deepEqual(f.events.slice(-2), ["cancel:Tap a little friend.", "count:One."]);
  assert.equal(f.marker(), null);
  f.guidance.update(7.9);
  assert.equal(f.spoken.length, 1);
  f.guidance.update(0.1);
  assert.equal(f.spoken.length, 2);
  assert.equal(f.shown.at(-1), f.targets[1]);
  assert.equal(f.spoken.at(-1), f.hints[0]);
});

test("unknown or duplicate successes do not keep postponing help", () => {
  const f = fixture();
  f.guidance.update(7);
  f.guidance.progress(target());
  f.guidance.update(1);
  assert.equal(f.spoken.length, 1);
  f.targets[0].colorize("#f4c20d");
  f.guidance.progress(f.targets[0]);
  f.guidance.update(7);
  f.guidance.progress(f.targets[0]);
  f.guidance.update(1);
  assert.equal(f.spoken.length, 2);
  assert.equal(f.shown.at(-1), f.targets[1]);
});

test("the final successful tap and scene reset stop hints for good", () => {
  const f = fixture([target()]);
  f.guidance.update(8);
  f.targets[0].colorize("#f4c20d");
  f.guidance.progress(f.targets[0]);
  f.guidance.update(1000);
  assert.equal(f.spoken.length, 1);
  assert.equal(f.marker(), null);
  f.guidance.reset();
  f.guidance.reset();
  f.guidance.update(1000);
  assert.equal(f.spoken.length, 1);
});

test("background/inactive time clears an existing hint and requires a fresh quiet interval", () => {
  const f = fixture();
  f.guidance.update(8);
  f.guidance.update(100, false);
  assert.equal(f.marker(), null);
  assert.equal(f.narration.active, false);
  f.guidance.update(7.9, true);
  assert.equal(f.spoken.length, 1);
  f.guidance.update(0.1, true);
  assert.equal(f.spoken.length, 2);
  assert.equal(f.spoken.at(-1), f.hints[0]);
});

test("only visible, open, uncoloured targets that the view can show are eligible", () => {
  const hidden = target();
  hidden.root.visible = false;
  const unopened = new Popup();
  const coloured = target();
  coloured.colorize("#f4c20d");
  const offscreen = target();
  const valid = target();
  const f = fixture([hidden, unopened, coloured, offscreen, valid]);
  f.visible.delete(offscreen);
  f.guidance.update(8);
  assert.equal(f.shown[0], valid);
});

test("losing all eligible targets clears the marker and pauses the hint deadline", () => {
  const f = fixture([target()]);
  f.guidance.update(8);
  f.visible.clear();
  f.guidance.update(100);
  assert.equal(f.marker(), null);
  assert.equal(f.narration.active, false);
  f.visible.add(f.targets[0]);
  f.guidance.update(7.9);
  assert.equal(f.spoken.length, 1);
  f.guidance.update(0.1);
  assert.equal(f.spoken.length, 2);
});

test("an earlier target returning onscreen cannot steal an active flashing hint", () => {
  const f = fixture();
  f.visible.delete(f.targets[0]);
  f.guidance.update(8);
  for (let hint = 0; hint < 2; hint++) {
    f.narration.active = false;
    f.guidance.update(12);
  }
  assert.equal(f.spoken.length, 3);
  assert.equal(f.marker(), f.targets[1]);
  assert.equal(isFlashing(f.targets[1]), true);

  f.visible.add(f.targets[0]);
  f.narration.active = false;
  f.guidance.update(12);
  assert.equal(f.spoken.length, 4);
  assert.ok(f.shown.every((popup) => popup === f.targets[1]));
  assert.equal(f.marker(), f.targets[1]);
  assert.equal(isFlashing(f.targets[0]), false);
  assert.equal(isFlashing(f.targets[1]), true);

  f.guidance.reset();
  assert.equal(f.marker(), null);
  assert.equal(f.narration.active, false);
  assert.ok(f.targets.every((popup) => !isFlashing(popup)));
  assert.deepEqual(flashingChanges.get(f.targets[0]), [], "the unselected target was never flashed");
  assert.equal(flashingChanges.get(f.targets[1])?.at(-1), false);
});

for (const reason of ["successful tap", "background", "offscreen", "scene reset"] as const) {
  test(`${reason} stops an emphasized hint and restarts with the first calm reminder`, () => {
    const f = fixture();
    f.guidance.update(8);
    for (let hint = 0; hint < 2; hint++) {
      f.narration.active = false;
      f.guidance.update(12);
    }
    assert.equal(f.spoken.length, 3);
    assert.equal(isFlashing(f.targets[0]), true);

    if (reason === "successful tap") {
      f.targets[0].colorize("#f4c20d");
      f.guidance.progress(f.targets[0]);
    } else if (reason === "background") {
      f.guidance.update(100, false);
    } else if (reason === "offscreen") {
      f.visible.clear();
      f.guidance.update(100);
      f.visible.add(f.targets[0]);
    } else {
      f.guidance.reset();
      f.guidance.start([f.targets[1]]);
    }

    assert.equal(isFlashing(f.targets[0]), false);
    assert.equal(f.marker(), null);
    assert.equal(f.narration.active, false);
    f.guidance.update(7.9);
    assert.equal(f.spoken.length, 3);
    f.guidance.update(0.1);
    assert.equal(f.spoken.length, 4);
    assert.equal(f.spoken.at(-1), f.hints[0]);
    assert.equal(f.emphasized.at(-1), false);
    assert.ok(f.targets.every((popup) => !isFlashing(popup)));
  });
}
