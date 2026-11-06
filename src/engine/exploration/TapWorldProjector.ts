import * as THREE from "three";
import type { ScreenPoint } from "../interaction/Hotspot.ts";

/** Locates a paper tap, with a camera-facing fallback for empty sky taps. */
export class TapWorldProjector {
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly paper = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.025);
  private readonly position = new THREE.Vector3();

  constructor(private readonly camera: THREE.Camera, private readonly canvas: HTMLElement) {}

  project(point: ScreenPoint): THREE.Vector3 {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.pointer.set(point.x / Math.max(1, width) * 2 - 1, 1 - point.y / Math.max(1, height) * 2);
    this.camera.updateWorldMatrix(true, false);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.paper, this.position);
    if (!hit || this.position.distanceTo(this.raycaster.ray.origin) > 20) {
      this.raycaster.ray.at(6, this.position);
    }
    return this.position;
  }
}
