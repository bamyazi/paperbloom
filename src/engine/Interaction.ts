import * as THREE from "three";

export interface Hotspot {
  /** The object (and its descendants) that can be clicked. */
  object: THREE.Object3D;
  /** Called once when the pointer is released over the hotspot. */
  onClick: () => void;
  /** Optional hover feedback; `hovering` is true on enter, false on leave. */
  onHover?: (hovering: boolean) => void;
  /** CSS cursor to show while hovering (default: "pointer"). */
  cursor?: string;
  /**
   * Accept a tap anywhere on the object's whole area (not just its painted
   * pixels). Makes small targets much easier for a young child to tap.
   */
  generous?: boolean;
}

/**
 * Handles the point-and-click layer: raycasts the pointer against registered
 * hotspots, drives hover feedback and fires click callbacks.
 *
 * Scene 1 registers no hotspots yet, but the whole puzzle interaction pipeline
 * already runs through here so later scenes only need to add hotspots.
 */
export class InteractionManager {
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly hotspots: Hotspot[] = [];
  // Cached 2D contexts for sampling cutout alpha during pixel-accurate picking.
  private readonly alphaContexts = new WeakMap<
    HTMLCanvasElement,
    CanvasRenderingContext2D | null
  >();

  private hovered: Hotspot | null = null;
  private enabled = true;
  private pointerDownId = -1;

  constructor(
    private readonly camera: THREE.Camera,
    private readonly domElement: HTMLElement
  ) {
    domElement.addEventListener("pointermove", this.handlePointerMove);
    domElement.addEventListener("pointerdown", this.handlePointerDown);
    domElement.addEventListener("pointerup", this.handlePointerUp);
  }

  register(hotspot: Hotspot): void {
    this.hotspots.push(hotspot);
  }

  unregister(object: THREE.Object3D): void {
    const index = this.hotspots.findIndex((h) => h.object === object);
    if (index >= 0) this.hotspots.splice(index, 1);
  }

  clear(): void {
    this.setHovered(null);
    this.hotspots.length = 0;
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) this.setHovered(null);
  }

  dispose(): void {
    this.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.domElement.removeEventListener("pointerdown", this.handlePointerDown);
    this.domElement.removeEventListener("pointerup", this.handlePointerUp);
  }

  private updatePointer(event: PointerEvent): void {
    const rect = this.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private pick(): Hotspot | null {
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Raycast the actual drawn cutout planes (the plane *is* the picture), so
    // the tap zone lines up exactly with what's on screen. The invisible pad
    // and ground shadow carry no `render` hook, so they're skipped. Generous
    // pieces accept a hit anywhere on their plane; precise pieces need a
    // painted, opaque pixel. Nearest qualifying piece wins.
    let bestPrecise: Hotspot | null = null;
    let bestPreciseDist = Infinity;
    let bestGenerous: Hotspot | null = null;
    let bestGenerousDist = Infinity;

    for (const hotspot of this.hotspots) {
      const hits = this.raycaster.intersectObject(hotspot.object, true);
      for (const hit of hits) {
        if (!(hit.object as THREE.Mesh).userData.render) continue;

        if (hotspot.generous) {
          if (hit.distance < bestGenerousDist) {
            bestGenerousDist = hit.distance;
            bestGenerous = hotspot;
          }
          break;
        }

        if (!this.isOpaqueHit(hit)) continue;
        if (hit.distance < bestPreciseDist) {
          bestPreciseDist = hit.distance;
          bestPrecise = hotspot;
        }
        break;
      }
    }

    // Prefer a precise, painted-pixel hit; otherwise the closest generous piece.
    return bestPrecise ?? bestGenerous;
  }

  /** True if the ray hit a painted pixel of the cutout (not transparent paper). */
  private isOpaqueHit(hit: THREE.Intersection): boolean {
    const mesh = hit.object as THREE.Mesh;
    const material = mesh.material as THREE.MeshBasicMaterial | undefined;
    const map = material?.map;
    const image = map?.image as HTMLCanvasElement | undefined;
    if (!hit.uv || !image || typeof image.getContext !== "function") return true;

    let ctx = this.alphaContexts.get(image);
    if (ctx === undefined) {
      ctx = image.getContext("2d", { willReadFrequently: true });
      this.alphaContexts.set(image, ctx);
    }
    if (!ctx) return true;

    // CanvasTexture is flipped in Y, so map uv.y from bottom-left to canvas rows.
    const x = Math.min(image.width - 1, Math.max(0, Math.floor(hit.uv.x * image.width)));
    const y = Math.min(
      image.height - 1,
      Math.max(0, Math.floor((1 - hit.uv.y) * image.height))
    );
    return ctx.getImageData(x, y, 1, 1).data[3] > 32;
  }

  private setHovered(next: Hotspot | null): void {
    if (this.hovered === next) return;
    this.hovered?.onHover?.(false);
    this.hovered = next;
    this.hovered?.onHover?.(true);
    this.domElement.style.cursor = next ? next.cursor ?? "pointer" : "default";
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (!this.enabled) return;
    this.updatePointer(event);
    this.setHovered(this.pick());
  };

  private readonly handlePointerDown = (event: PointerEvent): void => {
    if (!this.enabled) return;
    this.pointerDownId = event.pointerId;
    this.updatePointer(event);
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (!this.enabled || event.pointerId !== this.pointerDownId) return;
    this.pointerDownId = -1;
    this.updatePointer(event);
    const hit = this.pick();
    if (hit) hit.onClick();
  };
}
