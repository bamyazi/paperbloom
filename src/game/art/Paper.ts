import * as THREE from "three";

/**
 * Paper.ts
 * --------
 * Paper Bloom's art style: everything that gives the game its "real paper with
 * ink line-drawings" look. It is intentionally *content*, not engine — swap
 * this out (and the figures that use it) to draw a story in a different style.
 *
 *  1. A repeatable *paper* pattern (fibres + speckles) used to fill shapes.
 *  2. Ink colour and a wobbly hand-drawn line helper.
 *
 * These helpers are meant to be used inside a `createCutout` draw callback.
 */

const clampByte = (v: number): number => Math.min(255, Math.max(0, v));

let paperPatternCanvas: HTMLCanvasElement | null = null;

/** A small tileable canvas of cream paper with subtle fibres and specks. */
function getPaperPatternCanvas(): HTMLCanvasElement {
  if (paperPatternCanvas) return paperPatternCanvas;

  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Base cream tone.
  ctx.fillStyle = "#f3eede";
  ctx.fillRect(0, 0, size, size);

  // Multi-octave fibrous grain: a fine tooth over a broader cloudy mottle so
  // large flat fills read as real hand-made paper rather than flat colour.
  const image = ctx.getImageData(0, 0, size, size);
  const data = image.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const fine = (Math.random() - 0.5) * 14;
      // Low-frequency mottle from smooth trig fields (wraps cleanly on tile).
      const k = (Math.PI * 2) / size;
      const cloud =
        Math.sin(x * k * 3 + Math.cos(y * k * 2)) * 5 +
        Math.sin(y * k * 5 + Math.cos(x * k * 4)) * 4;
      const n = fine + cloud;
      data[i] = clampByte(data[i] + n);
      data[i + 1] = clampByte(data[i + 1] + n);
      data[i + 2] = clampByte(data[i + 2] + n * 0.82);
    }
  }
  ctx.putImageData(image, 0, 0);

  // Faint "laid lines" — the ghostly horizontal ruling of pressed paper.
  ctx.strokeStyle = "rgba(120, 108, 82, 0.03)";
  ctx.lineWidth = 1;
  for (let y = 2; y < size; y += 6) {
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(y) * 0.5);
    ctx.lineTo(size, y + Math.cos(y) * 0.5);
    ctx.stroke();
  }

  // A few darker specks so large flat fills do not look sterile.
  ctx.fillStyle = "rgba(90, 80, 60, 0.06)";
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 1.4 + 0.3;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // A sprinkle of lighter flecks catches the "light" and adds tooth.
  ctx.fillStyle = "rgba(255, 252, 240, 0.12)";
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 1.1 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  paperPatternCanvas = canvas;
  return canvas;
}

/** Returns a repeating paper pattern that can be assigned to `ctx.fillStyle`. */
export function paperFill(ctx: CanvasRenderingContext2D): CanvasPattern | null {
  return ctx.createPattern(getPaperPatternCanvas(), "repeat");
}

/** A full-screen-ish paper texture for large backdrops / the book page. */
export function makePaperTexture(repeat = 1): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(getPaperPatternCanvas());
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

/** Ink colour used for every line drawing. */
export const INK = "#211d18";

/**
 * Draw a slightly wobbly "hand-drawn" line between two points. Subdividing the
 * segment and nudging each point keeps strokes from looking mechanically CG.
 */
export function sketchLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  jitter = 1.5
): void {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(2, Math.round(Math.hypot(dx, dy) / 24));
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const nx = x1 + dx * t + (Math.random() - 0.5) * jitter;
    const ny = y1 + dy * t + (Math.random() - 0.5) * jitter;
    ctx.lineTo(nx, ny);
  }
  ctx.stroke();
}
