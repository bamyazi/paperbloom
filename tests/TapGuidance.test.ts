import assert from "node:assert/strict";
import { test } from "node:test";
import { TapGuidance } from "../src/engine/guidance/TapGuidance.ts";
import type { TapHint, TapHintView } from "../src/engine/guidance/TapGuidance.ts";
import { Popup } from "../src/engine/Popup.ts";

function target(): Popup {
  const popup = new Popup();
  popup.snapOpen();
  return popup;
}

function fixture(targets: Popup[] = [target(), target()]) {
  const narration = { active: false };
  const hints: TapHint[] = [
    { text: "Tap a little friend.", speaker: "narrator" },
    { text: "Can you find this one?", speaker: "mabli" }
  ];
  const spoken: TapHint[] = [];
  const shown: Popup[] = [];
  const events: string[] = [];
  const visible = new Set(targets);
  let marker: Popup | null = null;
  let updates = 0;
  const view: TapHintView = {
    canShow: (popup) => visible.has(popup),
    show: (popup) => { marker = popup; shown.push(popup); },
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
    guidance, targets, narration, hints, spoken, shown, events, visible,
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

test("a second hint waits twelve quiet seconds and there are at most two per idle period", () => {
  const f = fixture();
  f.guidance.update(8);
  f.guidance.update(30);
  assert.equal(f.spoken.length, 1);
  f.narration.active = false;
  f.guidance.update(11.9);
  assert.equal(f.spoken.length, 1);
  f.guidance.update(0.1);
  assert.deepEqual(f.spoken, f.hints);
  f.narration.active = false;
  f.guidance.update(120);
  assert.equal(f.spoken.length, 2);
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
