import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { PaperSurprises } from "../src/game/play/effects/PaperSurprises.ts";
import { SURPRISE_PARTICLE_LIMIT } from "../src/game/play/effects/SurprisePool.ts";

function installCanvasFactory(context: { after(callback: () => void): void }, reducedMotion = false) {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  let allocations = 0;
  const noop = () => {};
  const drawing: Record<string, unknown> = {
    createPattern: () => ({}),
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
    getImageData: (_x: number, _y: number, width: number, height: number) => {
      const data = new Uint8ClampedArray(width * height * 4);
      data.fill(255);
      return { data, width, height };
    }
  };
  for (const name of [
    "arc", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath",
    "ellipse", "fill", "fillRect", "lineTo", "moveTo", "putImageData",
    "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale",
    "stroke", "strokeRect", "translate"
  ]) drawing[name] = noop;
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => {
        allocations += 1;
        return { width: 0, height: 0, getContext: () => drawing };
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
  return () => allocations;
}

function createFixture() {
  const root = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.1, 100);
  camera.position.z = 5;
  const surprises = new PaperSurprises(root, camera);
  const meshes = root.children[0].children as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[];
  return { root, camera, surprises, meshes };
}

function visibleState(meshes: ReturnType<typeof createFixture>["meshes"]): number[][] {
  return meshes.filter((mesh) => mesh.visible).map((mesh) => [
    ...mesh.position.toArray(), ...mesh.scale.toArray(), ...mesh.quaternion.toArray(), mesh.material.opacity
  ]);
}

test("surprise trajectories are independent of how time is partitioned", (context) => {
  installCanvasFactory(context);
  const single = createFixture();
  const partitioned = createFixture();
  context.after(() => { single.surprises.dispose(); partitioned.surprises.dispose(); });
  single.surprises.triggerAt("fish", new THREE.Vector3());
  partitioned.surprises.triggerAt("fish", new THREE.Vector3());
  single.surprises.update(0.9);
  for (const dt of [0.2, 0.3, 0.4]) partitioned.surprises.update(dt);
  const expected = visibleState(single.meshes);
  const actual = visibleState(partitioned.meshes);
  assert.equal(actual.length, expected.length);
  assert.ok(actual.length > 1);
  for (const [index, values] of actual.entries()) {
    for (const [component, value] of values.entries()) {
      assert.ok(Math.abs(value - expected[index][component]) < 1e-9);
    }
  }
});

