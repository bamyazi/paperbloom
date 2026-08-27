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
  // Optional on-screen tap diagnostics, enabled with `?debug` in the URL.
  private readonly debugEl: HTMLElement | null;
  private debugCanvas: HTMLCanvasElement | null = null;
  private lastTapPx: { x: number; y: number } | null = null;

  constructor(
    private readonly camera: THREE.Camera,
    private readonly domElement: HTMLElement
  ) {
    domElement.addEventListener("pointermove", this.handlePointerMove);
    domElement.addEventListener("pointerdown", this.handlePointerDown);
    domElement.addEventListener("pointerup", this.handlePointerUp);
    this.debugEl = this.createDebugOverlay();
  }

  private createDebugOverlay(): HTMLElement | null {
    if (typeof location === "undefined" || !new URLSearchParams(location.search).has("debug")) {
      return null;
    }
    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      zIndex: "199",
      pointerEvents: "none"
    } satisfies Partial<CSSStyleDeclaration>);
    document.body.appendChild(canvas);
    this.debugCanvas = canvas;

    const el = document.createElement("pre");
    Object.assign(el.style, {
      position: "fixed",
      left: "8px",
      top: "8px",
      zIndex: "200",
      margin: "0",
      padding: "8px 10px",
      maxWidth: "70vw",
      font: "12px/1.35 monospace",
      color: "#0a0",
      background: "rgba(255,255,255,0.85)",
      borderRadius: "6px",
      pointerEvents: "none",
      whiteSpace: "pre-wrap"
    } satisfies Partial<CSSStyleDeclaration>);
    el.textContent = "tap a piece…";
    document.body.appendChild(el);
    return el;
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
    if (this.debugCanvas) this.lastTapPx = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  private pick(): Hotspot | null {
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Generous pieces (colouring targets) use a screen-space test: project the
    // drawn cutout plane's corners to the screen (the same projection the game
    // renders with) and check the tap falls inside that box. This matches the
    // visible artwork exactly and sidesteps raycaster quirks (bounding-sphere /
    // face-culling early-outs) that made some pieces un-tappable. Precise pieces
    // still need a hit on a painted, opaque pixel.
    let bestPrecise: Hotspot | null = null;
    let bestPreciseDist = Infinity;
    let bestGenerous: Hotspot | null = null;
    let bestGenerousDist = Infinity;

    for (const hotspot of this.hotspots) {
      if (hotspot.generous) {
        let candidate = false;
        let score = Infinity;
        const box = this.projectedArtBox(hotspot.object);
        if (box) {
          const m = 0.03; // a little slack around the edges
          const inBox =
            this.pointer.x >= box.minX - m &&
            this.pointer.x <= box.maxX + m &&
            this.pointer.y >= box.minY - m &&
            this.pointer.y <= box.maxY + m;
          if (inBox) {
            const cx = (box.minX + box.maxX) / 2;
            const cy = (box.minY + box.maxY) / 2;
            candidate = true;
            score = Math.hypot(this.pointer.x - cx, this.pointer.y - cy);
          }
        }
        if (!candidate) {
          // Independent fallback: a real ray hit on the drawn plane or its pad.
          const hits = this.raycaster.intersectObject(hotspot.object, true);
          for (const hit of hits) {
            const ud = (hit.object as THREE.Mesh).userData;
            if (ud.render || ud.hitPad) {
              candidate = true;
              score = 100; // worse than any in-box hit, better than nothing
              break;
            }
          }
        }
        if (candidate && score < bestGenerousDist) {
          bestGenerousDist = score;
          bestGenerous = hotspot;
        }
        continue;
      }

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

    // Prefer a precise, painted-pixel hit; otherwise the closest generous piece.
    return bestPrecise ?? bestGenerous;
  }

  /**
   * Project a piece's drawn cutout plane(s) to normalised screen space and
   * return the enclosing box (NDC). Ignores the invisible pad and shadow.
   */
  private projectedArtBox(
    object: THREE.Object3D
  ): { minX: number; minY: number; maxX: number; maxY: number } | null {
    let found = false;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    object.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || !mesh.userData.render || !mesh.geometry) return;
      const geo = mesh.geometry as THREE.BufferGeometry;
      if (!geo.boundingBox) geo.computeBoundingBox();
      const bb = geo.boundingBox;
      if (!bb) return;
      mesh.updateWorldMatrix(true, false);
      for (const [x, y] of [
        [bb.min.x, bb.min.y],
        [bb.max.x, bb.min.y],
        [bb.max.x, bb.max.y],
        [bb.min.x, bb.max.y]
      ] as const) {
        const v = new THREE.Vector3(x, y, 0).applyMatrix4(mesh.matrixWorld).project(this.camera);
        minX = Math.min(minX, v.x);
        minY = Math.min(minY, v.y);
        maxX = Math.max(maxX, v.x);
        maxY = Math.max(maxY, v.y);
        found = true;
      }
    });

    return found ? { minX, minY, maxX, maxY } : null;
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
    if (this.debugEl) this.writeDebug(hit);
    if (hit) hit.onClick();
  };

  /** Report what the tap ray met for each registered piece (debug overlay). */
  private writeDebug(picked: Hotspot | null): void {
    if (!this.debugEl) return;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const lines: string[] = [
      `tap ${this.pointer.x.toFixed(2)},${this.pointer.y.toFixed(2)}  pieces:${this.hotspots.length}  picked:${picked ? "YES" : "no"}`
    ];
    this.hotspots.forEach((h, i) => {
      const hits = this.raycaster.intersectObject(h.object, true);
      const kinds = hits
        .map((ht) => {
          const ud = (ht.object as THREE.Mesh).userData;
          return ud.render ? "art" : ud.hitPad ? "pad" : "oth";
        })
        .join(",");
      lines.push(`#${i} gen:${h.generous ? 1 : 0} hits:${hits.length} [${kinds}]`);
    });
    this.debugEl.textContent = lines.join("\n");
    this.drawDebugMarkers();
  }

  /** Draw the tap point (red cross) and each piece's true 3D plane (green). */
  private drawDebugMarkers(): void {
    const canvas = this.debugCanvas;
    if (!canvas) return;
    const W = window.innerWidth;
    const H = window.innerHeight;
    if (canvas.width !== W) canvas.width = W;
    if (canvas.height !== H) canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);

    const toPx = (v: THREE.Vector3): [number, number] => {
      v.project(this.camera);
      return [(v.x * 0.5 + 0.5) * W, (-v.y * 0.5 + 0.5) * H];
    };

    for (const h of this.hotspots) {
      h.object.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (!mesh.isMesh || !mesh.geometry) return;

        if (mesh.userData.hitPad) {
          mesh.updateWorldMatrix(true, false);
          const centre = new THREE.Vector3().setFromMatrixPosition(mesh.matrixWorld);
          const [cxp, cyp] = toPx(centre.clone());
          const edge = centre.clone();
          const sphere = (mesh.geometry as THREE.SphereGeometry).parameters?.radius ?? 0.5;
          edge.x += sphere;
          const [exp] = toPx(edge);
          ctx.strokeStyle = "rgba(0,90,255,0.8)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cxp, cyp, Math.abs(exp - cxp), 0, Math.PI * 2);
          ctx.stroke();
          return;
        }

        if (!mesh.userData.render) return;
        const geo = mesh.geometry as THREE.BufferGeometry;
        if (!geo.boundingBox) geo.computeBoundingBox();
        const bb = geo.boundingBox;
        if (!bb) return;
        mesh.updateWorldMatrix(true, false);
        const pts: [number, number][] = [];
        for (const [x, y] of [[bb.min.x, bb.min.y], [bb.max.x, bb.min.y], [bb.max.x, bb.max.y], [bb.min.x, bb.max.y]] as const) {
          const v = new THREE.Vector3(x, y, 0).applyMatrix4(mesh.matrixWorld);
          pts.push(toPx(v));
        }
        ctx.strokeStyle = "rgba(0,180,0,0.9)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        pts.forEach(([px, py], k) => (k ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
        ctx.closePath();
        ctx.stroke();
      });
    }

    if (this.lastTapPx) {
      const { x, y } = this.lastTapPx;
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - 16, y);
      ctx.lineTo(x + 16, y);
      ctx.moveTo(x, y - 16);
      ctx.lineTo(x, y + 16);
      ctx.stroke();
    }
  }
}
