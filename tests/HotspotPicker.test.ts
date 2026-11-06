import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { HotspotPicker } from "../src/engine/interaction/HotspotPicker.ts";
import type { Hotspot } from "../src/engine/interaction/Hotspot.ts";

interface Viewport {
  width: number;
  height: number;
}

/** At z=0, this camera shows ten world units across a 1,000px-high viewport. */
function createCamera(viewport: Viewport): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(
    90,
    viewport.width / viewport.height,
    0.1,
    100
  );
  camera.position.z = 5;
  return camera;
}

function createArt(width = 2, height = 2): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  );
  // The game's cutout factory marks its visible artwork with this callback.
  mesh.userData.render = () => {};
  return mesh;
}

function createHotspot(object: THREE.Object3D, generous = true): Hotspot {
  return { object, generous, onClick: () => {} };
}

const squareViewport = { width: 1000, height: 1000 };

test("painted art wins over a nearer transparent neighbour's hit rectangle", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const transparentArt = createArt(1, 1);
  transparentArt.position.x = 1.5;
  const transparentCanvas = {
    width: 2,
    height: 2,
    getContext: () => ({ getImageData: () => ({ data: [0, 0, 0, 0] }) })
  };
  (transparentArt.material as THREE.MeshBasicMaterial).map = new THREE.Texture(transparentCanvas);
  const transparent = createHotspot(transparentArt);
  const painted = createHotspot(createArt(4, 2));

  // This is the right-hand side of the painted cutout, directly under the
  // transparent neighbour's centre. Registration order must not steal the tap.
  for (const hotspots of [[transparent, painted], [painted, transparent]]) {
    assert.equal(picker.pick(hotspots, { x: 650, y: 500 }, squareViewport), painted);
  }
});

for (const generous of [false, true]) {
  test(`picks the rendered centre and edges (${generous ? "generous" : "precise"})`, () => {
    const picker = new HotspotPicker(createCamera(squareViewport));
    const hotspot = createHotspot(createArt(), generous);

    // The two-unit plane occupies CSS pixels 400..600 on both axes.
    for (const point of [
      { x: 500, y: 500 },
      { x: 401, y: 500 },
      { x: 599, y: 500 },
      { x: 500, y: 401 },
      { x: 500, y: 599 }
    ]) {
      assert.equal(picker.pick([hotspot], point, squareViewport, 0), hotspot);
    }

    assert.equal(
      picker.pick([hotspot], { x: 610, y: 500 }, squareViewport, 0),
      null
    );
  });
}

test("uses CSS dimensions in a non-square viewport", () => {
  const viewport = { width: 1600, height: 600 };
  const picker = new HotspotPicker(createCamera(viewport));
  const hotspot = createHotspot(createArt());

  // Vertical FOV fixes the plane's size at 120px, including on a wide screen.
  assert.equal(picker.pick([hotspot], { x: 850, y: 350 }, viewport, 0), hotspot);
  assert.equal(picker.pick([hotspot], { x: 875, y: 300 }, viewport, 0), null);
  assert.equal(picker.pick([hotspot], { x: 875, y: 300 }, viewport), hotspot);
  assert.equal(picker.pick([hotspot], { x: 880, y: 300 }, viewport), null);
});

test("refreshes camera and nested object transforms without a renderer", () => {
  const camera = createCamera(squareViewport);
  const picker = new HotspotPicker(camera);
  const parent = new THREE.Group();
  parent.add(createArt(4, 1));
  const hotspot = createHotspot(parent);

  assert.equal(
    picker.pick([hotspot], { x: 500, y: 500 }, squareViewport, 0),
    hotspot
  );

  parent.position.x = 2;
  parent.rotation.z = Math.PI / 2;
  camera.position.x = 1;

  // No updateMatrixWorld or render call: the next input must use these changes.
  assert.equal(
    picker.pick([hotspot], { x: 600, y: 680 }, squareViewport, 0),
    hotspot
  );
  assert.equal(
    picker.pick([hotspot], { x: 780, y: 500 }, squareViewport, 0),
    null
  );
});

test("uses the resized camera projection on the next pick", () => {
  const camera = createCamera(squareViewport);
  const picker = new HotspotPicker(camera);
  const hotspot = createHotspot(createArt());

  assert.equal(
    picker.pick([hotspot], { x: 580, y: 500 }, squareViewport, 0),
    hotspot
  );

  const resizedViewport = { width: 1000, height: 500 };
  camera.aspect = resizedViewport.width / resizedViewport.height;
  camera.updateProjectionMatrix();

  // The plane is now 100px wide, centred on (500,250).
  assert.equal(
    picker.pick([hotspot], { x: 545, y: 250 }, resizedViewport, 0),
    hotspot
  );
  assert.equal(
    picker.pick([hotspot], { x: 570, y: 250 }, resizedViewport),
    null
  );
});

