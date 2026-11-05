import assert from "node:assert/strict";
import { test } from "node:test";
import { ColoringPuzzle } from "../src/engine/ColoringPuzzle.ts";
import { CountingLesson } from "../src/engine/learning/CountingLesson.ts";
import { Popup } from "../src/engine/Popup.ts";
import type { Hotspot } from "../src/engine/interaction/Hotspot.ts";
import type { InteractionManager } from "../src/engine/interaction/InteractionManager.ts";

function createFixture() {
  const spoken: string[] = [];
  const counts: number[] = [];
  let cancellations = 0;
  let resets = 0;
  const lesson = new CountingLesson({
    cancel: () => { cancellations++; },
    enqueue: (text: string) => { spoken.push(text); }
  }, {
    show: (count) => { counts.push(count); },
    reset: () => { resets++; }
  });
  return { lesson, spoken, counts, cancellations: () => cancellations, resets: () => resets };
}

test("each new target counts once and retapping a coloured target does not count", () => {
  const fixture = createFixture();
  const hotspots: Hotspot[] = [];
  const interaction = {
    register: (hotspot: Hotspot) => hotspots.push(hotspot),
    unregister: () => {}
  } as unknown as InteractionManager;
  let complete = 0;
  new ColoringPuzzle({
    interaction,
    counting: fixture.lesson,
    targets: [new Popup(), new Popup()].map((popup) => ({ popup, color: "#f5cc45" })),
    onComplete: () => { complete++; }
  });
  hotspots[0].onClick();
  hotspots[0].onClick();
  hotspots[1].onClick();
  hotspots[1].onClick();
  assert.deepEqual(fixture.spoken, ["One.", "Two."]);
  assert.deepEqual(fixture.counts, [1, 2]);
  assert.equal(fixture.cancellations(), 1, "only the first count interrupts the instruction");
  assert.equal(complete, 1);
  assert.equal(fixture.lesson.isComplete, true);
});

test("starting a new chapter hides the old total and restarts at one", () => {
  const fixture = createFixture();
  fixture.lesson.start(2);
  fixture.lesson.advance();
  fixture.lesson.advance();
  assert.equal(fixture.lesson.isComplete, true);
  fixture.lesson.reset();
  assert.equal(fixture.lesson.hasCounted, false);
  assert.equal(fixture.lesson.isComplete, false);
  fixture.lesson.start(3);
  fixture.lesson.advance();
  assert.deepEqual(fixture.spoken, ["One.", "Two.", "One."]);
  assert.deepEqual(fixture.counts, [1, 2, 1]);
  assert.equal(fixture.resets(), 3);
});

test("single-target and empty puzzles do not start a counting lesson", () => {
  const fixture = createFixture();
  fixture.lesson.start(1);
  fixture.lesson.advance();
  fixture.lesson.start(0);
  fixture.lesson.advance();
  assert.deepEqual(fixture.spoken, []);
  assert.deepEqual(fixture.counts, []);
  assert.equal(fixture.cancellations(), 0);
});
