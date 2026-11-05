import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { CameraRig } from "../src/engine/CameraRig.ts";

function createRig() {
  const camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.1, 200);
  const rig = new CameraRig(camera, {
    speed: 1.6,
    length: 8,
    holdTime: 5.2,
    eyeHeight: 1.4,
    lookAhead: 5
  });
  return { camera, rig };
}

function near(actual: number, expected: number): void {
  assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} should be close to ${expected}`);
}

test("the initial hold and five-second travel retain their exact endpoints", () => {
  const { camera, rig } = createRig();
  rig.update(5.2);
  assert.equal(rig.distance, 0);
  assert.equal(rig.atEnd, false);
  rig.update(2.5);
  near(rig.distance, 4);
  near(rig.progress, 0.5);
  rig.update(2.5);
  assert.equal(rig.distance, 8);
  assert.equal(camera.position.z, -8);
  assert.equal(rig.progress, 1);
  assert.equal(rig.atEnd, true);
  rig.update(10);
  assert.equal(rig.distance, 8);
});

test("crossing the hold in one frame counts only the time after it", () => {
  const { rig } = createRig();
  rig.update(5.3);
  assert.ok(rig.distance > 0);
  assert.ok(rig.distance < 0.02, "the first tenth-second should ease in gently");
  assert.equal(rig.atEnd, false);
});

test("partitioning elapsed time does not change travel, bob or camera direction", () => {
  const single = createRig();
  const partitioned = createRig();
  single.rig.update(8.7);
  for (let frame = 0; frame < 87; frame += 1) partitioned.rig.update(0.1);

  near(single.rig.distance, partitioned.rig.distance);
  near(single.camera.position.x, partitioned.camera.position.x);
  near(single.camera.position.y, partitioned.camera.position.y);
  near(single.camera.position.z, partitioned.camera.position.z);
  assert.ok(single.camera.quaternion.angleTo(partitioned.camera.quaternion) < 1e-7);
});

test("the first and final travel intervals settle without an abrupt velocity change", () => {
  const { rig } = createRig();
  rig.update(5.2);
  rig.update(0.1);
  const firstStep = rig.distance;
  assert.ok(firstStep > 0 && firstStep < 0.02);
  rig.update(4.8);
  const finalStep = 8 - rig.distance;
  assert.ok(finalStep > 0 && finalStep < 0.02);
  near(firstStep, finalStep);
  assert.equal(rig.atEnd, false);
  rig.update(0.1);
  assert.equal(rig.distance, 8);
  assert.equal(rig.atEnd, true);
});

test("pausing freezes forward travel without catching up on resume", () => {
  const { camera, rig } = createRig();
  rig.update(7.2);
  const pausedDistance = rig.distance;
  const pausedZ = camera.position.z;
  rig.pause();
  rig.update(12);
  assert.equal(rig.distance, pausedDistance);
  assert.equal(camera.position.z, pausedZ);
  assert.equal(rig.atEnd, false);
  rig.resume();
  rig.update(0.1);
  assert.ok(rig.distance > pausedDistance && rig.distance < pausedDistance + 0.3);
  rig.update(2.9);
  assert.equal(rig.distance, 8);
  assert.equal(rig.atEnd, true);
});

test("reset restores the original hold and clears a previous pause", () => {
  const { camera, rig } = createRig();
  rig.update(8);
  rig.pause();
  rig.reset();
  assert.equal(rig.distance, 0);
  assert.equal(rig.progress, 0);
  assert.equal(rig.atEnd, false);
  assert.equal(rig.isTravelling, false);
  near(camera.position.z, 0);
  near(camera.position.y, 1.4);
  rig.update(10.2);
  assert.equal(rig.distance, 8);
  assert.equal(rig.atEnd, true);
});
