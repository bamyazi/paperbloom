import assert from "node:assert/strict";
import { test } from "node:test";
import type { TestContext } from "node:test";
import { Hud } from "../src/engine/Hud.ts";
import type { Narrator } from "../src/engine/Narrator.ts";
import { CountingLesson } from "../src/engine/learning/CountingLesson.ts";

class FakeElement extends EventTarget {
  textContent = "";
  inert = false;
  disabled = false;
  private readonly classes = new Set<string>();
  readonly classList = {
    add: (name: string) => { this.classes.add(name); },
    remove: (name: string) => { this.classes.delete(name); },
    contains: (name: string) => this.classes.has(name)
  };

  /** Dispatch even when disabled to exercise the handler's own repeat guard. */
  click(): void {
    this.dispatchEvent(new Event("click"));
  }
}

function createFixture(context: TestContext) {
  const ids = [
    "title-card", "start-button", "caption", "end-card",
    "end-title", "end-subtitle", "restart-button"
  ];
  const elements = new Map(ids.map((id) => [id, new FakeElement()]));
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { getElementById: (id: string) => elements.get(id) ?? null }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });

  const spoken: string[] = [];
  const pending: string[] = [];
  let cancellations = 0;
  const narrator = {
    speak: (text: string) => {
      spoken.push(text);
      pending.splice(0, pending.length, text);
      return () => {};
    },
    enqueue: (text: string) => { pending.push(text); },
    cancel: () => {
      cancellations++;
      pending.length = 0;
    }
  } as unknown as Narrator;
  let displayedCount: number | null = null;
  const counting = new CountingLesson(narrator, {
    show: (count) => { displayedCount = count; },
    reset: () => { displayedCount = null; }
  });
  const hud = new Hud(narrator, counting);
  return {
    hud,
    counting,
    spoken,
    pending,
    element: (id: string) => elements.get(id)!,
    cancellations: () => cancellations,
    displayedCount: () => displayedCount
  };
}

test("restart is unavailable before the ending and a rapid repeat starts only once", (context) => {
  const fixture = createFixture(context);
  const button = fixture.element("restart-button");
  const endCard = fixture.element("end-card");
  let restarts = 0;
  fixture.hud.onRestart(() => {
    restarts++;
    assert.equal(button.disabled, true, "disable before the chapter callback runs");
    assert.equal(endCard.inert, true);
    assert.equal(endCard.classList.contains("visible"), false);
  });

  assert.equal(button.disabled, true);
  assert.equal(endCard.inert, true);
  button.click();
  assert.equal(restarts, 0);
  // A synthetic event on a hidden card must still be ignored if a caller
  // accidentally enables its button.
  button.disabled = false;
  button.click();
  assert.equal(restarts, 0);

  fixture.hud.showEndCard("The End", "A happy ending.");
  assert.equal(button.disabled, false);
  assert.equal(endCard.inert, false);
  button.click();
  button.click();
  button.click();
  assert.equal(restarts, 1);
});

test("restart clears old narration, number display and captions before opening chapter one", (context) => {
  const fixture = createFixture(context);
  fixture.counting.start(3);
  fixture.counting.advance();
  fixture.counting.advance();
  fixture.hud.showEndCard("The End", "A happy ending.");
  fixture.hud.showCaption("An old caption.", 2);
  const previousCancellations = fixture.cancellations();
  let restarts = 0;
  fixture.hud.onRestart(() => {
    restarts++;
    assert.deepEqual(fixture.pending, []);
    assert.equal(fixture.counting.hasCounted, false);
    assert.equal(fixture.counting.isComplete, false);
    assert.equal(fixture.displayedCount(), null);
    assert.equal(fixture.element("caption").classList.contains("visible"), false);
    assert.equal(fixture.cancellations(), previousCancellations + 1);
    fixture.hud.showCaption("A fresh first page.");
  });

  fixture.element("restart-button").click();
  fixture.hud.update(10);
  assert.equal(restarts, 1);
  assert.deepEqual(fixture.pending, ["A fresh first page."]);
  assert.equal(fixture.spoken.at(-1), "A fresh first page.");
  assert.equal(fixture.element("caption").textContent, "A fresh first page.");
  assert.equal(fixture.element("caption").classList.contains("visible"), true);
});

test("each later ending rearms the same restart listener for one more playthrough", (context) => {
  const fixture = createFixture(context);
  const button = fixture.element("restart-button");
  let restarts = 0;
  fixture.hud.onRestart(() => { restarts++; });

  fixture.hud.showEndCard("The End", "The first story.");
  button.click();
  button.click();
  assert.equal(restarts, 1);

  fixture.hud.showEndCard("The End", "The second story.");
  assert.equal(button.disabled, false);
  assert.equal(fixture.element("end-card").inert, false);
  assert.equal(fixture.element("end-card").classList.contains("visible"), true);
  button.click();
  button.click();
  assert.equal(restarts, 2);
  assert.equal(fixture.element("end-subtitle").textContent, "The second story.");
});
