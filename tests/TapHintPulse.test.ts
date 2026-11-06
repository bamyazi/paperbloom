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

function sameColor(actual: THREE.Color, expected: THREE.Color): void {
  closeTo(actual.r, expected.r);
  closeTo(actual.g, expected.g);
  closeTo(actual.b, expected.b);
}

test("the artwork gently warms while opacity and transparency stay exactly authored", () => {
  const fixture = art(0.7, false);
  const originalColor = fixture.material.color.clone();
  const pulse = new TapHintPulse(fixture.group);
  const originalMap = fixture.material.map;
  pulse.start(4);
  pulse.update(4.9);
  sameColor(fixture.material.color, originalColor.clone().lerp(new THREE.Color("#ffd36b"), 0.4));
  assert.equal(fixture.material.opacity, 0.7);
  assert.equal(fixture.material.transparent, false);
  assert.equal(fixture.material.map, originalMap);
  assert.deepEqual(fixture.group.scale.toArray(), [1, 1, 1]);
  assert.deepEqual(fixture.mesh.position.toArray(), [0, 0, 0]);
  pulse.update(5.8);
  sameColor(fixture.material.color, originalColor);
  assert.equal(fixture.material.opacity, 0.7);
  pulse.update(6.7);
  pulse.stop();
  assert.ok(fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.opacity, 0.7);
  assert.equal(fixture.material.transparent, false);
  pulse.update(6.7);
  assert.ok(fixture.material.color.equals(originalColor));
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
  sameColor(fine.material.color, coarse.material.color);
  assert.equal(fine.material.opacity, 1);
  assert.equal(coarse.material.opacity, 1);
  assert.equal(fine.mesh.material, fine.material);
  assert.equal(coarse.mesh.material, coarse.material);
});

test("restarting an active pulse keeps its baseline and never clones colours per frame", () => {
  const fixture = art(0.8);
  const originalColor = fixture.material.color.clone();
  const clone = fixture.material.color.clone.bind(fixture.material.color);
  let clones = 0;
  fixture.material.color.clone = () => {
    clones++;
    return clone();
  };
  // A shared material may occur on several meshes; borrow it only once.
  fixture.group.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), fixture.material));
  const pulse = new TapHintPulse(fixture.group);
  pulse.start(0);
  pulse.update(0.9);
  pulse.start(0.9);
  for (let frame = 1; frame < 108; frame++) pulse.update(frame / 60);
  pulse.update(1.8);
  sameColor(fixture.material.color, originalColor);
  assert.equal(clones, 1, "one baseline is captured per shared material, only when starting");
  pulse.stop();
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.8);
  assert.equal(fixture.material.transparent, true);
  fixture.material.opacity = 0.5;
  fixture.material.color.set("#adcbed");
  const newColor = new THREE.Color("#adcbed");
  pulse.start(2);
  pulse.update(2.9);
  assert.equal(fixture.material.opacity, 0.5);
  assert.equal(fixture.material.transparent, true);
  assert.equal(clones, 2);
  pulse.stop();
  assert.ok(fixture.material.color.equals(newColor));
  assert.equal(fixture.material.opacity, 0.5);
});

test("reduced motion leaves the paper steady while the static hint marker remains available", () => {
  const fixture = art(0.65, false);
  const originalColor = fixture.material.color.clone();
  const pulse = new TapHintPulse(fixture.group, true);
  pulse.start(0);
  pulse.update(0.9);
  pulse.update(1.8);
  pulse.stop();
  assert.equal(fixture.material.opacity, 0.65);
  assert.equal(fixture.material.transparent, false);
  assert.ok(fixture.material.color.equals(originalColor));
});

test("Popup stops flashing synchronously before its colour redraw and never changes the stage anchor", () => {
  const fixture = art(0.75);
  const popup = new Popup();
  const redrawOpacities: number[] = [];
  const originalColor = fixture.material.color.clone();
  const redrawColors: THREE.Color[] = [];
  fixture.mesh.userData.render = () => {
    redrawOpacities.push(fixture.material.opacity);
    redrawColors.push(fixture.material.color.clone());
  };
  popup.addHinge({ mesh: fixture.mesh, position: new THREE.Vector3(), from: 0, to: 0 });
  popup.root.position.set(2, 0.02, -5);
  popup.snapOpen();
  popup.setHintFlashing(true);
  popup.update(0.9);
  assert.equal(fixture.material.opacity, 0.75);
  assert.ok(!fixture.material.color.equals(originalColor));
  assert.equal(popup.isColored, false);
  assert.deepEqual(popup.root.position.toArray(), [2, 0.02, -5]);
  assert.deepEqual(popup.root.scale.toArray(), [1, 1, 1]);
  popup.colorize("#f5cc45");
  assert.deepEqual(redrawOpacities, [0.75]);
  assert.ok(redrawColors[0].equals(originalColor), "the tap redraw sees the restored tint");
  assert.equal(fixture.material.opacity, 0.75);
  popup.setHintFlashing(true);
  popup.update(0.9);
  assert.equal(fixture.material.opacity, 0.75, "completed targets cannot resume flashing");
  assert.ok(fixture.material.color.equals(originalColor));
});

test("Popup clearing a hint or beginning the world wash immediately restores tint", () => {
  const fixture = art(0.8);
  const originalColor = fixture.material.color.clone();
  const popup = new Popup();
  popup.addHinge({ mesh: fixture.mesh, position: new THREE.Vector3() });
  popup.snapOpen();
  popup.setHintFlashing(true);
  popup.update(0.9);
  popup.setHintFlashing(false);
  assert.ok(fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.opacity, 0.8);
  popup.setHintFlashing(true);
  popup.update(0.9);
  assert.ok(!fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.opacity, 0.8);
  popup.colorizeFade("#f5cc45", 1, 0.5);
  assert.ok(fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.opacity, 0.8);
  popup.update(0.2);
  assert.ok(fixture.material.color.equals(originalColor));
  assert.equal(fixture.material.opacity, 0.8);
});

test("materials without a colour property are left untouched", () => {
  const material = new THREE.ShaderMaterial({ opacity: 0.65, transparent: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
  const pulse = new TapHintPulse(mesh);
  const version = material.version;
  pulse.start(0);
  pulse.update(0.9);
  pulse.stop();
  assert.equal(material.opacity, 0.65);
  assert.equal(material.transparent, false);
  assert.equal(material.version, version);
});
