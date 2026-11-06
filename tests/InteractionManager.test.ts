import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { InteractionManager } from "../src/engine/interaction/InteractionManager.ts";
import type { Hotspot } from "../src/engine/interaction/Hotspot.ts";
import { ColoringPuzzle } from "../src/engine/ColoringPuzzle.ts";
import { Popup } from "../src/engine/Popup.ts";

interface CanvasRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface PointerInput {
  pointerId: number;
  clientX: number;
  clientY: number;
  pointerType?: "touch" | "mouse";
  button?: number;
}

/** EventTarget exercises the public DOM contract without a browser or WebGL. */
class PointerCanvas extends EventTarget {
  readonly style = { cursor: "default" };
  readonly capturedPointers = new Set<number>();
  // Deliberately three times the CSS dimensions, as on a high-DPI screen.
  width = 2400;
  height = 1200;
  rect: CanvasRect = { left: 100, top: 50, width: 800, height: 400 };

  getBoundingClientRect(): DOMRect {
    const { left, top, width, height } = this.rect;
    return {
      x: left,
      y: top,
      left,
      top,
      width,
      height,
      right: left + width,
      bottom: top + height,
      toJSON: () => ({ left, top, width, height })
    };
  }

  setPointerCapture(pointerId: number): void {
    this.capturedPointers.add(pointerId);
  }

  hasPointerCapture(pointerId: number): boolean {
    return this.capturedPointers.has(pointerId);
  }

  releasePointerCapture(pointerId: number): void {
    if (!this.capturedPointers.delete(pointerId)) return;
    // Browsers emit this after capture is released; no pointer should reactivate.
    this.emit("lostpointercapture", { pointerId, clientX: 0, clientY: 0 });
  }

  emit(type: string, input: PointerInput): void {
    const event = new Event(type, { cancelable: true });
    Object.assign(event, { pointerType: "touch", button: 0, ...input });
    this.dispatchEvent(event);
  }

  tap(clientX: number, clientY: number, pointerId = 1): void {
    const input = { pointerId, clientX, clientY };
    this.emit("pointerdown", input);
    this.emit("pointerup", input);
  }
}

function createFixture() {
  const canvas = new PointerCanvas();
  const camera = new THREE.PerspectiveCamera(90, 2, 0.1, 100);
  camera.position.z = 5;
  const manager = new InteractionManager(camera, canvas as unknown as HTMLElement);
  return { canvas, camera, manager };
}

function createTarget(x = 0, width = 2, height = 2) {
  const object = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  );
  object.position.x = x;
  object.userData.render = () => {};
  let clicks = 0;
  const hovers: boolean[] = [];
  const hotspot: Hotspot = {
    object,
    generous: true,
    onClick: () => { clicks += 1; },
    onHover: (hovering) => { hovers.push(hovering); }
  };
  return { hotspot, hovers, clicks: () => clicks };
}

test("maps client taps through the offset CSS canvas rather than backing pixels", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const target = createTarget();
  manager.register(target.hotspot);

  canvas.tap(500, 250);
  assert.equal(target.clicks(), 1);
  canvas.tap(400, 200);
  assert.equal(target.clicks(), 1);
  assert.equal(canvas.capturedPointers.size, 0);
});

test("reads the current canvas offset and dimensions after orientation changes", (context) => {
  const { canvas, camera, manager } = createFixture();
  context.after(() => manager.dispose());
  const target = createTarget(1);
  manager.register(target.hotspot);

  canvas.tap(540, 250);
  assert.equal(target.clicks(), 1);

  canvas.rect = { left: 30, top: 70, width: 400, height: 800 };
  canvas.width = 1200;
  canvas.height = 2400;
  camera.aspect = 0.5;
  camera.updateProjectionMatrix();

  // The x=1 artwork now appears 80px right of the new CSS canvas centre.
  canvas.tap(310, 470);
  assert.equal(target.clicks(), 2);
  canvas.tap(540, 250);
  assert.equal(target.clicks(), 2);
});

test("tracks concurrent touches independently when they release in reverse order", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const left = createTarget(-1.5, 1, 1);
  const right = createTarget(1.5, 1, 1);
  manager.register(left.hotspot);
  manager.register(right.hotspot);

  canvas.emit("pointerdown", { pointerId: 11, clientX: 440, clientY: 250 });
  canvas.emit("pointerdown", { pointerId: 22, clientX: 560, clientY: 250 });
  assert.deepEqual([...canvas.capturedPointers].sort(), [11, 22]);

  canvas.emit("pointerup", { pointerId: 22, clientX: 560, clientY: 250 });
  assert.equal(right.clicks(), 1);
  assert.equal(left.clicks(), 0);
  assert.deepEqual([...canvas.capturedPointers], [11]);

  canvas.emit("pointerup", { pointerId: 11, clientX: 440, clientY: 250 });
  assert.equal(left.clicks(), 1);
  assert.equal(right.clicks(), 1);
  assert.equal(canvas.capturedPointers.size, 0);
});

