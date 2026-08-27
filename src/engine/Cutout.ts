import * as THREE from "three";

/**
 * Cutout.ts
 * ---------
 * A generic bridge from 2D canvas art to a 3D "cutout": a flat, textured plane
 * whose transparent regions are cut away. This is the raw material every pop-up
 * is built from. The engine knows nothing about *what* is drawn — callers pass
 * a `draw` callback and render whatever art style they like.
 */

/** Draws artwork onto a canvas of the given pixel dimensions. */
export type CanvasDraw = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  /** Colour to draw with (for the colouring mechanic); null/undefined = mono. */
  color?: string | null,
  /** Elapsed seconds, for animated cutouts that redraw each frame. */
  time?: number
) => void;

export interface CutoutOptions {
  /** World-space width of the resulting plane. */
  width: number;
  /** World-space height of the resulting plane. */
  height: number;
  /** Canvas pixel resolution per world unit (default ~256px/unit). */
  pixelsPerUnit?: number;
  /** Renders the artwork; `w`/`h` are the canvas pixel dimensions. */
  draw: CanvasDraw;
  /** Render both faces (true) so a folded cutout is visible from behind. */
  doubleSided?: boolean;
  /** Alpha below which a pixel is cut away entirely (default 0.4). */
  alphaTest?: number;
}

/**
 * Build a flat cutout mesh from a hand-drawn canvas. The plane's origin sits at
 * its centre; hinging/animation is handled separately by `Popup`, which
 * re-parents the mesh onto a pivot.
 */
export function createCutout(options: CutoutOptions): THREE.Mesh {
  const ppu = options.pixelsPerUnit ?? 256;
  const w = Math.max(2, Math.round(options.width * ppu));
  const h = Math.max(2, Math.round(options.height * ppu));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  // willReadFrequently: cutout alpha is sampled for pixel-accurate picking.
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  options.draw(ctx, w, h);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: options.alphaTest ?? 0.4,
    side: options.doubleSided ? THREE.DoubleSide : THREE.FrontSide
  });

  const geometry = new THREE.PlaneGeometry(options.width, options.height);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 1;

  // Re-render the art later (colour on tap, or per-frame for animated cutouts).
  // `mix` (0…1) cross-fades from the mono art to the coloured art by drawing
  // the coloured pass over the mono one at increasing opacity — a smooth
  // "colour blooming in" with no change needed to any draw function.
  mesh.userData.render = (color: string | null = null, time = 0, mix = 1): void => {
    ctx.clearRect(0, 0, w, h);
    if (color && mix < 1) {
      options.draw(ctx, w, h, null, time);
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, mix));
      options.draw(ctx, w, h, color, time);
      ctx.restore();
    } else {
      options.draw(ctx, w, h, color, time);
    }
    texture.needsUpdate = true;
  };

  return mesh;
}
