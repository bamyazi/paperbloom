import * as THREE from "three";

/** Distances are world units; tilt is radians and breathe is a scale fraction. */
export interface PopupMotionOptions {
  bob?: number;
  drift?: number;
  tilt?: number;
  breathe?: number;
  speed?: number;
  reactionHeight?: number;
}

/** Animates only the artwork group, leaving its authored stage anchor intact. */
export class PopupMotion {
  private options: Required<PopupMotionOptions> = {
    bob: 0, drift: 0, tilt: 0.02, breathe: 0, speed: 0.8, reactionHeight: 0.16
  };
  private elapsed = 0;
  private reactionStart: number | null = null;

  constructor(
    private readonly group: THREE.Group,
    readonly reducedMotion = typeof window !== "undefined" &&
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    private readonly phase = Math.random() * Math.PI * 2
  ) {}

  configure(options: PopupMotionOptions): void {
    this.options = { ...this.options, ...options };
  }

  /** A single soft hop and nod answers a successful colouring tap. */
  react(): void {
    this.reactionStart = this.elapsed;
  }

  update(elapsed: number, reveal = 1): void {
    this.elapsed = elapsed;
    this.group.position.set(0, 0, 0);
    this.group.rotation.set(0, 0, 0);
    this.group.scale.setScalar(1);
    if (this.reducedMotion) return;

    const options = this.options;
    const time = elapsed * options.speed;
    const ramp = THREE.MathUtils.clamp(reveal, 0, 1);
    const breath = Math.sin(time * 2 + this.phase) * options.breathe * ramp;
    this.group.position.x = Math.sin(time * 0.85 + this.phase) * options.drift * ramp;
    this.group.position.y = (0.5 - Math.cos(time * 1.7 + this.phase) * 0.5) * options.bob * ramp;
    this.group.rotation.z = Math.sin(time + this.phase) * options.tilt * ramp;
    this.group.scale.set(1 - breath * 0.35, 1 + breath, 1);

    if (this.reactionStart === null) return;
    const progress = (elapsed - this.reactionStart) / 0.75;
    if (progress >= 1) {
      this.reactionStart = null;
      return;
    }
    const envelope = Math.pow(Math.sin(Math.PI * Math.max(0, progress)), 2);
    this.group.position.y += envelope * options.reactionHeight;
    this.group.rotation.z += Math.sin(progress * Math.PI * 2) * envelope * 0.08;
  }
}
