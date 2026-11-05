import * as THREE from "three";
import { clamp } from "./Easing.ts";

export interface CameraRigOptions {
  /** Average forward speed; easing preserves a travel duration of length / speed. */
  speed: number;
  /** Total forward distance of the scene, in world units. */
  length: number;
  /** Seconds the camera holds still at the start while the scene unfolds. */
  holdTime?: number;
  /** Eye height above the page. */
  eyeHeight?: number;
  /** How far ahead (and slightly down) the camera looks. */
  lookAhead?: number;
}

/**
 * Drives the first-person camera. The player never steers. The camera first
 * holds still at the start (`holdTime`) so the scene can pop up around it, then
 * glides forward along -Z, gently accelerating and settling into the clearing.
 * A small hand-held bob and sway keep the page alive. Scenes can `pause()` at a
 * focal point and `resume()` afterwards.
 */
export class CameraRig {
  private travelled = 0;
  private travelTime = 0;
  private paused = false;
  private time = 0;

  private readonly travelDuration: number;
  readonly length: number;
  private readonly holdTime: number;
  private readonly eyeHeight: number;
  private readonly lookAhead: number;

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    options: CameraRigOptions
  ) {
    this.length = options.length;
    this.travelDuration = options.length / options.speed;
    this.holdTime = options.holdTime ?? 0;
    this.eyeHeight = options.eyeHeight ?? 1.5;
    this.lookAhead = options.lookAhead ?? 6;
    this.reset();
  }

  reset(): void {
    this.travelled = 0;
    this.travelTime = 0;
    this.time = 0;
    this.paused = false;
    this.apply();
  }

  pause(): void {
    this.paused = true;
  }

  resume(): void {
    this.paused = false;
  }

  get distance(): number {
    return this.travelled;
  }

  get progress(): number {
    return clamp(this.travelled / this.length, 0, 1);
  }

  /** True once the initial hold is over and the camera is free to travel. */
  get isTravelling(): boolean {
    return this.time >= this.holdTime;
  }

  get atEnd(): boolean {
    return this.travelled >= this.length;
  }

  update(dt: number): void {
    const previousTime = this.time;
    this.time += Math.max(0, dt);
    if (this.isTravelling && !this.paused && this.travelled < this.length) {
      // Count only the part of this frame after the hold. Computing distance
      // from elapsed travel time keeps the curve independent of frame rate.
      const travelStep = Math.max(0, this.time - this.holdTime) -
        Math.max(0, previousTime - this.holdTime);
      this.travelTime = Math.min(this.travelDuration, this.travelTime + travelStep);
      const progress = this.travelTime / this.travelDuration;
      this.travelled = this.length * THREE.MathUtils.smoothstep(progress, 0, 1);
    }
    this.apply();
  }

  private apply(): void {
    const z = -this.travelled;
    const bob = Math.sin(this.time * 1.6) * 0.035;
    const sway = Math.sin(this.time * 0.7) * 0.06;

    this.camera.position.set(sway, this.eyeHeight + bob, z);
    this.camera.lookAt(sway * 0.5, this.eyeHeight - 0.35, z - this.lookAhead);
  }
}
