import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { Popup } from "../src/engine/Popup.ts";
import { TapHintDisplay } from "../src/game/presentation/TapHintDisplay.ts";
import { projectTapHintBounds } from "../src/game/presentation/TapHintProjection.ts";
import type { HintBounds, HintViewport } from "../src/game/presentation/TapHintProjection.ts";

const viewport = { left: 100, top: 50, width: 800, height: 400 };

function createFixture() {
  const camera = new THREE.PerspectiveCamera(90, 2, 0.1, 100);
  camera.position.z = 5;
  const art = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  );
  art.userData.render = () => {};
  const popup = new Popup();
  popup.addHinge({ mesh: art, position: new THREE.Vector3(), from: 0 });
  popup.snapOpen();
  return { camera, art, popup };
}

function assertBounds(actual: HintBounds | null, expected: HintBounds): void {
  assert.ok(actual);
  for (const key of ["left", "top", "width", "height"] as const) {
    assert.ok(Math.abs(actual[key] - expected[key]) < 1e-9, `${key}: ${actual[key]} instead of ${expected[key]}`);
  }
}

test("hint bounds use client CSS pixels including the canvas offset", () => {
  const { camera, popup } = createFixture();
  assertBounds(projectTapHintBounds(popup.motionGroup, camera, viewport), {
    left: 460, top: 210, width: 80, height: 80
  });
});

test("motion and camera changes are reflected before any renderer runs", () => {
  const { camera, popup } = createFixture();
  projectTapHintBounds(popup.motionGroup, camera, viewport);
  popup.motionGroup.position.set(1, 0.5, 0);
  camera.position.x = 0.5;
  assertBounds(projectTapHintBounds(popup.motionGroup, camera, viewport), {
    left: 480, top: 190, width: 80, height: 80
  });
});

test("resizing and rotating the viewport keeps the hint on the same artwork", () => {
  const { camera, popup } = createFixture();
  projectTapHintBounds(popup.motionGroup, camera, viewport);
  camera.aspect = 0.5;
  camera.updateProjectionMatrix();
  assertBounds(projectTapHintBounds(popup.motionGroup, camera, {
    left: 20, top: 80, width: 400, height: 800
  }), { left: 140, top: 400, width: 160, height: 160 });
});

test("contact shadows and invisible artwork cannot enlarge a hint", () => {
  const { camera, popup, art } = createFixture();
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(50, 50));
  popup.root.add(shadow);
  assertBounds(projectTapHintBounds(popup.motionGroup, camera, viewport), {
    left: 460, top: 210, width: 80, height: 80
  });
  art.visible = false;
  assert.equal(projectTapHintBounds(popup.motionGroup, camera, viewport), null);
  art.visible = true;
  popup.root.visible = false;
  assert.equal(projectTapHintBounds(popup.motionGroup, camera, viewport), null);
});

test("offscreen, behind-camera and near-plane-crossing targets have no hint", () => {
  const { camera, popup } = createFixture();
  popup.root.position.x = 30;
  assert.equal(projectTapHintBounds(popup.motionGroup, camera, viewport), null);
  popup.root.position.set(0, 0, 6);
  assert.equal(projectTapHintBounds(popup.motionGroup, camera, viewport), null);
  popup.root.position.z = 4.95;
  popup.motionGroup.rotation.x = Math.PI / 4;
  assert.equal(projectTapHintBounds(popup.motionGroup, camera, viewport), null);
});

class HintElement {
  className = "";
  textContent = "";
  hidden = false;
  visible = true;
  readonly style: Record<string, string> = {};
  readonly children: HintElement[] = [];
  readonly classList = { contains: () => this.visible };

  constructor(public rect: HintViewport = viewport) {}
  setAttribute(): void {}
  append(...children: HintElement[]): void { this.children.push(...children); }
  appendChild(child: HintElement): void { this.children.push(child); }
  remove(): void {}
  getBoundingClientRect(): DOMRect {
    const { left, top, width, height } = this.rect;
    return { x: left, y: top, left, top, width, height, right: left + width,
      bottom: top + height, toJSON: () => this.rect };
  }
}

test("canShow is a presentation-free query and refuses the caption's area", (context) => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const parent = new HintElement();
  const caption = new HintElement({ left: 180, top: 360, width: 640, height: 50 });
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => new HintElement(),
      getElementById: (id: string) => id === "caption" ? caption : parent,
      body: parent
    }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });
  const { camera, popup } = createFixture();
  const display = new TapHintDisplay(camera, new HintElement() as unknown as HTMLElement, parent as unknown as HTMLElement);
  context.after(() => display.dispose());
  const overlay = parent.children[0];
  assert.equal(display.canShow(popup), true);
  assert.equal(overlay.hidden, true, "eligibility must not reveal or replace a hint");
  display.show(popup);
  assert.equal(overlay.hidden, false);
  const halo = overlay.children[0];
  assert.ok(Math.abs(Number.parseFloat(halo.style.left) - 448) < 1e-9);
  assert.ok(Math.abs(Number.parseFloat(halo.style.top) - 198) < 1e-9);
  const finger = overlay.children[1];
  assert.ok(Number.parseFloat(finger.style.top) + 44 <= caption.rect.top - 8);

  caption.rect.top = 180;
  assert.equal(display.canShow(popup), false);
  display.update();
  assert.equal(overlay.hidden, true);
  caption.visible = false;
  display.update();
  assert.equal(overlay.hidden, false);
  popup.colorize("#ffdd55");
  display.update();
  assert.equal(overlay.hidden, true);
  assert.equal(display.canShow(popup), false);
});
