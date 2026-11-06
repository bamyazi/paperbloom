import * as THREE from "three";

interface BorrowedMaterial {
  material: THREE.Material;
  opacity: number;
  transparent: boolean;
}

const PULSE_SECONDS = 1.8;
const MINIMUM_OPACITY = 0.6;

/** Temporarily borrows artwork opacity; the popup still owns every material. */
export class TapHintPulse {
  private readonly materials: BorrowedMaterial[] = [];
  private active = false;
  private startedAt = 0;

  constructor(
    private readonly artwork: THREE.Object3D,
    private readonly reducedMotion = false
  ) {}

  start(elapsed: number): void {
    if (this.active || this.reducedMotion) return;
    this.active = true;
    this.startedAt = elapsed;
    const seen = new Set<THREE.Material>();
    this.artwork.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) {
        if (seen.has(material)) continue;
        seen.add(material);
        this.materials.push({ material, opacity: material.opacity, transparent: material.transparent });
        if (!material.transparent) {
          material.transparent = true;
          material.needsUpdate = true;
        }
      }
    });
  }

  /** Uses story time, so slow phones and different frame partitions agree. */
  update(elapsed: number): void {
    if (!this.active) return;
    const phase = Math.max(0, elapsed - this.startedAt) * Math.PI * 2 / PULSE_SECONDS;
    const fade = MINIMUM_OPACITY + (1 - MINIMUM_OPACITY) * (1 + Math.cos(phase)) / 2;
    for (const { material, opacity } of this.materials) material.opacity = opacity * fade;
  }

  /** Restore exact authored values before colour reactions or scene cleanup. */
  stop(): void {
    if (!this.active) return;
    for (const { material, opacity, transparent } of this.materials) {
      material.opacity = opacity;
      if (material.transparent !== transparent) {
        material.transparent = transparent;
        material.needsUpdate = true;
      }
    }
    this.materials.length = 0;
    this.active = false;
  }
}
