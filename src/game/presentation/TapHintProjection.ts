import * as THREE from "three";

export interface HintViewport {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface HintBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** Project visible cutout artwork to client CSS pixels, independent of canvas DPR. */
export function projectTapHintBounds(
  artwork: THREE.Object3D,
  camera: THREE.Camera,
  viewport: HintViewport
): HintBounds | null {
  if (viewport.width <= 0 || viewport.height <= 0) return null;
  for (let ancestor: THREE.Object3D | null = artwork; ancestor; ancestor = ancestor.parent) {
    if (!ancestor.visible) return null;
  }
  camera.updateWorldMatrix(true, false);
  artwork.updateWorldMatrix(true, true);
  const worldBounds = new THREE.Box3();
  const pieceBounds = new THREE.Box3();
  artwork.traverseVisible((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.userData.render) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (!materials.some((material) => material.visible)) return;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    if (mesh.geometry.boundingBox) {
      pieceBounds.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
      worldBounds.union(pieceBounds);
    }
  });
  if (worldBounds.isEmpty()) return null;

  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  const point = new THREE.Vector3();
  for (const x of [worldBounds.min.x, worldBounds.max.x]) {
    for (const y of [worldBounds.min.y, worldBounds.max.y]) {
      for (const z of [worldBounds.min.z, worldBounds.max.z]) {
        point.set(x, y, z).project(camera);
        // Near-plane crossings must not produce an enormous misleading halo.
        if (!Number.isFinite(point.x + point.y + point.z) || point.z < -1 || point.z > 1) return null;
        const clientX = viewport.left + (point.x + 1) * viewport.width / 2;
        const clientY = viewport.top + (1 - point.y) * viewport.height / 2;
        left = Math.min(left, clientX);
        right = Math.max(right, clientX);
        top = Math.min(top, clientY);
        bottom = Math.max(bottom, clientY);
      }
    }
  }
  if (right <= viewport.left || left >= viewport.left + viewport.width ||
      bottom <= viewport.top || top >= viewport.top + viewport.height) return null;
  return { left, top, width: right - left, height: bottom - top };
}
