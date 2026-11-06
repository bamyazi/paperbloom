import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { TapHintPulse } from "../src/engine/animation/TapHintPulse.ts";
import { Popup } from "../src/engine/Popup.ts";

function art(opacity = 1, transparent = true) {
  const material = new THREE.MeshBasicMaterial({ opacity, transparent, color: "#efc24a" });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
  const group = new THREE.Group();
  group.add(mesh);
  return { group, mesh, material };
}

function closeTo(actual: number, expected: number): void {
  assert.ok(Math.abs(actual - expected) < 1e-12, `${actual} differs from ${expected}`);
}

test("the artwork gently pulses relative to its authored opacity and restores exact state", () => {
  const fixture = art(0.7, false);
  const originalColor = fixture.material.color.clone();
  const pulse = new TapHintPulse(fixture.group);
  const originalMap = fixture.material.map;
  pulse.start(4);
  pulse.update(4.9);
  closeTo(fixture.material.opacity, 0.7 * 0.6);
  assert.equal(fixture.material.transparent, true);
  assert.ok(fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.map, originalMap);
  assert.deepEqual(fixture.group.scale.toArray(), [1, 1, 1]);
  assert.deepEqual(fixture.mesh.position.toArray(), [0, 0, 0]);
  pulse.update(5.8);
  closeTo(fixture.material.opacity, 0.7);
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.7);
  assert.equal(fixture.material.transparent, false);
  pulse.update(6.7);
  assert.equal(fixture.material.opacity, 0.7);
});

test("pulse poses agree across frame partitions without recreating materials", () => {
  const fine = art();
  const coarse = art();
  const finePulse = new TapHintPulse(fine.group);
  const coarsePulse = new TapHintPulse(coarse.group);
  finePulse.start(0);
  coarsePulse.start(0);
  for (let frame = 1; frame <= 99; frame++) finePulse.update(frame / 60);
  for (let frame = 1; frame <= 11; frame++) coarsePulse.update(frame * 0.15);
  closeTo(fine.material.opacity, coarse.material.opacity);
  assert.equal(fine.mesh.material, fine.material);
  assert.equal(coarse.mesh.material, coarse.material);
});

test("restarting an active pulse cannot capture a faded value as its baseline", () => {
  const fixture = art(0.8);
  // A shared material may occur on several meshes; borrow it only once.
  fixture.group.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), fixture.material));
  const pulse = new TapHintPulse(fixture.group);
  pulse.start(0);
  pulse.update(0.9);
  pulse.start(0.9);
  pulse.update(1.8);
  closeTo(fixture.material.opacity, 0.8);
  pulse.stop();
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.8);
  assert.equal(fixture.material.transparent, true);
  fixture.material.opacity = 0.5;
  pulse.start(2);
  pulse.update(2.9);
  closeTo(fixture.material.opacity, 0.3);
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.5);
});

test("reduced motion leaves the paper steady while the static hint marker remains available", () => {
  const fixture = art(0.65, false);
  const pulse = new TapHintPulse(fixture.group, true);
  pulse.start(0);
  pulse.update(0.9);
  pulse.update(1.8);
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.65);
  assert.equal(fixture.material.transparent, false);
});

test("Popup stops flashing synchronously before its colour redraw and never changes the stage anchor", () => {
  const fixture = art(0.75);
  const popup = new Popup();
  const redrawOpacities: number[] = [];
  fixture.mesh.userData.render = () => { redrawOpacities.push(fixture.material.opacity); };
  popup.addHinge({ mesh: fixture.mesh, position: new THREE.Vector3(), from: 0, to: 0 });
  popup.root.position.set(2, 0.02, -5);
  popup.snapOpen();
  popup.setHintFlashing(true);
  popup.update(0.9);
  closeTo(fixture.material.opacity, 0.45);
  assert.equal(popup.isColored, false);
  assert.deepEqual(popup.root.position.toArray(), [2, 0.02, -5]);
  assert.deepEqual(popup.root.scale.toArray(), [1, 1, 1]);
  popup.colorize("#f5cc45");
  assert.deepEqual(redrawOpacities, [0.75]);
  assert.equal(fixture.material.opacity, 0.75);
  popup.setHintFlashing(true);
  popup.update(0.9);
  assert.equal(fixture.material.opacity, 0.75, "completed targets cannot resume flashing");
});

test("Popup clearing a hint or beginning the world wash immediately restores opacity", () => {
  const fixture = art(0.8);
  const popup = new Popup();
  popup.addHinge({ mesh: fixture.mesh, position: new THREE.Vector3() });
  popup.snapOpen();
  popup.setHintFlashing(true);
  popup.update(0.9);
  popup.setHintFlashing(false);
  assert.equal(fixture.material.opacity, 0.8);
  popup.setHintFlashing(true);
  popup.update(0.9);
  closeTo(fixture.material.opacity, 0.48);
  popup.colorizeFade("#f5cc45", 1, 0.5);
  assert.equal(fixture.material.opacity, 0.8);
  popup.update(0.2);
  assert.equal(fixture.material.opacity, 0.8);
});
