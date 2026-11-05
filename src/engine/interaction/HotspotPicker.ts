import * as THREE from "three";
import type { Hotspot, ScreenPoint, ViewportSize } from "./Hotspot.ts";

interface ScreenBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

interface PaddedHit {
  hotspot: Hotspot;
  edgeDistance: number;
  centerDistance: number;
}

/** Resolves visible cutouts in CSS pixels, independently of renderer resolution. */
export class HotspotPicker {
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly alphaContexts = new WeakMap<HTMLCanvasElement, CanvasRenderingContext2D | null>();

  constructor(private readonly camera: THREE.Camera) {}

  pick(
    hotspots: readonly Hotspot[],
    point: ScreenPoint,
    viewport: ViewportSize,
    padding = 18
  ): Hotspot | null {
    if (viewport.width <= 0 || viewport.height <= 0) return null;
    if (point.x < 0 || point.y < 0 || point.x > viewport.width || point.y > viewport.height) {
      return null;
    }

    // Input can arrive after a resize or scene change, before the next render.
    this.camera.updateWorldMatrix(true, false);
    this.pointer.set(point.x / viewport.width * 2 - 1, 1 - point.y / viewport.height * 2);
    this.raycaster.setFromCamera(this.pointer, this.camera);

    let painted: Hotspot | null = null;
    let paintedDistance = Infinity;
    let padded: PaddedHit | null = null;

    for (const hotspot of hotspots) {
      if (!this.isVisible(hotspot.object)) continue;
      const meshes = this.artMeshes(hotspot.object);

      // Always prefer the artwork under the finger to a neighbour's padding.
      for (const hit of this.raycaster.intersectObjects(meshes, false)) {
        const depth = hit.point.clone().project(this.camera).z;
        if (depth < -1 || depth > 1 || hit.distance >= paintedDistance || !this.isPainted(hit)) continue;
        painted = hotspot;
        paintedDistance = hit.distance;
      }

      if (!hotspot.generous) continue;
      for (const mesh of meshes) {
        const bounds = this.screenBounds(mesh, viewport);
        if (!bounds) continue;
        const candidate = this.paddedHit(hotspot, bounds, point, padding);
        if (candidate && (!padded || this.isCloser(candidate, padded))) padded = candidate;
      }
    }

    return painted ?? padded?.hotspot ?? null;
  }

  private isVisible(object: THREE.Object3D): boolean {
    for (let current: THREE.Object3D | null = object; current; current = current.parent) {
      if (!current.visible) return false;
    }
    return true;
  }

  private artMeshes(object: THREE.Object3D): THREE.Mesh[] {
    const meshes: THREE.Mesh[] = [];
    object.updateWorldMatrix(true, true);
    object.traverseVisible((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || !mesh.userData.render) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      if (materials.some((material) => material.visible)) meshes.push(mesh);
    });
    return meshes;
  }

  private screenBounds(mesh: THREE.Mesh, viewport: ViewportSize): ScreenBounds | null {
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox;
    if (!box) return null;
    const bounds: ScreenBounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };

    for (const [x, y] of [
      [box.min.x, box.min.y], [box.max.x, box.min.y],
      [box.max.x, box.max.y], [box.min.x, box.max.y]
    ]) {
      const point = new THREE.Vector3(x, y, box.min.z).applyMatrix4(mesh.matrixWorld).project(this.camera);
      // A folded piece crossing the near plane must not create a huge hit area.
      if (point.z < -1 || point.z > 1 || !Number.isFinite(point.x + point.y)) return null;
      const screenX = (point.x + 1) * viewport.width / 2;
      const screenY = (1 - point.y) * viewport.height / 2;
      bounds.minX = Math.min(bounds.minX, screenX);
      bounds.maxX = Math.max(bounds.maxX, screenX);
      bounds.minY = Math.min(bounds.minY, screenY);
      bounds.maxY = Math.max(bounds.maxY, screenY);
    }

    if (bounds.maxX < 0 || bounds.maxY < 0 || bounds.minX > viewport.width || bounds.minY > viewport.height) {
      return null;
    }
    return bounds;
  }

  private paddedHit(hotspot: Hotspot, bounds: ScreenBounds, point: ScreenPoint, padding: number): PaddedHit | null {
    const dx = Math.max(bounds.minX - point.x, 0, point.x - bounds.maxX);
    const dy = Math.max(bounds.minY - point.y, 0, point.y - bounds.maxY);
    const edgeDistance = Math.hypot(dx, dy);
    if (edgeDistance > padding) return null;
    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;
    return { hotspot, edgeDistance, centerDistance: Math.hypot(point.x - centerX, point.y - centerY) };
  }

  private isCloser(candidate: PaddedHit, previous: PaddedHit): boolean {
    return candidate.edgeDistance < previous.edgeDistance ||
      (candidate.edgeDistance === previous.edgeDistance && candidate.centerDistance < previous.centerDistance);
  }

  private isPainted(hit: THREE.Intersection): boolean {
    const mesh = hit.object as THREE.Mesh;
    const material = mesh.material as THREE.MeshBasicMaterial;
    const image = material.map?.image as HTMLCanvasElement | undefined;
    if (!hit.uv || !image || typeof image.getContext !== "function") return true;
    let context = this.alphaContexts.get(image);
    if (context === undefined) {
      context = image.getContext("2d", { willReadFrequently: true });
      this.alphaContexts.set(image, context);
    }
    if (!context) return true;
    const x = Math.min(image.width - 1, Math.max(0, Math.floor(hit.uv.x * image.width)));
    const y = Math.min(image.height - 1, Math.max(0, Math.floor((1 - hit.uv.y) * image.height)));
    return context.getImageData(x, y, 1, 1).data[3] > 32;
  }
}
