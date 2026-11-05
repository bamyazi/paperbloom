import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { Popup } from "../src/engine/Popup.ts";
import { createCutout } from "../src/engine/Cutout.ts";

interface RenderSample {
  color: string | null;
  time: number;
  mix: number;
}

function createPopup(animated = false) {
  const samples: RenderSample[] = [];
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1));
  mesh.userData.render = (color: string | null, time: number, mix = 1) => {
    samples.push({ color, time, mix });
  };
  const popup = new Popup();
  popup.addHinge({ mesh, position: new THREE.Vector3(), animated });
  popup.snapOpen();
  return { popup, samples };
}

test("the scene wash respects its delay, eases through colour, and finishes fully", () => {
  const { popup, samples } = createPopup();
  popup.colorizeFade("#3fa34d", 2, 0.5);

  popup.update(0.25);
  assert.equal(samples.length, 0);
  assert.equal(popup.isColored, false);
  popup.update(0.25);
  assert.equal(samples.at(-1)?.mix, 0);

  popup.update(0.5);
  assert.equal(samples.at(-1)?.mix, 0.0625);
  popup.update(0.5);
  assert.equal(samples.at(-1)?.mix, 0.5);
  popup.update(0.5);
  assert.equal(samples.at(-1)?.mix, 0.9375);
  assert.equal(popup.isColored, false);
  popup.update(0.5);
  assert.equal(samples.at(-1)?.mix, 1);
  assert.equal(samples.at(-1)?.color, "#3fa34d");
  assert.equal(popup.isColored, true);
});

test("individual target colouring remains immediate and idempotent", () => {
  const { popup, samples } = createPopup();
  popup.colorize("#f4c20d");

  assert.equal(popup.isColored, true);
  assert.deepEqual(samples, [{ color: "#f4c20d", time: 0, mix: 1 }]);
  popup.colorize("#ff0000");
  popup.update(0.1);
  assert.equal(samples.length, 1);
  assert.equal(samples[0].color, "#f4c20d");
});

test("high frame rates update the GPU blend every frame", () => {
  const { popup, samples } = createPopup();
  popup.colorizeFade("#3fa34d", 2);
  for (let frame = 0; frame < 100; frame++) popup.update(1 / 240);

  assert.equal(samples.length, 100);
  assert.ok(samples.every((sample, index) => index === 0 || sample.mix > samples[index - 1].mix));
  popup.update(2);
  assert.equal(samples.at(-1)?.mix, 1);
  assert.equal(popup.isColored, true);
});

test("an animated cutout gets one final upload when its wash completes", () => {
  const { popup, samples } = createPopup(true);
  popup.colorizeFade("#3fa34d", 0.2);
  popup.update(0.2);

  assert.equal(samples.length, 1);
  assert.equal(samples[0].mix, 1);
});

class DrawingContext {
  globalAlpha = 1;
  globalCompositeOperation = "source-over";
  lineJoin = "round";
  lineCap = "round";
  readonly composites: Array<{ image: FakeCanvas; alpha: number }> = [];
  private readonly savedAlpha: number[] = [];

  save(): void {
    this.savedAlpha.push(this.globalAlpha);
  }

  restore(): void {
    this.globalAlpha = this.savedAlpha.pop() ?? 1;
  }

  setTransform(): void {}
  clearRect(): void {}

  drawImage(image: FakeCanvas): void {
    this.composites.push({ image, alpha: this.globalAlpha });
  }
}

class FakeCanvas {
  width = 0;
  height = 0;
  readonly context = new DrawingContext();

  getContext(): DrawingContext {
    return this.context;
  }
}