test("a second touch on a completed target cannot activate the artwork underneath", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const foreground = createTarget();
  const background = createTarget();
  background.hotspot.object.position.z = -1;
  const recordForegroundClick = foreground.hotspot.onClick;
  foreground.hotspot.onClick = () => {
    recordForegroundClick();
    manager.unregister(foreground.hotspot.object);
  };
  manager.register(foreground.hotspot);
  manager.register(background.hotspot);

  canvas.emit("pointerdown", { pointerId: 1, clientX: 500, clientY: 250 });
  canvas.emit("pointerdown", { pointerId: 2, clientX: 500, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 1, clientX: 500, clientY: 250 });
  assert.equal(foreground.clicks(), 1);
  canvas.emit("pointerup", { pointerId: 2, clientX: 500, clientY: 250 });
  assert.equal(foreground.clicks(), 1);
  assert.equal(background.clicks(), 0);
  assert.equal(canvas.capturedPointers.size, 0);

  // Once the stale gesture is over, a fresh tap may select the revealed piece.
  canvas.tap(500, 250, 3);
  assert.equal(background.clicks(), 1);
});

for (const cancellation of ["pointercancel", "lostpointercapture"]) {
  test(`${cancellation} cancels activation and permits the next tap`, (context) => {
    const { canvas, manager } = createFixture();
    context.after(() => manager.dispose());
    const target = createTarget();
    manager.register(target.hotspot);
    const input = { pointerId: 7, clientX: 500, clientY: 250 };

    canvas.emit("pointerdown", input);
    canvas.emit(cancellation, input);
    canvas.emit("pointerup", input);
    assert.equal(target.clicks(), 0);
    assert.equal(canvas.capturedPointers.size, 0);

    canvas.tap(500, 250, 8);
    assert.equal(target.clicks(), 1);
  });
}

test("clearing a scene releases capture and discards its unfinished taps", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const oldTarget = createTarget();
  const nextTarget = createTarget();
  manager.register(oldTarget.hotspot);
  const input = { pointerId: 1, clientX: 500, clientY: 250 };

  canvas.emit("pointerdown", input);
  manager.clear();
  manager.register(nextTarget.hotspot);
  assert.equal(canvas.capturedPointers.size, 0);
  canvas.emit("pointerup", input);
  assert.equal(oldTarget.clicks(), 0);
  assert.equal(nextTarget.clicks(), 0);

  canvas.tap(500, 250, 2);
  assert.equal(nextTarget.clicks(), 1);
});

test("disabling interaction discards taps begun before or during the disabled period", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const target = createTarget();
  manager.register(target.hotspot);

  canvas.emit("pointerdown", { pointerId: 1, clientX: 500, clientY: 250 });
  manager.setEnabled(false);
  assert.equal(canvas.capturedPointers.size, 0);
  canvas.emit("pointerdown", { pointerId: 2, clientX: 500, clientY: 250 });
  assert.equal(canvas.capturedPointers.size, 0);
  manager.setEnabled(true);
  canvas.emit("pointerup", { pointerId: 1, clientX: 500, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 2, clientX: 500, clientY: 250 });
  assert.equal(target.clicks(), 0);

  canvas.tap(500, 250, 3);
  assert.equal(target.clicks(), 1);
});

test("a small release drift retains the originally pressed artwork", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const left = createTarget(-0.25, 0.2, 1);
  const right = createTarget(0.25, 0.2, 1);
  manager.register(left.hotspot);
  manager.register(right.hotspot);

  canvas.emit("pointerdown", { pointerId: 1, clientX: 490, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 1, clientX: 510, clientY: 250 });
  assert.equal(left.clicks(), 1);
  assert.equal(right.clicks(), 0);
});

test("a release more than 30 CSS pixels from the press is a swipe", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const target = createTarget();
  manager.register(target.hotspot);

  canvas.emit("pointerdown", { pointerId: 1, clientX: 500, clientY: 250 });
  canvas.emit("pointermove", { pointerId: 1, clientX: 540, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 1, clientX: 540, clientY: 250 });
  assert.equal(target.clicks(), 0);
  assert.equal(canvas.capturedPointers.size, 0);
});

