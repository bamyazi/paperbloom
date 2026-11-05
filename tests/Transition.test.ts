import assert from "node:assert/strict";
import { test } from "node:test";
import { Transition } from "../src/engine/Transition.ts";

type AnimationMode = "finish" | "cancel" | "unsupported";

class PaperElement {
  className = "";
  textContent = "";
  readonly children: PaperElement[] = [];
  readonly frames: Keyframe[][] = [];
  readonly style: Record<string, unknown> = {
    setProperty: (name: string, value: string) => { this.style[name] = value; }
  };

  constructor(private readonly mode: AnimationMode) {}

  append(...children: PaperElement[]): void {
    this.children.push(...children);
  }

  appendChild(child: PaperElement): void {
    this.children.push(child);
  }

  setAttribute(): void {}

  animate(frames: Keyframe[]) {
    if (this.mode === "unsupported") throw new Error("Compositor unavailable");
    this.frames.push(frames);
    return {
      finished: this.mode === "cancel" ? Promise.reject(new Error("Cancelled")) : Promise.resolve(),
      cancel: () => {}
    };
  }
}

function installDocument(
  context: { after(callback: () => void): void },
  mode: AnimationMode = "finish",
  reducedMotion = false
) {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const elements: PaperElement[] = [];
  const app = new PaperElement(mode);
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      getElementById: () => app,
      body: new PaperElement(mode),
      createElement: () => {
        const element = new PaperElement(mode);
        elements.push(element);
        return element;
      }
    }
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { matchMedia: () => ({ matches: reducedMotion }) }
  });
  context.after(() => {
    if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
    else Reflect.deleteProperty(globalThis, "document");
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else Reflect.deleteProperty(globalThis, "window");
  });
  return { app, elements };
}

const settle = () => new Promise<void>((resolve) => setImmediate(resolve));

test("page turns queue their covered callbacks and restore input after the reveal", async (context) => {
  const { app, elements } = installDocument(context);
  const transition = new Transition();
  const order: number[] = [];
  const overlay = app.children[0];
  const shield = elements.find((element) => element.className === "page-turn-shield")!;
  for (const index of [1, 2]) {
    transition.wipe(() => {
      assert.equal(overlay.style.pointerEvents, "auto");
      assert.equal(shield.style.opacity, "1", "construction is hidden by solid paper");
      order.push(index);
    }, 0);
  }
  assert.deepEqual(order, []);
  await settle();
  assert.deepEqual(order, [1, 2]);
  assert.equal(overlay.style.pointerEvents, "none");
  assert.equal(overlay.style.visibility, "hidden");
});

for (const mode of ["cancel", "unsupported"] as const) {
  test(`${mode} animations still swap once and release the input shield`, async (context) => {
    const { app } = installDocument(context, mode);
    const transition = new Transition();
    let swaps = 0;
    transition.wipe(() => { swaps += 1; }, 0);
    await settle();
    assert.equal(swaps, 1);
    assert.equal(app.children[0].style.pointerEvents, "none");
    assert.equal(app.children[0].style.visibility, "hidden");
  });
}

test("a failed scene callback cannot leave the page blocking the game", async (context) => {
  const { app } = installDocument(context);
  const originalError = console.error;
  console.error = () => {};
  context.after(() => { console.error = originalError; });
  const transition = new Transition();
  let attempts = 0;
  transition.wipe(() => {
    attempts += 1;
    throw new Error("Scene construction failed");
  }, 0);
  await settle();
  assert.equal(attempts, 1);
  assert.equal(app.children[0].style.pointerEvents, "none");
});

test("reduced motion uses opacity fades without any moving paper", async (context) => {
  const { app, elements } = installDocument(context, "finish", true);
  const transition = new Transition();
  let swaps = 0;
  transition.wipe(() => { swaps += 1; }, 0);
  await settle();
  assert.equal(swaps, 1);
  const sheet = elements.find((element) => element.className === "page-turn-sheet")!;
  assert.equal(sheet.style.display, "none");
  assert.ok(elements.flatMap((element) => element.frames).flat().every((frame) => !("transform" in frame)));
  assert.equal(app.children[0].style.pointerEvents, "none");
});
