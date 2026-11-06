import type * as THREE from "three";
import type { Popup } from "../../engine/Popup.ts";
import { projectTapHintBounds } from "./TapHintProjection.ts";
import type { HintBounds } from "./TapHintProjection.ts";

interface HintLayout {
  halo: HintBounds;
  fingerLeft: number;
  fingerTop: number;
}

const SPARKLES = [
  { left: 12, top: 7, size: 18, duration: 2.1, delay: -0.1, rotation: -10 },
  { left: 49, top: 0, size: 14, duration: 2.5, delay: -1.4, rotation: 12 },
  { left: 87, top: 9, size: 21, duration: 2.3, delay: -0.8, rotation: 16 },
  { left: 100, top: 48, size: 15, duration: 2.6, delay: -1.9, rotation: -8 },
  { left: 86, top: 90, size: 19, duration: 2.2, delay: -1.1, rotation: 14 },
  { left: 48, top: 100, size: 15, duration: 2.4, delay: -0.6, rotation: -10 },
  { left: 12, top: 92, size: 20, duration: 2.6, delay: -1.7, rotation: -15 },
  { left: 0, top: 47, size: 14, duration: 2.1, delay: -0.35, rotation: 12 }
] as const;

/** Follows one remaining paper piece without changing its art or hit area. */
export class TapHintDisplay {
  private readonly element: HTMLDivElement;
  private readonly halo: HTMLDivElement;
  private readonly finger: HTMLDivElement;
  private readonly caption: HTMLElement | null;
  private target: Popup | null = null;
  private disposed = false;

  constructor(
    private readonly camera: THREE.Camera,
    private readonly canvas: HTMLElement,
    parent: HTMLElement = document.getElementById("ui") ?? document.body
  ) {
    this.element = document.createElement("div");
    this.element.className = "tap-hint";
    this.element.setAttribute("aria-hidden", "true");
    this.halo = document.createElement("div");
    this.halo.className = "tap-hint__halo";
    this.addSparkles();
    this.finger = document.createElement("div");
    this.finger.className = "tap-hint__finger";
    this.finger.textContent = "👆";
    this.element.append(this.halo, this.finger);
    parent.appendChild(this.element);
    this.caption = document.getElementById("caption");
    this.reset();
  }

  /** A query for the hint controller; it never changes the displayed target. */
  canShow(target: Popup): boolean {
    return !this.disposed && this.layout(target) !== null;
  }

  show(target: Popup, emphasized = false): void {
    if (this.disposed) return;
    this.target = target;
    this.element.className = emphasized ? "tap-hint tap-hint--emphasized" : "tap-hint";
    this.update();
  }

  /** The game calls this after camera/character motion, including viewport changes. */
  update(): void {
    if (this.disposed || !this.target) return;
    if (this.target.isColored) {
      this.reset();
      return;
    }
    const layout = this.layout(this.target);
    this.element.hidden = layout === null;
    if (!layout) return;
    Object.assign(this.halo.style, {
      left: `${layout.halo.left}px`,
      top: `${layout.halo.top}px`,
      width: `${layout.halo.width}px`,
      height: `${layout.halo.height}px`
    });
    this.finger.style.left = `${layout.fingerLeft}px`;
    this.finger.style.top = `${layout.fingerTop}px`;
  }

  reset(): void {
    this.target = null;
    this.element.hidden = true;
    this.element.className = "tap-hint";
  }

  dispose(): void {
    if (this.disposed) return;
    this.reset();
    this.element.remove();
    this.disposed = true;
  }

  /** Allocate the little lights once; CSS gives each its own unhurried rhythm. */
  private addSparkles(): void {
    for (const [index, light] of SPARKLES.entries()) {
      const sparkle = document.createElement("span");
      sparkle.className = "tap-hint__sparkle";
      sparkle.textContent = index % 3 === 0 ? "✧" : "✦";
      Object.assign(sparkle.style, {
        left: `${light.left}%`,
        top: `${light.top}%`,
        fontSize: `${light.size}px`,
        animationDuration: `${light.duration}s`,
        animationDelay: `${light.delay}s`,
        rotate: `${light.rotation}deg`
      });
      this.halo.appendChild(sparkle);
    }
  }

  private layout(target: Popup): HintLayout | null {
    if (target.isColored || !target.isOpen) return null;
    const viewport = this.canvas.getBoundingClientRect();
    const artwork = projectTapHintBounds(target.motionGroup, this.camera, viewport);
    if (!artwork) return null;
    const safeLeft = viewport.left + 8;
    const safeTop = viewport.top + 8;
    const safeRight = viewport.right - 8;
    let safeBottom = viewport.bottom - 8;
    if (this.caption?.classList.contains("visible")) {
      const caption = this.caption.getBoundingClientRect();
      if (caption.width > 0 && caption.height > 0) safeBottom = Math.min(safeBottom, caption.top - 8);
    }
    const left = Math.max(safeLeft, artwork.left - 12);
    const top = Math.max(safeTop, artwork.top - 12);
    const right = Math.min(safeRight, artwork.left + artwork.width + 12);
    const bottom = Math.min(safeBottom, artwork.top + artwork.height + 12);
    if (right - left < 12 || bottom - top < 12) return null;
    return {
      halo: { left, top, width: right - left, height: bottom - top },
      fingerLeft: Math.max(safeLeft, Math.min(safeRight - 44, right - 12)),
      fingerTop: Math.max(safeTop, Math.min(safeBottom - 44, bottom - 4))
    };
  }
}
