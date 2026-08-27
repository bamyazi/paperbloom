import * as THREE from "three";
import { clamp } from "./Easing.ts";

export interface CameraRigOptions {
  /** Forward travel speed in world units per second. */
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
 * glides forward along -Z into the clearing / puzzle location with a gentle
 * hand-held bob and sway. Scenes can `pause()` it at a focal point and
 * `resume()` afterwards.
 */
export class CameraRig {
  private travelled = 0;
  private paused = false;
  private time = 0;

  private readonly speed: number;
  readonly length: number;
  private readonly holdTime: number;
  private readonly eyeHeight: number;
  private readonly lookAhead: number;

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    options: CameraRigOptions
  ) {
    this.speed = options.speed;
    this.length = options.length;
    this.holdTime = options.holdTime ?? 0;
    this.eyeHeight = options.eyeHeight ?? 1.5;
    this.lookAhead = options.lookAhead ?? 6;
    this.reset();
  }

  reset(): void {
    this.travelled = 0;
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
    this.time += dt;
    if (this.isTravelling && !this.paused && this.travelled < this.length) {
      this.travelled = Math.min(this.length, this.travelled + this.speed * dt);
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
