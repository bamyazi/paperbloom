import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { PopupMotion } from "../src/engine/animation/PopupMotion.ts";
import { Popup } from "../src/engine/Popup.ts";
import { HotspotPicker } from "../src/engine/interaction/HotspotPicker.ts";

const options = { bob: 0.2, drift: 0.15, tilt: 0.1, breathe: 0.04, speed: 1.3, reactionHeight: 0.3 };

test("idle poses depend on elapsed time rather than frame partitions", () => {
  const fineGroup = new THREE.Group();
  const coarseGroup = new THREE.Group();
  const fine = new PopupMotion(fineGroup, false, 0.7);
  const coarse = new PopupMotion(coarseGroup, false, 0.7);
  fine.configure(options);
  coarse.configure(options);
  for (let frame = 1; frame <= 300; frame++) fine.update(frame / 60);
  for (let frame = 1; frame <= 50; frame++) coarse.update(frame / 10);
  assert.ok(fineGroup.position.equals(coarseGroup.position));
  assert.ok(fineGroup.quaternion.equals(coarseGroup.quaternion));
  assert.ok(fineGroup.scale.equals(coarseGroup.scale));
  assert.ok(fineGroup.position.length() > 0);
});

test("a reaction makes one soft hop and returns exactly to its idle pose", () => {
  const group = new THREE.Group();
  const motion = new PopupMotion(group, false, 0);
  motion.configure({ tilt: 0, reactionHeight: 0.3 });
  motion.update(2);
  motion.react();
  motion.update(2.375);
  assert.equal(group.position.y, 0.3);
  motion.update(2.75);
  assert.equal(group.position.y, 0);
  motion.update(3.375);
  assert.equal(group.position.y, 0, "the reaction does not repeat");
});

test("reduced motion keeps the artwork still through idle and reactions", () => {
  const group = new THREE.Group();
  const motion = new PopupMotion(group, true, 0.7);
  motion.configure(options);
  motion.update(2);
  motion.react();
  motion.update(2.375);
  assert.deepEqual(group.position.toArray(), [0, 0, 0]);
  assert.deepEqual(group.scale.toArray(), [1, 1, 1]);
  assert.deepEqual(group.rotation.toArray().slice(0, 3), [0, 0, 0]);
});

test("moving artwork leaves its authored anchor and contact shadow in place", () => {
  const popup = new Popup();
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial());
  let draws = 0;
  mesh.userData.render = () => draws++;
  popup.addHinge({ mesh, position: new THREE.Vector3(), from: 0, to: 0 });
  popup.configureMotion(options);
  popup.root.position.set(1, 0.02, -5);
  const shadow = new THREE.Object3D();
  popup.root.add(shadow);
  popup.snapOpen();
  popup.update(1);
  popup.colorize("#f7cc45");
  popup.update(0.375);
  popup.root.updateWorldMatrix(true, true);

  assert.deepEqual(popup.root.position.toArray(), [1, 0.02, -5]);
  assert.deepEqual(popup.root.scale.toArray(), [1, 1, 1]);
  assert.deepEqual(shadow.getWorldPosition(new THREE.Vector3()).toArray(), [1, 0.02, -5]);
  assert.equal(mesh.parent?.parent, popup.motionGroup);
  assert.ok(popup.motionGroup.position.length() > 0);
  assert.equal(draws, 1, "transform animation never redraws the canvas");

  const camera = new THREE.PerspectiveCamera(72, 2, 0.1, 100);
  const center = mesh.getWorldPosition(new THREE.Vector3()).project(camera);
  const point = { x: (center.x + 1) * 500, y: (1 - center.y) * 250 };
  const hotspot = { object: popup.root, generous: true, onClick() {} };
  assert.equal(new HotspotPicker(camera).pick([hotspot], point, { width: 1000, height: 500 }), hotspot);
});

test("Popup motion honours the browser's reduced-motion preference", (context) => {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { matchMedia: () => ({ matches: true }) }
  });
  context.after(() => {
    if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
    else Reflect.deleteProperty(globalThis, "window");
  });
  const popup = new Popup();
  popup.configureMotion(options);
  popup.snapOpen();
  popup.update(1);
  popup.colorize("#f7cc45");
  popup.update(0.375);
  assert.deepEqual(popup.motionGroup.position.toArray(), [0, 0, 0]);
  assert.deepEqual(popup.motionGroup.scale.toArray(), [1, 1, 1]);
});
