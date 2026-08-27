import * as THREE from "three";
import { Popup } from "./Popup.ts";
import { createCutout, CanvasDraw } from "./Cutout.ts";
import { Easing } from "./Easing.ts";

/**
 * Element.ts
 * ----------
 * A declarative, data-driven way to build a `Popup`. Instead of hand-writing a
 * factory function per prop, describe an element as data — a list of cutout
 * "parts", each with its own hinge/unfold animation — and let `buildElement`
 * assemble it. Content (trees, flowers, characters …) becomes plain data.
 *
 * All sizes/positions are authored at scale 1 and multiplied by the `scale`
 * option at build time.
 */

/** One cutout layer of an element, with its own fold/unfold animation. */
export interface ElementPart {
  /** Art: renders onto the cutout canvas. */
  draw: CanvasDraw;
  /** World width/height at scale 1. */
  width: number;
  height: number;
  /** Canvas pixel density (default ~256px/unit). */
  pixelsPerUnit?: number;
  /** Hinge pivot position, local to the element's base. Default [0,0,0]. */
  position?: [number, number, number];
  /** Cutout centre relative to the pivot. Default [0, height/2, 0]. */
  meshOffset?: [number, number, number];
  /** Axis the hinge folds about. Default "x". */
  axis?: "x" | "y" | "z";
  /** Yaw of the hinge about Y. */
  yaw?: number;
  /** Folded (rest) angle in radians. Default -PI/2. */
  from?: number;
  /** Open angle in radians. Default 0. */
  to?: number;
  /** Seconds after the element opens before this part animates. */
  delay?: number;
  /** Seconds this part takes to unfold. */
  duration?: number;
  easing?: Easing;
  /** Redraw this part every frame (with elapsed time) for animated art. */
  animated?: boolean;
}

/** A complete element: its parts plus presentation defaults. */
export interface ElementDefinition {
  parts: ElementPart[];
  /** Corridor-guard footprint half-width at scale 1 (default: widest part). */
  footprintRadius?: number;
  /** Idle sway once opened. */
  idle?: { amplitude: number; frequency: number };
  /** Render both faces so folded cutouts show from behind. Default true. */
  doubleSided?: boolean;
  /** Lift off the page to avoid z-fighting when folded flat. Default 0.02. */
  lift?: number;
  /** Draw a soft contact shadow on the page beneath it. Default true. */
  shadow?: boolean;
  /**
   * The colour this element blooms into when the whole scene is washed with
   * colour at a chapter's end. Any truthy value triggers each part's coloured
   * art (many parts pick their own natural palette and ignore the exact hue).
   */
  naturalColor?: string;
}

let shadowTexture: THREE.CanvasTexture | null = null;

/** A soft radial blob used as a ground contact shadow. */
function getShadowTexture(): THREE.CanvasTexture {
  if (shadowTexture) return shadowTexture;
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  // A gentle falloff so the blob has no hard rim to catch the eye.
  g.addColorStop(0, "rgba(38, 32, 24, 0.5)");
  g.addColorStop(0.45, "rgba(38, 32, 24, 0.24)");
  g.addColorStop(0.75, "rgba(38, 32, 24, 0.08)");
  g.addColorStop(1, "rgba(38, 32, 24, 0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  shadowTexture = new THREE.CanvasTexture(canvas);
  shadowTexture.colorSpace = THREE.SRGBColorSpace;
  return shadowTexture;
}

export interface BuildElementOptions {
  /** Uniform scale applied to every size and position. Default 1. */
  scale?: number;
}

/** Assemble a `Popup` from a declarative element definition. */
export function buildElement(
  def: ElementDefinition,
  options: BuildElementOptions = {}
): Popup {
  const scale = options.scale ?? 1;
  const popup = new Popup();

  let widestHalf = 0;
  for (const part of def.parts) {
    widestHalf = Math.max(widestHalf, part.width / 2);

    const mesh = createCutout({
      draw: part.draw,
      width: part.width * scale,
      height: part.height * scale,
      pixelsPerUnit: part.pixelsPerUnit,
      doubleSided: def.doubleSided ?? true
    });

    const pos = part.position ?? [0, 0, 0];
    const off = part.meshOffset ?? [0, part.height / 2, 0];
    popup.addHinge({
      mesh,
      position: new THREE.Vector3(pos[0] * scale, pos[1] * scale, pos[2] * scale),
      meshOffset: new THREE.Vector3(off[0] * scale, off[1] * scale, off[2] * scale),
      axis: part.axis,
      yaw: part.yaw,
      from: part.from,
      to: part.to,
      delay: part.delay,
      duration: part.duration,
      easing: part.easing,
      animated: part.animated
    });
  }

  popup.footprintRadius = (def.footprintRadius ?? widestHalf) * scale;
  popup.root.position.y = def.lift ?? 0.02;
  popup.naturalColor = def.naturalColor ?? null;

  if (def.shadow !== false) {
    const radius = (def.footprintRadius ?? widestHalf) * scale;
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(radius * 2.6, radius * 1.5),
      new THREE.MeshBasicMaterial({
        map: getShadowTexture(),
        transparent: true,
        // No depth interaction at all: the shadow is a decal that simply
        // alpha-blends onto the page, so it can never z-fight the ground or a
        // neighbouring shadow. Draw order (renderOrder) keeps it above the
        // page but below every upright cutout.
        depthWrite: false,
        depthTest: false,
        opacity: 0.5
      })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -(def.lift ?? 0.02) + 0.006; // just above the page
    shadow.renderOrder = 0.5;
    popup.root.add(shadow);
  }

  if (def.idle) {
    // Per-instance frequency jitter (±15%) so identical elements don't sync.
    const jitter = 0.85 + Math.random() * 0.3;
    popup.setIdle(def.idle.amplitude, def.idle.frequency * jitter);
  }

  return popup;
}