test("static colour washes only change uniforms until one final flatten", (context) => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const canvases: FakeCanvas[] = [];
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => {
        const canvas = new FakeCanvas();
        canvases.push(canvas);
        return canvas;
      }
    }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });

  const draws: Array<{ color: string | null | undefined; time: number | undefined }> = [];
  const mesh = createCutout({
    width: 1,
    height: 1,
    draw: (ctx, _width, _height, color, time) => {
      // The real animal artwork sets its own alpha while painting and shading.
      ctx.globalAlpha = 1;
      draws.push({ color, time });
    }
  });
  const render = mesh.userData.render as (color: string, time: number, mix: number) => void;
  const material = mesh.material as THREE.MeshBasicMaterial;
  const shader = {
    uniforms: {},
    fragmentShader: "#include <map_pars_fragment>\n#include <map_fragment>"
  } as unknown as Parameters<typeof material.onBeforeCompile>[0];
  material.onBeforeCompile(shader, null as unknown as THREE.WebGLRenderer);
  const baseTexture = material.map!;
  const originalVersion = baseTexture.version;
  assert.equal(canvases.length, 1);

  render("#3fa34d", 1, 0);
  assert.equal(canvases.length, 2);
  const colorTexture = shader.uniforms.paperColorMap.value as THREE.Texture;
  const colorVersion = colorTexture.version;
  let disposed = 0;
  colorTexture.addEventListener("dispose", () => disposed++);
  assert.equal(shader.uniforms.paperColorMix.value, 0);
  assert.match(shader.fragmentShader, /mix\(sampledDiffuseColor, coloredSample, paperColorMix\)/);

  render("#3fa34d", 2, 0.25);
  assert.equal(canvases.length, 2);
  assert.equal(shader.uniforms.paperColorMix.value, 0.25);
  assert.equal(draws.length, 2, "initial monochrome and coloured art are each painted once");
  assert.equal(baseTexture.version, originalVersion);
  assert.equal(colorTexture.version, colorVersion);
  assert.equal(canvases[0].context.composites.length, 0);

  render("#3fa34d", 3, 0.75);
  assert.equal(canvases.length, 2, "reuse the same scratch canvas for fade frames");
  assert.equal(shader.uniforms.paperColorMix.value, 0.75);
  assert.equal(draws.length, 2);
  render("#3fa34d", 4, 1);
  assert.equal(canvases.length, 2);
  assert.equal(canvases[1].width, 0, "release the scratch pixel store after the wash");
  assert.equal(canvases[1].height, 0);
  assert.equal(disposed, 1);
  assert.equal(shader.uniforms.paperColorMap.value, baseTexture);
  assert.equal(shader.uniforms.paperColorMix.value, 0);
  assert.equal(canvases[0].context.composites.at(-1)?.alpha, 1);
  assert.ok(baseTexture.version > originalVersion);
  assert.equal(draws.length, 2);
});

test("animated colour layers refresh together at 25Hz and dispose on early scene exit", (context) => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const canvases: FakeCanvas[] = [];
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => {
        const canvas = new FakeCanvas();
        canvases.push(canvas);
        return canvas;
      }
    }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });
  const draws: Array<{ color: string | null | undefined; time: number | undefined }> = [];
  const mesh = createCutout({
    width: 1,
    height: 1,
    animated: true,
    draw: (_context, _width, _height, color, time) => draws.push({ color, time })
  });
  const material = mesh.material as THREE.MeshBasicMaterial;
  const shader = {
    uniforms: {},
    fragmentShader: "#include <map_pars_fragment>\n#include <map_fragment>"
  } as unknown as Parameters<typeof material.onBeforeCompile>[0];
  material.onBeforeCompile(shader, null as unknown as THREE.WebGLRenderer);
  const render = mesh.userData.render as (color: string, time: number, mix: number) => void;
  render("#3fa34d", 0, 0.1);
  assert.equal(draws.length, 3);
  render("#3fa34d", 0.01, 0.2);
  render("#3fa34d", 0.02, 0.3);
  render("#3fa34d", 0.03, 0.4);
  assert.equal(draws.length, 3);
  render("#3fa34d", 0.04, 0.5);
  assert.deepEqual(draws.slice(-2), [
    { color: null, time: 0.04 },
    { color: "#3fa34d", time: 0.04 }
  ]);
  assert.equal(draws.length, 5);
  const colorTexture = shader.uniforms.paperColorMap.value as THREE.Texture;
  let disposed = 0;
  colorTexture.addEventListener("dispose", () => disposed++);
  material.dispose();
  assert.equal(disposed, 1);
  assert.equal(canvases[1].width, 0);
  assert.equal(canvases[1].height, 0);
});
