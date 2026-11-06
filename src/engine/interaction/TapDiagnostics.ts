import * as THREE from "three";
import type { Hotspot } from "./Hotspot.ts";

/** Owns the optional `?debug` tap overlay and removes it when interaction ends. */
export class TapDiagnostics {
  private readonly raycaster = new THREE.Raycaster();
  private readonly overlay: HTMLDivElement | null;
  private canvas: HTMLCanvasElement | null = null;
  private label: HTMLPreElement | null = null;

  constructor(
    private readonly camera: THREE.Camera,
    private readonly surface?: HTMLElement
  ) {
    this.overlay = this.createOverlay();
  }

  show(
    pointer: THREE.Vector2,
    viewport: DOMRect,
    hotspots: readonly Hotspot[],
    picked: Hotspot | null
  ): void {
    if (!this.overlay || !this.canvas || !this.label) return;
    if (viewport.width <= 0 || viewport.height <= 0) return;

    // Use the game's CSS viewport, including its offset, rather than the window.
    Object.assign(this.overlay.style, {
      display: "block",
      left: `${viewport.left}px`,
      top: `${viewport.top}px`,
      width: `${viewport.width}px`,
      height: `${viewport.height}px`
    });

    this.raycaster.setFromCamera(pointer, this.camera);
    const lines = [
      `tap ${pointer.x.toFixed(2)},${pointer.y.toFixed(2)}  pieces:${hotspots.length}  picked:${picked ? "YES" : "no"}`,
      ...this.surfaceReport(pointer, viewport)
    ];
    for (const [index, hotspot] of hotspots.entries()) {
      const hits = this.raycaster.intersectObject(hotspot.object, true);
      const artHits = hits.filter((hit) => hit.object.userData.render);
      lines.push(`#${index} gen:${hotspot.generous ? 1 : 0} art hits:${artHits.length}`);
    }
    this.label.textContent = lines.join("\n");
    this.drawMarkers(pointer, viewport, hotspots);
  }

  /** Read device measurements only in debug mode; nothing is sent or stored. */
  private surfaceReport(pointer: THREE.Vector2, rect: DOMRect): string[] {
    const clientX = rect.left + (pointer.x + 1) * rect.width / 2;
    const clientY = rect.top + (1 - pointer.y) * rect.height / 2;
    const format = (value: number): string => value.toFixed(1);
    const lines = [
      `client ${format(clientX)},${format(clientY)}  DPR ${window.devicePixelRatio}`,
      `canvas CSS ${format(rect.left)},${format(rect.top)} ${format(rect.width)}x${format(rect.height)}`
    ];
    const visual = window.visualViewport;
    if (visual) {
      lines.push(`visual ${format(visual.width)}x${format(visual.height)} offset ${format(visual.offsetLeft)},${format(visual.offsetTop)} scale ${format(visual.scale)}`);
    }
    if ((this.camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const camera = this.camera as THREE.PerspectiveCamera;
      lines.push(`camera aspect ${camera.aspect.toFixed(3)} FOV ${format(camera.fov)}`);
    }
    const surface = this.surface as HTMLCanvasElement | undefined;
    if (surface && typeof surface.getContext === "function") {
      const gl = surface.getContext("webgl2");
      lines.push(`backing ${surface.width}x${surface.height}`);
      if (gl) {
        const viewport = Array.from(gl.getParameter(gl.VIEWPORT) as Int32Array);
        lines.push(`GL buffer ${gl.drawingBufferWidth}x${gl.drawingBufferHeight} viewport ${viewport.join(",")}`);
      }
    }
    return lines;
  }

  dispose(): void {
    this.overlay?.remove();
  }

  private createOverlay(): HTMLDivElement | null {
    if (typeof window === "undefined") return null;
    const parameters = new URLSearchParams(window.location.search);
    if (!parameters.has("debug") || parameters.has("no-tap-debug")) return null;

    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      display: "none",
      position: "fixed",
      zIndex: "199",
      pointerEvents: "none"
    });
    this.canvas = document.createElement("canvas");
    Object.assign(this.canvas.style, {
      display: "block",
      width: "100%",
      height: "100%"
    });
    this.label = document.createElement("pre");
    Object.assign(this.label.style, {
      position: "absolute",
      left: "8px",
      top: "8px",
      margin: "0",
      padding: "8px 10px",
      maxWidth: "calc(100% - 16px)",
      font: "12px/1.35 monospace",
      color: "#0a0",
      background: "rgba(255,255,255,0.85)",
      borderRadius: "6px",
      whiteSpace: "pre-wrap"
    });
    overlay.append(this.canvas, this.label);
    document.body.appendChild(overlay);
    return overlay;
  }

  private drawMarkers(
    pointer: THREE.Vector2,
    viewport: DOMRect,
    hotspots: readonly Hotspot[]
  ): void {
    const canvas = this.canvas;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    const width = Math.round(viewport.width * ratio);
    const height = Math.round(viewport.height * ratio);
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, viewport.width, viewport.height);
    context.strokeStyle = "rgba(0,180,0,0.9)";
    context.lineWidth = 2;

    for (const hotspot of hotspots) {
      hotspot.object.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (!mesh.isMesh || !mesh.userData.render || !mesh.geometry) return;
        this.drawArtBox(context, mesh, viewport);
      });
    }

    const x = (pointer.x * 0.5 + 0.5) * viewport.width;
    const y = (-pointer.y * 0.5 + 0.5) * viewport.height;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(x - 16, y);
    context.lineTo(x + 16, y);
    context.moveTo(x, y - 16);
    context.lineTo(x, y + 16);
    context.stroke();
  }

  private drawArtBox(
    context: CanvasRenderingContext2D,
    mesh: THREE.Mesh,
    viewport: DOMRect
  ): void {
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox;
    if (!box) return;
    mesh.updateWorldMatrix(true, false);
    const corners = [
      [box.min.x, box.min.y],
      [box.max.x, box.min.y],
      [box.max.x, box.max.y],
      [box.min.x, box.max.y]
    ];
    context.beginPath();
    for (const [index, [x, y]] of corners.entries()) {
      const point = new THREE.Vector3(x, y, 0)
        .applyMatrix4(mesh.matrixWorld)
        .project(this.camera);
      const pixelX = (point.x * 0.5 + 0.5) * viewport.width;
      const pixelY = (-point.y * 0.5 + 0.5) * viewport.height;
      if (index === 0) context.moveTo(pixelX, pixelY);
      else context.lineTo(pixelX, pixelY);
    }
    context.closePath();
    context.stroke();
  }
}
