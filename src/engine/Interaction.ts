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
  // Scratch objects reused when projecting a target's art into screen space.
  private readonly corner = new THREE.Vector3();
  private readonly screenBox = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
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

    // Generous targets (colouring pieces) are tappable across their *whole*
    // drawn area: we project just the artwork into screen space and test the
    // tap against that box (plus a little slack). This covers big multi-extent
    // characters fully and stays reliable no matter how close the camera sits —
    // where the old invisible sphere pad could miss. Precise (non-generous)
    // targets still require landing on a painted, opaque pixel.
    let bestPrecise: Hotspot | null = null;
    let bestPreciseDist = Infinity;
    let bestGenerous: Hotspot | null = null;
    let bestGenerousDist = Infinity;

    for (const hotspot of this.hotspots) {
      if (hotspot.generous) {
        // Count a tap that lands inside the art's on-screen box (covers big
        // characters fully) OR that hits the forgiving pad sphere (covers
        // pieces whose flat art projects to a thin/awkward box). Score by how
        // central the tap is so the closest piece wins.
        let candidate = false;
        let score = Infinity;
        if (this.artScreenBox(hotspot.object)) {
          const { minX, minY, maxX, maxY } = this.screenBox;
          const margin = 0.04;
          const inBox =
            this.pointer.x >= minX - margin &&
            this.pointer.x <= maxX + margin &&
            this.pointer.y >= minY - margin &&
            this.pointer.y <= maxY + margin;
          const cx = (minX + maxX) / 2;
          const cy = (minY + maxY) / 2;
          const d = Math.hypot(this.pointer.x - cx, this.pointer.y - cy);
          if (inBox) {
            candidate = true;
            score = d;
          }
        }
        if (!candidate && this.raycaster.intersectObject(hotspot.object, true).length > 0) {
          candidate = true;
          score = 0.5; // pad-only hit: acceptable but yields to a boxed hit
        }
        if (candidate && score < bestGenerousDist) {
          bestGenerousDist = score;
          bestGenerous = hotspot;
        }
      } else {
        const hits = this.raycaster.intersectObject(hotspot.object, true);
        for (const hit of hits) {
          if (!this.isOpaqueHit(hit)) continue;
          if (hit.distance < bestPreciseDist) {
            bestPreciseDist = hit.distance;
            bestPrecise = hotspot;
          }
          break; // hits are sorted near→far; first accepted one is this hotspot's best
        }
      }
    }

    // Prefer a precise, painted-pixel hit; otherwise the closest generous piece.
    return bestPrecise ?? bestGenerous;
  }

  /**
   * Project a target's drawn artwork (its cutout meshes, ignoring the invisible
   * hit pad and shadow) into normalised screen space and store the enclosing
   * box in `this.screenBox`. Returns false if the target has no art meshes.
   */
  private artScreenBox(object: THREE.Object3D): boolean {
    let found = false;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    object.traverse((child) => {
      const mesh = child as THREE.Mesh;
      // Only the cutout art meshes carry a `render` hook; pads/shadows don't.
      if (!mesh.isMesh || !mesh.userData.render || !mesh.geometry) return;
      const geo = mesh.geometry as THREE.BufferGeometry;
      if (!geo.boundingBox) geo.computeBoundingBox();
      const bb = geo.boundingBox;
      if (!bb) return;
      mesh.updateWorldMatrix(true, false);
      for (let xi = 0; xi < 2; xi++) {
        for (let yi = 0; yi < 2; yi++) {
          this.corner.set(
            xi ? bb.max.x : bb.min.x,
            yi ? bb.max.y : bb.min.y,
            bb.min.z
          );
          this.corner.applyMatrix4(mesh.matrixWorld).project(this.camera);
          minX = Math.min(minX, this.corner.x);
          minY = Math.min(minY, this.corner.y);
          maxX = Math.max(maxX, this.corner.x);
          maxY = Math.max(maxY, this.corner.y);
          found = true;
        }
      }
    });

    if (!found) return false;
    this.screenBox.minX = minX;
    this.screenBox.minY = minY;
    this.screenBox.maxX = maxX;
    this.screenBox.maxY = maxY;
    return true;
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
