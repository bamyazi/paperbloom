import * as THREE from "three";
import type { Hotspot, ScreenPoint } from "./Hotspot.ts";
import { HotspotPicker } from "./HotspotPicker.ts";
import { TapDiagnostics } from "./TapDiagnostics.ts";

interface Press {
  point: ScreenPoint;
  hotspot: Hotspot | null;
}

/** Owns pointer gestures and scene hotspot registration; picking is separate. */
export class InteractionManager {
  private readonly hotspots: Hotspot[] = [];
  private readonly presses = new Map<number, Press>();
  private readonly picker: HotspotPicker;
  private readonly diagnostics: TapDiagnostics;
  private hovered: Hotspot | null = null;
  private enabled = true;

  constructor(camera: THREE.Camera, private readonly domElement: HTMLElement) {
    this.picker = new HotspotPicker(camera);
    this.diagnostics = new TapDiagnostics(camera, domElement);
    domElement.addEventListener("pointermove", this.handlePointerMove);
    domElement.addEventListener("pointerdown", this.handlePointerDown);
    domElement.addEventListener("pointerup", this.handlePointerUp);
    domElement.addEventListener("pointercancel", this.handlePointerCancel);
    domElement.addEventListener("lostpointercapture", this.handlePointerCancel);
  }

  register(hotspot: Hotspot): void {
    this.hotspots.push(hotspot);
  }

  unregister(object: THREE.Object3D): void {
    const index = this.hotspots.findIndex((hotspot) => hotspot.object === object);
    if (index < 0) return;
    if (this.hovered === this.hotspots[index]) this.setHovered(null);
    this.hotspots.splice(index, 1);
  }

  clear(): void {
    this.resetPresses();
    this.setHovered(null);
    this.hotspots.length = 0;
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.resetPresses();
      this.setHovered(null);
    }
  }

  dispose(): void {
    this.clear();
    this.diagnostics.dispose();
    this.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.domElement.removeEventListener("pointerdown", this.handlePointerDown);
    this.domElement.removeEventListener("pointerup", this.handlePointerUp);
    this.domElement.removeEventListener("pointercancel", this.handlePointerCancel);
    this.domElement.removeEventListener("lostpointercapture", this.handlePointerCancel);
  }

  private point(event: PointerEvent): ScreenPoint {
    const rect = this.domElement.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  private pick(event: PointerEvent): Hotspot | null {
    const rect = this.domElement.getBoundingClientRect();
    const padding = event.pointerType === "mouse" ? 8 : 18;
    return this.picker.pick(this.hotspots, this.point(event), rect, padding);
  }

  private setHovered(next: Hotspot | null): void {
    if (this.hovered === next) return;
    this.hovered?.onHover?.(false);
    this.hovered = next;
    this.hovered?.onHover?.(true);
    this.domElement.style.cursor = next ? next.cursor ?? "pointer" : "default";
  }

  private release(pointerId: number): void {
    this.presses.delete(pointerId);
    if (this.domElement.hasPointerCapture(pointerId)) this.domElement.releasePointerCapture(pointerId);
  }

  private resetPresses(): void {
    for (const pointerId of this.presses.keys()) this.release(pointerId);
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (this.enabled && event.pointerType === "mouse") this.setHovered(this.pick(event));
  };

  private readonly handlePointerDown = (event: PointerEvent): void => {
    if (!this.enabled || event.button !== 0) return;
    this.presses.set(event.pointerId, { point: this.point(event), hotspot: this.pick(event) });
    this.domElement.setPointerCapture(event.pointerId);
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    const press = this.presses.get(event.pointerId);
    this.release(event.pointerId);
    if (!this.enabled || !press) return;
    const point = this.point(event);
    const drift = Math.hypot(point.x - press.point.x, point.y - press.point.y);
    if (drift > 30) return;

    // Another finger may already have coloured this piece. Do not redirect the
    // second release to whatever is now behind it.
    if (press.hotspot && !this.hotspots.includes(press.hotspot)) return;
    // Keep a small finger wobble on the originally pressed, still-active piece.
    const hit = press.hotspot ?? this.pick(event);
    const rect = this.domElement.getBoundingClientRect();
    const pointer = new THREE.Vector2(
      point.x / rect.width * 2 - 1,
      1 - point.y / rect.height * 2
    );
    this.diagnostics.show(pointer, rect, this.hotspots, hit);
    hit?.onClick();
  };

  private readonly handlePointerCancel = (event: PointerEvent): void => {
    this.release(event.pointerId);
  };
}
