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
  // Scratch vectors reused when projecting a target into screen space.
  private readonly tmpA = new THREE.Vector3();
  private readonly tmpB = new THREE.Vector3();
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

    // Generous pieces (colouring targets) use a screen-space test tied to how
    // they're drawn: project the piece's centre and use its on-screen size as a
    // forgiving catch radius. This maps the tap zone straight onto the visible
    // artwork at any size — no invisible pad floating above it, and it can't
    // miss a big character. Precise pieces still need a painted, opaque pixel.
    let bestPrecise: Hotspot | null = null;
    let bestPreciseDist = Infinity;
    let bestGenerous: Hotspot | null = null;
    let bestGenerousScore = Infinity;

    for (const hotspot of this.hotspots) {
      if (hotspot.generous) {
        const score = this.generousScore(hotspot.object);
        if (score !== null && score < bestGenerousScore) {
          bestGenerousScore = score;
          bestGenerous = hotspot;
        }
      } else {
        const hits = this.raycaster.intersectObject(hotspot.object, true);
        for (const hit of hits) {
          if (!(hit.object as THREE.Mesh).userData.render) continue;
          if (!this.isOpaqueHit(hit)) continue;
          if (hit.distance < bestPreciseDist) {
            bestPreciseDist = hit.distance;
            bestPrecise = hotspot;
          }
          break;
        }
      }
    }

    // Prefer a precise, painted-pixel hit; otherwise the closest generous piece.
    return bestPrecise ?? bestGenerous;
  }

  /**
   * How well a tap targets a generous piece: 0 = dead centre, 1 = on its edge,
   * null = outside its (forgiving) catch radius. Uses the piece's projected
   * centre and its on-screen size, so the zone matches the drawn artwork.
   */
  private generousScore(object: THREE.Object3D): number | null {
    let found = false;
    let centreX = 0;
    let centreY = 0;
    let radius = 0;

    object.traverse((child) => {
      const mesh = child as THREE.Mesh;
      // Only the drawn cutout meshes carry a `render` hook (not pad/shadow).
      if (!mesh.isMesh || !mesh.userData.render || !mesh.geometry) return;
      mesh.updateWorldMatrix(true, false);

      // Plane centre (its local origin) → screen; that is the visible centre.
      this.tmpA.setFromMatrixPosition(mesh.matrixWorld);
      this.tmpB.copy(this.tmpA);
      this.tmpA.project(this.camera);

      // Offset by the piece's larger half-extent to gauge its on-screen size.
      const params = (mesh.geometry as THREE.PlaneGeometry).parameters;
      const half = Math.max(params?.width ?? 1, params?.height ?? 1) / 2;
      this.tmpB.y += half;
      this.tmpB.project(this.camera);
      const r = Math.hypot(this.tmpA.x - this.tmpB.x, this.tmpA.y - this.tmpB.y);

      if (!found) {
        centreX = this.tmpA.x;
        centreY = this.tmpA.y;
        found = true;
      }
      radius = Math.max(radius, r);
    });

    if (!found) return null;
    const d = Math.hypot(this.pointer.x - centreX, this.pointer.y - centreY);
    const catchRadius = radius * 1.15 + 0.03; // a little slack for small pieces
    return d <= catchRadius ? d / catchRadius : null;
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