test("disposal clears hover, releases capture and removes pointer handling", () => {
  const { canvas, manager } = createFixture();
  const target = createTarget();
  manager.register(target.hotspot);
  canvas.emit("pointermove", {
    pointerId: 1,
    clientX: 500,
    clientY: 250,
    pointerType: "mouse"
  });
  assert.deepEqual(target.hovers, [true]);
  assert.equal(canvas.style.cursor, "pointer");
  canvas.emit("pointerdown", { pointerId: 2, clientX: 500, clientY: 250 });

  manager.dispose();
  assert.deepEqual(target.hovers, [true, false]);
  assert.equal(canvas.style.cursor, "default");
  assert.equal(canvas.capturedPointers.size, 0);
  canvas.emit("pointerup", { pointerId: 2, clientX: 500, clientY: 250 });
  canvas.tap(500, 250, 3);
  canvas.emit("pointermove", {
    pointerId: 4,
    clientX: 500,
    clientY: 250,
    pointerType: "mouse"
  });
  assert.equal(target.clicks(), 0);
  assert.deepEqual(target.hovers, [true, false]);
  assert.equal(canvas.capturedPointers.size, 0);
});

test("a registration disposer removes only its own action and restores hover exactly once", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const puzzle = createTarget();
  let chats = 0;
  const stopExploration = manager.register({
    object: puzzle.hotspot.object,
    priority: -1,
    onClick: () => { chats++; }
  });
  const stopPuzzle = manager.register(puzzle.hotspot);
  canvas.emit("pointermove", { pointerId: 1, clientX: 500, clientY: 250, pointerType: "mouse" });
  assert.deepEqual(puzzle.hovers, [true]);
  stopPuzzle();
  stopPuzzle();
  assert.deepEqual(puzzle.hovers, [true, false]);
  assert.equal(canvas.style.cursor, "default");
  canvas.tap(500, 250);
  assert.equal(chats, 1, "the separate action on this same object survives");
  assert.equal(puzzle.clicks(), 0);
  stopExploration();
  stopExploration();
  canvas.tap(500, 250);
  assert.equal(chats, 1);
});

test("colouring removes its own action, preserves character chat and discards a second stale finger", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const popup = new Popup();
  popup.addHinge({
    mesh: createTarget().hotspot.object as THREE.Mesh,
    position: new THREE.Vector3(),
    from: 0,
    to: 0
  });
  popup.snapOpen();
  let chats = 0;
  let progress = 0;
  let completions = 0;
  let misses = 0;
  manager.onMiss(() => { misses++; });
  manager.register({ object: popup.root, priority: -1, onClick: () => { chats++; } });
  new ColoringPuzzle({
    interaction: manager,
    targets: [{ popup, color: "#efc246" }],
    onColor: () => { progress++; },
    onComplete: () => { completions++; }
  });

  canvas.emit("pointerdown", { pointerId: 1, clientX: 500, clientY: 250 });
  canvas.emit("pointerdown", { pointerId: 2, clientX: 500, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 1, clientX: 500, clientY: 250 });
  canvas.emit("pointerup", { pointerId: 2, clientX: 500, clientY: 250 });
  assert.equal(popup.isColored, true);
  assert.equal(progress, 1);
  assert.equal(completions, 1);
  assert.equal(chats, 0);
  assert.equal(misses, 0, "a completed target's stale touch is not an empty-paper tap");
  canvas.tap(500, 250, 3);
  assert.equal(chats, 1);
  assert.equal(progress, 1);
  assert.equal(completions, 1);
});

test("empty-paper taps notify subscribers in canvas CSS pixels and unsubscribe independently", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  const first: { x: number; y: number }[] = [];
  const second: { x: number; y: number }[] = [];
  const stopFirst = manager.onMiss((point) => { first.push(point); });
  const stopSecond = manager.onMiss((point) => { second.push(point); });
  canvas.tap(210, 160);
  assert.deepEqual(first, [{ x: 110, y: 110 }]);
  assert.deepEqual(second, first);
  stopFirst();
  stopFirst();
  canvas.tap(220, 170);
  assert.equal(first.length, 1);
  assert.deepEqual(second.at(-1), { x: 120, y: 120 });
  stopSecond();
  canvas.tap(230, 180);
  assert.equal(second.length, 2);
});

test("hits, swipes, cancelled gestures and disabled input do not report empty-paper taps", (context) => {
  const { canvas, manager } = createFixture();
  context.after(() => manager.dispose());
  let misses = 0;
  manager.onMiss(() => { misses++; });
  const target = createTarget();
  manager.register(target.hotspot);
  canvas.tap(500, 250);
  assert.equal(target.clicks(), 1);
  const blank = { pointerId: 2, clientX: 700, clientY: 350 };
  canvas.emit("pointerdown", blank);
  canvas.emit("pointerup", { ...blank, clientX: 740 });
  canvas.emit("pointerdown", blank);
  canvas.emit("pointercancel", blank);
  canvas.emit("pointerup", blank);
  manager.setEnabled(false);
  canvas.tap(700, 350);
  manager.setEnabled(true);
  canvas.emit("pointerup", blank);
  assert.equal(misses, 0);
  canvas.tap(700, 350);
  assert.equal(misses, 1, "a fresh unhit tap still works after the cancelled gestures");
});
