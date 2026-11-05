import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { Popup } from "../src/engine/Popup.ts";
import { ChapterCelebration } from "../src/engine/celebration/ChapterCelebration.ts";
import { CelebrationParticles } from "../src/engine/celebration/CelebrationParticles.ts";

interface TestCleanup {
  after(callback: () => void): void;
}

function installCanvasFactory(context: TestCleanup) {
  let allocations = 0;
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const drawingContext = {
    beginPath() {},
    moveTo() {},
    lineTo() {},
    closePath() {},
    fill() {},
    stroke() {},
    fillRect() {},
    createRadialGradient: () => ({ addColorStop() {} })
  };
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => {
        allocations++;
        return { width: 0, height: 0, getContext: () => drawingContext };
      }
    }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });
  return () => allocations;
}

function createFixture(reducedMotion = false) {
  const root = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.1, 100);
  camera.position.set(0, 1.4, -8);
  camera.lookAt(0, 1, -13);
  const heroine = new Popup();
  heroine.root.position.set(-1.5, 0.2, -13);
  root.add(heroine.root);
  const celebration = new ChapterCelebration(root, reducedMotion);
  return { root, camera, heroine, celebration };
}

test("a celebration uses four draw calls and releases each shared resource once", (context) => {
  const allocations = installCanvasFactory(context);
  const { root, camera, heroine, celebration } = createFixture();
  context.after(() => celebration.dispose());
  assert.equal(allocations(), 0, "textures are lazy until a stage completes");
  celebration.start(camera, heroine);

  const drawables: Array<THREE.Mesh | THREE.Points> = [];
  root.traverse((object) => {
    if (object instanceof THREE.Mesh || object instanceof THREE.Points) drawables.push(object);
  });
  assert.equal(drawables.length, 4);
  const pointBatches = drawables.filter((object) => object instanceof THREE.Points);
  assert.deepEqual(pointBatches.map((object) => object.geometry.getAttribute("position").count), [140, 60]);
  assert.deepEqual(pointBatches.map((object) => (object.material as THREE.PointsMaterial).size), [0.2, 0.32]);
  assert.equal(allocations(), 2);
  const particles = drawables.find((object) => object instanceof THREE.Points)!;
  const before = Array.from(particles.geometry.getAttribute("position").array);
  let disposedGeometries = 0;
  let disposedMaterials = 0;
  let disposedTextures = 0;
  for (const geometry of new Set(drawables.map((drawable) => drawable.geometry))) {
    geometry.addEventListener("dispose", () => disposedGeometries++);
  }
  for (const drawable of drawables) {
    const material = drawable.material as THREE.MeshBasicMaterial | THREE.PointsMaterial;
    material.addEventListener("dispose", () => disposedMaterials++);
    material.map?.addEventListener("dispose", () => disposedTextures++);
  }

  celebration.update(0.25);
  assert.notDeepEqual(Array.from(particles.geometry.getAttribute("position").array), before);
  assert.ok(heroine.root.position.y > 0.2);
  celebration.update(4);

  assert.deepEqual(root.children, [heroine.root]);
  assert.equal(heroine.root.position.y, 0.2);
  assert.equal(disposedGeometries, 3);
  assert.equal(disposedMaterials, 4);
  assert.equal(disposedTextures, 2);
  celebration.dispose();
  assert.equal(disposedGeometries, 3, "cleanup is idempotent after completion");
});

test("reduced motion uses a stationary ring and leaves the heroine still", (context) => {
  const allocations = installCanvasFactory(context);
  const { root, camera, heroine, celebration } = createFixture(true);
  context.after(() => celebration.dispose());
  celebration.start(camera, heroine);

  let points = 0;
  let ring: THREE.Mesh | undefined;
  root.traverse((object) => {
    if (object instanceof THREE.Points) points++;
    if (object instanceof THREE.Mesh) ring = object;
  });
  assert.equal(points, 0);
  assert.equal(allocations(), 0);
  const initialScale = ring!.scale.clone();
  celebration.update(0.8);
  assert.equal(heroine.root.position.y, 0.2);
  assert.ok(ring!.scale.equals(initialScale));
  assert.ok((ring!.material as THREE.MeshBasicMaterial).opacity > 0);
  celebration.update(3.3);
  assert.deepEqual(root.children, [heroine.root]);
});