test("selects the nearest padded artwork edge independently of registration order", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const largeArt = createArt(4, 1);
  largeArt.position.x = -2.1;
  const smallArt = createArt(0.5, 1);
  smallArt.position.x = 0.4;
  const large = createHotspot(largeArt);
  const small = createHotspot(smallArt);

  // At x=500 the large piece's edge is 10px away; the small one's is 15px.
  // Its distant centre must not make the larger artwork harder to select.
  for (const hotspots of [[large, small], [small, large]]) {
    assert.equal(
      picker.pick(hotspots, { x: 500, y: 500 }, squareViewport),
      large
    );
    assert.equal(
      picker.pick(hotspots, { x: 504, y: 500 }, squareViewport),
      small
    );
  }
});

for (const generous of [false, true]) {
  test(`excludes artwork under a hidden parent (${generous ? "generous" : "precise"})`, () => {
    const picker = new HotspotPicker(createCamera(squareViewport));
    const parent = new THREE.Group();
    const art = createArt();
    parent.add(art);
    parent.visible = false;
    // Register a child to ensure visibility is checked outside the hotspot root.
    const hotspot = createHotspot(art, generous);

    assert.equal(picker.pick([hotspot], { x: 500, y: 500 }, squareViewport), null);
  });

  test(`excludes artwork behind the camera (${generous ? "generous" : "precise"})`, () => {
    const picker = new HotspotPicker(createCamera(squareViewport));
    const art = createArt();
    art.position.z = 6;
    const hotspot = createHotspot(art, generous);

    assert.equal(picker.pick([hotspot], { x: 500, y: 500 }, squareViewport), null);
  });
}

test("keeps forgiving taps within the configured pixel padding", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const hotspot = createHotspot(createArt());

  assert.equal(
    picker.pick([hotspot], { x: 617, y: 500 }, squareViewport),
    hotspot
  );
  assert.equal(picker.pick([hotspot], { x: 619, y: 500 }, squareViewport), null);
  assert.equal(picker.pick([hotspot], { x: 900, y: 500 }, squareViewport), null);
  assert.equal(
    picker.pick([hotspot], { x: 610, y: 500 }, squareViewport, 8),
    null
  );
});

test("does not turn empty gaps between a hotspot's artwork pieces into targets", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const parent = new THREE.Group();
  const leftArt = createArt(1, 1);
  leftArt.position.x = -2;
  const rightArt = createArt(1, 1);
  rightArt.position.x = 2;
  parent.add(leftArt, rightArt);
  const hotspot = createHotspot(parent);

  assert.equal(
    picker.pick([hotspot], { x: 300, y: 500 }, squareViewport),
    hotspot
  );
  assert.equal(
    picker.pick([hotspot], { x: 700, y: 500 }, squareViewport),
    hotspot
  );
  assert.equal(picker.pick([hotspot], { x: 500, y: 500 }, squareViewport), null);
});

test("puzzle actions beat exploration on the same paper piece, including forgiving edges", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const art = createArt();
  const exploration = { ...createHotspot(art), priority: -1 };
  const puzzle = createHotspot(art);
  for (const hotspots of [[exploration, puzzle], [puzzle, exploration]]) {
    assert.equal(picker.pick(hotspots, { x: 500, y: 500 }, squareViewport), puzzle);
    assert.equal(picker.pick(hotspots, { x: 617, y: 500 }, squareViewport), puzzle);
  }
});

test("action priority never makes a farther piece steal a tap from nearer painted scenery", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const nearArt = createArt();
  const farArt = createArt();
  farArt.position.z = -1;
  const scenery = { ...createHotspot(nearArt), priority: -1 };
  const puzzle = { ...createHotspot(farArt), priority: 10 };
  for (const hotspots of [[scenery, puzzle], [puzzle, scenery]]) {
    assert.equal(picker.pick(hotspots, { x: 500, y: 500 }, squareViewport), scenery);
  }
});

test("low-priority painted scenery still beats an unrelated puzzle's broad padding", () => {
  const picker = new HotspotPicker(createCamera(squareViewport));
  const broadArt = createArt();
  broadArt.position.x = -1.05;
  const broad = { ...createHotspot(broadArt), priority: 10 };
  const painted = { ...createHotspot(createArt(0.2, 1)), priority: -1 };
  for (const hotspots of [[broad, painted], [painted, broad]]) {
    assert.equal(picker.pick(hotspots, { x: 500, y: 500 }, squareViewport), painted);
  }
});
