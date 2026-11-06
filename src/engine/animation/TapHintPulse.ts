import * as THREE from "three";

interface BorrowedTint {
  color: THREE.Color;
  original: THREE.Color;
}

const PULSE_SECONDS = 1.8;
const MAXIMUM_TINT = 0.4;
const WARM_GOLD = new THREE.Color("#ffd36b");

/** Borrows artwork tint without revealing other paper pieces behind it. */
export class TapHintPulse {
  private readonly materials: BorrowedTint[] = [];
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
        const color = (material as THREE.Material & { color?: THREE.Color }).color;
        if (color instanceof THREE.Color) this.materials.push({ color, original: color.clone() });
      }
    });
  }

  /** Uses story time, so slow phones and different frame partitions agree. */
  update(elapsed: number): void {
    if (!this.active) return;
    const phase = Math.max(0, elapsed - this.startedAt) * Math.PI * 2 / PULSE_SECONDS;
    const strength = MAXIMUM_TINT * (1 - Math.cos(phase)) / 2;
    for (const { color, original } of this.materials) color.copy(original).lerp(WARM_GOLD, strength);
  }

  /** Restore exact authored values before colour reactions or scene cleanup. */
  stop(): void {
    if (!this.active) return;
    for (const { color, original } of this.materials) color.copy(original);
    this.materials.length = 0;
    this.active = false;
  }
}