test("restarting replaces an old burst and restores the original heroine height", (context) => {
  installCanvasFactory(context);
  const { root, camera, heroine, celebration } = createFixture();
  context.after(() => celebration.dispose());
  celebration.start(camera, heroine);
  celebration.update(0.25);
  assert.ok(heroine.root.position.y > 0.2);

  celebration.start(camera, heroine);
  assert.equal(heroine.root.position.y, 0.2);
  assert.equal(root.children.filter((object) => object.name === "chapter-celebration").length, 1);
  celebration.update(0.25);
  celebration.dispose();
  assert.equal(heroine.root.position.y, 0.2);
  assert.deepEqual(root.children, [heroine.root]);
  celebration.update(1);
  assert.equal(heroine.root.position.y, 0.2);
});

test("a chapter without a heroine can still celebrate and clean up", (context) => {
  installCanvasFactory(context);
  const root = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(72, 2, 0.1, 100);
  const celebration = new ChapterCelebration(root);
  celebration.start(camera);
  assert.equal(root.children.length, 1);
  celebration.update(0.3);
  celebration.dispose();
  assert.equal(root.children.length, 0);
});

test("waves reveal over a second and remain visible late in the celebration", (context) => {
  installCanvasFactory(context);
  const { root, camera, celebration } = createFixture();
  context.after(() => celebration.dispose());
  celebration.start(camera);
  const batches: THREE.Points[] = [];
  const rings: THREE.Mesh[] = [];
  root.traverse((object) => {
    if (object instanceof THREE.Points) batches.push(object);
    if (object instanceof THREE.Mesh) rings.push(object);
  });
  assert.ok(batches.every((batch) => batch.geometry.drawRange.count === 0));
  celebration.update(0.2);
  assert.ok(batches.every((batch) => batch.geometry.drawRange.count > 0));
  assert.ok(batches.every((batch) => batch.geometry.drawRange.count < batch.geometry.getAttribute("position").count));
  assert.equal((rings[1].material as THREE.MeshBasicMaterial).opacity, 0);
  celebration.update(1);
  assert.ok(batches.every((batch) => batch.geometry.drawRange.count === batch.geometry.getAttribute("position").count));
  assert.ok((rings[1].material as THREE.MeshBasicMaterial).opacity > 0);
  celebration.update(2.3);
  assert.ok(batches.every((batch) => (batch.material as THREE.PointsMaterial).opacity > 0));
});

test("particle trajectories match after fine, coarse and dropped frames", (context) => {
  installCanvasFactory(context);
  const makeParticles = () => {
    const originalRandom = Math.random;
    let seed = 17;
    Math.random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 0x100000000;
    };
    try {
      return new CelebrationParticles("paper", 140);
    } finally {
      Math.random = originalRandom;
    }
  };
  const fine = makeParticles();
  const coarse = makeParticles();
  const dropped = makeParticles();
  context.after(() => {
    fine.dispose();
    coarse.dispose();
    dropped.dispose();
  });
  for (let frame = 1; frame <= 150; frame++) fine.update(1 / 60, frame / 60);
  for (let frame = 1; frame <= 25; frame++) coarse.update(0.1, frame / 10);
  dropped.update(2.5, 2.5);
  const position = (particles: CelebrationParticles) => Array.from(particles.points.geometry.getAttribute("position").array);
  assert.deepEqual(position(fine), position(coarse));
  assert.deepEqual(position(coarse), position(dropped));
  assert.equal(fine.points.geometry.drawRange.count, 140);
});
