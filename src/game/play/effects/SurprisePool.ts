import * as THREE from "three";
import type { SurpriseArt } from "./SurpriseTypes.ts";
import { SurpriseTextures } from "./SurpriseTextures.ts";

export interface SurpriseSlot {
  readonly mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  inUse: boolean;
}

export const SURPRISE_PARTICLE_LIMIT = 32;

/** Fixed capacity, one shared geometry, and one independently fading material per slot. */
export class SurprisePool {
  readonly group = new THREE.Group();
  private readonly geometry = new THREE.PlaneGeometry(1, 1);
  private readonly slots: SurpriseSlot[] = [];
  private readonly viewRotation = new THREE.Quaternion();
  private readonly worldRotation = new THREE.Quaternion();
  private readonly groundRotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
  private disposed = false;

  constructor(root: THREE.Group, private readonly textures: SurpriseTextures) {
    this.group.name = "paper-surprises";
    root.add(this.group);
    for (let index = 0; index < SURPRISE_PARTICLE_LIMIT; index++) {
      const material = new THREE.MeshBasicMaterial({
        transparent: true, alphaTest: 0.05, side: THREE.DoubleSide,
        depthWrite: false, depthTest: false, fog: false
      });
      const mesh = new THREE.Mesh(this.geometry, material);
      mesh.visible = false;
      mesh.renderOrder = 15;
      mesh.userData.surprise = true;
      this.group.add(mesh);
      this.slots.push({ mesh, inUse: false });
    }
  }

  get available(): number {
    return this.slots.filter((slot) => !slot.inUse).length;
  }

  acquire(art: SurpriseArt): SurpriseSlot | null {
    const slot = this.slots.find((candidate) => !candidate.inUse);
    if (!slot) return null;
    slot.inUse = true;
    slot.mesh.material.map = this.textures.get(art);
    slot.mesh.material.needsUpdate = true;
    return slot;
  }

  release(slot: SurpriseSlot): void {
    slot.inUse = false;
    slot.mesh.visible = false;
  }

  faceCamera(camera: THREE.Camera): void {
    this.group.updateWorldMatrix(true, false);
    this.group.getWorldQuaternion(this.worldRotation).invert();
    camera.getWorldQuaternion(this.viewRotation);
    this.viewRotation.premultiply(this.worldRotation);
  }

  show(slot: SurpriseSlot, position: THREE.Vector3, width: number, height: number, angle: number, opacity: number, horizontal = false): void {
    const mesh = slot.mesh;
    mesh.position.copy(position);
    this.group.worldToLocal(mesh.position);
    if (horizontal) mesh.quaternion.copy(this.worldRotation).multiply(this.groundRotation);
    else mesh.quaternion.copy(this.viewRotation);
    mesh.rotateZ(angle);
    mesh.scale.set(width, height, 1);
    mesh.material.opacity = opacity;
    mesh.visible = true;
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const slot of this.slots) slot.mesh.material.dispose();
    this.geometry.dispose();
    this.group.clear();
    this.group.removeFromParent();
  }
}