test("a pond visit jumps beside the frog, adds water details and finishes cleanly", (context) => {
  installCanvasFactory(context);
  const { surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  const tappedPoint = new THREE.Vector3();
  surprises.triggerAt("pond", tappedPoint);
  const fish = meshes.find((mesh) => mesh.material.map?.name === "paper-surprise-fish")!;
  assert.ok(fish.visible);
  assert.ok(fish.position.x > 1, "the fish starts beside the central frog");
  const startY = fish.position.y;
  surprises.update(0.9);
  assert.ok(fish.position.y > startY + 1, "the fish makes a visible, friendly hop");
  assert.ok(meshes.some((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-ripple"));
  assert.ok(!meshes.some((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-drop"), "landing splashes wait until the fish comes down");
  surprises.update(0.8);
  assert.ok(meshes.some((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-drop"));
  assert.ok(tappedPoint.equals(new THREE.Vector3()), "caller-owned positions remain unchanged");
  surprises.update(2);
  assert.equal(meshes.filter((mesh) => mesh.visible).length, 0);
});

test("water rings lie on the pond while the fish launches and lands beside it", (context) => {
  installCanvasFactory(context);
  const { root, camera, surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  camera.position.set(0, 1.4, -8);
  camera.lookAt(0, 1.05, -13);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(8, 5));
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, 0.012, -11);
  root.add(water);
  surprises.trigger("pond", water);
  const fish = meshes.find((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-fish")!;
  assert.ok(fish.getWorldPosition(new THREE.Vector3()).x > 1.8);
  assert.ok(fish.getWorldPosition(new THREE.Vector3()).y < 0.35, "the launch starts at the water, not a clamped floating centre");

  const checkRing = () => {
    const ring = meshes.find((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-ripple")!;
    assert.ok(ring);
    ring.updateWorldMatrix(true, false);
    const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(ring.getWorldQuaternion(new THREE.Quaternion()));
    assert.ok(normal.distanceTo(new THREE.Vector3(0, 1, 0)) < 1e-9, "the ring faces up, rather than facing the camera");
    const positions = ring.geometry.getAttribute("position");
    for (let index = 0; index < positions.count; index++) {
      const point = new THREE.Vector3().fromBufferAttribute(positions, index).applyMatrix4(ring.matrixWorld);
      assert.ok(Math.abs(point.y - 0.035) < 1e-9, "the whole ring stays flat on the physical water surface");
    }
  };
  checkRing();
  surprises.update(1.7);
  checkRing();
});

test("a foreground rock reveals a small visitor at the same projected location", (context) => {
  installCanvasFactory(context);
  const { root, camera, surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  const rock = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2));
  rock.position.set(0, 0, 4.5);
  root.add(rock);
  surprises.trigger("rock", rock);
  const visitor = meshes.find((mesh) => mesh.visible && mesh.material.map?.name === "paper-surprise-snail")!;
  const centre = visitor.getWorldPosition(new THREE.Vector3());
  const cameraSpace = centre.clone().applyMatrix4(camera.matrixWorldInverse);
  assert.ok(cameraSpace.z <= -3 + 1e-9, "a nearby rock must not make a giant camera-filling snail");
  const projected = centre.clone().project(camera);
  assert.ok(Math.abs(projected.x) < 0.15 && Math.abs(projected.y) < 0.15, "the visitor stays by the tapped rock on screen");
  visitor.updateWorldMatrix(true, false);
  const left = new THREE.Vector3(-0.5, 0, 0).applyMatrix4(visitor.matrixWorld).project(camera).x;
  const right = new THREE.Vector3(0.5, 0, 0).applyMatrix4(visitor.matrixWorld).project(camera).x;
  assert.ok(Math.abs(right - left) < 0.4, "the cutout keeps a friendly bounded screen width");
});

test("distant background taps still produce visible stars by the tapped screen point", (context) => {
  installCanvasFactory(context);
  const { camera, surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  const tappedPoint = new THREE.Vector3(2, 1, -15);
  camera.updateWorldMatrix(true, false);
  const tappedScreen = tappedPoint.clone().project(camera);
  surprises.triggerAt("stars", tappedPoint);
  const star = meshes.find((mesh) => mesh.visible)!;
  const centre = star.getWorldPosition(new THREE.Vector3());
  const cameraSpace = centre.clone().applyMatrix4(camera.matrixWorldInverse);
  assert.ok(cameraSpace.z >= -6 - 1e-9 && cameraSpace.z <= -3 + 1e-9);
  const projected = centre.clone().project(camera);
  assert.ok(Math.abs(projected.x - tappedScreen.x) < 1e-9);
  assert.ok(Math.abs(projected.y - tappedScreen.y) < 0.05);
  star.updateWorldMatrix(true, false);
  const left = new THREE.Vector3(-0.5, 0, 0).applyMatrix4(star.matrixWorld).project(camera).x;
  const right = new THREE.Vector3(0.5, 0, 0).applyMatrix4(star.matrixWorld).project(camera).x;
  assert.ok(Math.abs(right - left) * 844 / 2 >= 10, "a far tap should make clear stars, rather than four-pixel specks");
});

test("rapid empty-space taps recycle old bursts without growing geometry or textures", (context) => {
  const allocations = installCanvasFactory(context);
  const { root, surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  assert.equal(allocations(), 0, "artwork is lazy until the first exploration tap");
  for (let tap = 0; tap < 100; tap++) surprises.triggerAt("empty-ground", new THREE.Vector3(tap % 3 * 0.2, 0, 0));
  surprises.triggerAt("stars", new THREE.Vector3(2, 0, 0));
  assert.equal(root.children.length, 1);
  assert.equal(meshes.length, SURPRISE_PARTICLE_LIMIT);
  assert.equal(new Set(meshes.map((mesh) => mesh.geometry)).size, 1);
  assert.equal(allocations(), 1, "all star bursts share one uploaded canvas");
  assert.ok(meshes.filter((mesh) => mesh.visible).length <= 24);
  assert.ok(meshes.some((mesh) => mesh.visible && Math.abs(mesh.position.x - 2) < 0.01), "even the latest tap gets immediate feedback");
  assert.ok(meshes.every((mesh) => !mesh.userData.render), "decorations cannot become colouring hit targets");
});

test("object anchors respect transformed parent groups", (context) => {
  installCanvasFactory(context);
  const { root, surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  root.position.set(2, 0, -2);
  const prop = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
  prop.position.set(1, 0.2, 2);
  root.add(prop);
  surprises.trigger("house", prop);
  const star = meshes.find((mesh) => mesh.visible)!;
  const position = star.getWorldPosition(new THREE.Vector3());
  assert.ok(Math.abs(position.x - 3) < 1e-9);
  assert.ok(Math.abs(position.y - 0.35) < 1e-9);
  assert.ok(Math.abs(position.z) < 1e-9);
});

test("reduced motion shows a stationary friend and ring instead of a moving burst", (context) => {
  installCanvasFactory(context, true);
  const { surprises, meshes } = createFixture();
  context.after(() => surprises.dispose());
  surprises.triggerAt("rock", new THREE.Vector3());
  const visible = meshes.filter((mesh) => mesh.visible);
  assert.equal(visible.length, 2);
  const before = visible.map((mesh) => ({ position: mesh.position.clone(), scale: mesh.scale.clone(), rotation: mesh.quaternion.clone() }));
  surprises.update(0.7);
  for (const [index, mesh] of visible.entries()) {
    assert.ok(mesh.position.equals(before[index].position));
    assert.ok(mesh.scale.equals(before[index].scale));
    assert.ok(mesh.quaternion.equals(before[index].rotation));
  }
});

test("disposal releases each owned resource exactly once and leaves the scenery alone", (context) => {
  installCanvasFactory(context);
  const { root, surprises, meshes } = createFixture();
  const scenery = new THREE.Group();
  root.add(scenery);
  const textures = new Set<THREE.Texture>();
  for (const kind of ["pond", "tree", "bush", "rock", "house"]) {
    surprises.triggerAt(kind, new THREE.Vector3());
    for (const mesh of meshes) if (mesh.material.map) textures.add(mesh.material.map);
  }
  assert.equal(textures.size, 7);
  let geometryDisposals = 0;
  let materialDisposals = 0;
  let textureDisposals = 0;
  meshes[0].geometry.addEventListener("dispose", () => { geometryDisposals += 1; });
  for (const mesh of meshes) mesh.material.addEventListener("dispose", () => { materialDisposals += 1; });
  for (const texture of textures) texture.addEventListener("dispose", () => { textureDisposals += 1; });
  surprises.dispose();
  surprises.dispose();
  surprises.triggerAt("fish", new THREE.Vector3());
  surprises.update(1);
  assert.deepEqual(root.children, [scenery]);
  assert.equal(geometryDisposals, 1);
  assert.equal(materialDisposals, SURPRISE_PARTICLE_LIMIT);
  assert.equal(textureDisposals, 7);
  assert.ok([...textures].every((texture) => texture.image.width === 0 && texture.image.height === 0));
});
