import assert from "node:assert/strict";
import { test } from "node:test";
import type { TestContext } from "node:test";
import * as THREE from "three";
import { drawPond } from "../src/game/art/Figures.ts";
import { drawStream } from "../src/game/art/scenery/Stream.ts";
import { PLAY_PROFILES } from "../src/game/play/PlayfulContent.ts";
import { createWaterSurface } from "../src/game/scenery/WaterSurface.ts";

const waterDefinitions = [
  { name: "pond", draw: drawPond, width: 8, depth: 5.5, z: -11, profile: PLAY_PROFILES.pond },
  { name: "stream", draw: drawStream, width: 8.5, depth: 5, z: -12.1, profile: PLAY_PROFILES.stream }
] as const;
type WaterDefinition = typeof waterDefinitions[number];

/** Keep real water drawing/shader setup, without requiring a browser rasterizer. */
function installCanvasFactory(context: TestContext): void {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const noop = () => {};
  const drawing: Record<string, unknown> = {
    createPattern: () => ({}),
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
    getImageData: (_x: number, _y: number, width: number, height: number) => ({
      data: new Uint8ClampedArray(width * height * 4), width, height
    })
  };
  for (const name of [
    "arc", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath",
    "drawImage", "ellipse", "fill", "fillRect", "lineTo", "moveTo",
    "putImageData", "restore", "save", "setTransform", "stroke"
  ]) drawing[name] = noop;
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { createElement: () => ({ width: 0, height: 0, getContext: () => drawing }) }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });
}

function createFixture(context: TestContext, definition: WaterDefinition) {
  const colors: Array<string | null> = [];
  const surface = createWaterSurface({
    width: definition.width,
    depth: definition.depth,
    profile: definition.profile,
    draw: (drawing, width, height, color) => {
      colors.push(color ?? null);
      definition.draw(drawing, width, height, color);
    }
  });
  surface.root.position.z = definition.z;
  const meshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
  surface.motionGroup.traverse((object) => {
    if (object instanceof THREE.Mesh) meshes.push(object);
  });
  assert.ok(meshes.length > 0);
  context.after(() => {
    for (const mesh of meshes) {
      mesh.geometry.dispose();
      mesh.material.map?.dispose();
      mesh.material.dispose();
    }
  });
  return { surface, meshes, colors };
}

function assertStillOnPage(fixture: ReturnType<typeof createFixture>, definition: WaterDefinition): void {
  const bounds = new THREE.Box3();
  const point = new THREE.Vector3();
  for (const mesh of fixture.meshes) {
    mesh.updateWorldMatrix(true, false);
    const vertices = mesh.geometry.getAttribute("position");
    for (let index = 0; index < vertices.count; index++) {
      point.fromBufferAttribute(vertices, index).applyMatrix4(mesh.matrixWorld);
      assert.ok(Math.abs(point.y - 0.012) < 1e-9, `${definition.name} vertex at Y=${point.y} left the flat water plane`);
      bounds.expandByPoint(point);
    }
  }
  // Being flat is not enough if a generic pop still changes the water's size.
  const size = bounds.getSize(new THREE.Vector3());
  const centre = bounds.getCenter(new THREE.Vector3());
  assert.ok(Math.abs(size.x - definition.width) < 1e-9);
  assert.ok(Math.abs(size.z - definition.depth) < 1e-9);
  assert.ok(Math.abs(centre.x) < 1e-9 && Math.abs(centre.z - definition.z) < 1e-9);
}

for (const definition of waterDefinitions) {
  test(`${definition.name} stays flat through unfolding, idle phases and tap reactions`, (context) => {
    installCanvasFactory(context);
    const fixture = createFixture(context, definition);
    assert.equal(fixture.surface.playProfile, definition.profile);
    assert.equal(fixture.surface.playProfile?.surprise, "fish");
    assert.equal(fixture.surface.naturalColor, "#a8cddd");
    fixture.surface.open();

    // Ten seconds span a full idle cycle even with a random initial sway phase.
    for (let frame = 0; frame < 400; frame++) {
      if (frame % 100 === 40) fixture.surface.react();
      if (frame === 90) fixture.surface.setHighlighted(true);
      if (frame === 180) fixture.surface.setHighlighted(false);
      fixture.surface.update(0.025);
      assertStillOnPage(fixture, definition);
    }
    assert.equal(fixture.surface.isOpen, true);
    assert.equal(fixture.surface.isColored, false);
    assert.deepEqual(fixture.colors, [null]);
  });

  test(`${definition.name} colours and finishes its wash without moving the water`, (context) => {
    installCanvasFactory(context);
    const instant = createFixture(context, definition);
    instant.surface.snapOpen();
    instant.surface.colorize("#80b6d5");
    for (let frame = 0; frame < 45; frame++) {
      instant.surface.update(0.02);
      assertStillOnPage(instant, definition);
    }
    assert.equal(instant.surface.isColored, true);
    assert.deepEqual(instant.colors, [null, "#80b6d5"]);

    const fading = createFixture(context, definition);
    fading.surface.snapOpen();
    const shader = {
      uniforms: {} as Record<string, { value: unknown }>,
      fragmentShader: "#include <map_pars_fragment>\n#include <map_fragment>"
    };
    const compile = fading.meshes[0].material.onBeforeCompile as (program: typeof shader, renderer: unknown) => void;
    compile(shader, {});
    fading.surface.colorizeFade(fading.surface.naturalColor!, 1.4, 0.85);
    let sawIntermediateColor = false;
    for (let frame = 0; frame < 120; frame++) {
      fading.surface.update(0.025);
      const mix = Number(shader.uniforms.paperColorMix.value);
      if (mix > 0 && mix < 1) sawIntermediateColor = true;
      assertStillOnPage(fading, definition);
    }
    assert.ok(sawIntermediateColor, "flat water still participates in the animated colour wash");
    assert.equal(fading.surface.isColored, true);
    assert.equal(fading.colors[0], null);
    assert.ok(fading.colors.length > 1 && fading.colors.slice(1).every((color) => color === "#a8cddd"));
  });
}
