import * as THREE from "three";
import { surpriseKind, surpriseRecipe } from "./SurpriseRecipes.ts";
import { surprisePose } from "./SurpriseMotion.ts";
import { SurprisePool } from "./SurprisePool.ts";
import type { SurpriseSlot } from "./SurprisePool.ts";
import { SurpriseTextures } from "./SurpriseTextures.ts";
import type { SurpriseKind, SurpriseParticle } from "./SurpriseTypes.ts";

export const SURPRISE_EFFECT_LIMIT = 4;

interface ActiveSurprise {
  born: number;
  duration: number;
  origin: THREE.Vector3;
  surfaceY: number;
  right: THREE.Vector3;
  up: THREE.Vector3;
  pieces: Array<{ particle: SurpriseParticle; slot: SurpriseSlot }>;
}

/** Owns bounded, sound-free responses to scenery exploration and empty-space taps. */
export class PaperSurprises {
  private readonly textures = new SurpriseTextures();
  private readonly pool: SurprisePool;
  private readonly active: ActiveSurprise[] = [];
  private readonly point = new THREE.Vector3();
  private readonly reducedMotion = typeof window !== "undefined" &&
    typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  private elapsed = 0;
  private disposed = false;

  constructor(private readonly root: THREE.Group, private readonly camera: THREE.Camera) {
    this.pool = new SurprisePool(root, this.textures);
  }

  trigger(kind: string, object: THREE.Object3D): void {
    if (this.disposed) return;
    object.updateWorldMatrix(true, true);
    const bounds = new THREE.Box3().setFromObject(object, true);
    const position = bounds.isEmpty()
      ? object.getWorldPosition(new THREE.Vector3())
      : bounds.getCenter(new THREE.Vector3());
    const surfaceY = surpriseKind(kind) === "fish" ? position.y + 0.023 : this.groundY();
    this.spawn(kind, position, surfaceY);
  }

  /** Every tap gets feedback, recycling the oldest burst if the little pool is full. */
  triggerAt(kind: string, position: THREE.Vector3): void {
    const surfaceY = surpriseKind(kind) === "fish" ? position.y + 0.035 : this.groundY();
    this.spawn(kind, position, surfaceY);
  }

  private spawn(kind: string, position: THREE.Vector3, surfaceY: number): void {
    if (this.disposed || !Number.isFinite(position.x + position.y + position.z)) return;
    const resolvedKind = surpriseKind(kind);
    const recipe = surpriseRecipe(resolvedKind, this.reducedMotion);
    while (this.active.length >= SURPRISE_EFFECT_LIMIT || this.pool.available < recipe.length) {
      const oldest = this.active.shift();
      if (!oldest) break;
      this.release(oldest);
    }
    this.camera.updateWorldMatrix(true, false);
    const rotation = this.camera.getWorldQuaternion(new THREE.Quaternion());
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(rotation);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(rotation);
    const origin = position.clone();
    // A fish visits beside the central frog, rather than jumping through it.
    if (resolvedKind === "fish") {
      origin.addScaledVector(right, 1.9);
      origin.y = surfaceY;
    }
    this.keepOnPage(origin, resolvedKind);
    const pieces: ActiveSurprise["pieces"] = [];
    for (const particle of recipe) {
      const slot = this.pool.acquire(particle.art);
      if (slot) pieces.push({ particle, slot });
    }
    const effect: ActiveSurprise = {
      born: this.elapsed,
      duration: Math.max(...recipe.map((particle) => particle.duration + (particle.delay ?? 0))),
      origin, surfaceY, right, up, pieces
    };
    this.active.push(effect);
    this.pool.faceCamera(this.camera);
    this.draw(effect, 0);
  }

  update(dt: number): void {
    if (this.disposed) return;
    this.elapsed += Math.max(0, dt);
    this.pool.faceCamera(this.camera);
    for (let index = this.active.length - 1; index >= 0; index--) {
      const effect = this.active[index];
      const age = this.elapsed - effect.born;
      if (age >= effect.duration) {
        this.release(effect);
        this.active.splice(index, 1);
      } else this.draw(effect, age);
    }
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const effect of this.active) this.release(effect);
    this.active.length = 0;
    this.pool.dispose();
    this.textures.dispose();
  }

  private draw(effect: ActiveSurprise, age: number): void {
    for (const { particle, slot } of effect.pieces) {
      const pose = surprisePose(particle, age, this.reducedMotion);
      if (!pose) {
        slot.mesh.visible = false;
        continue;
      }
      this.point.copy(effect.origin).addScaledVector(effect.right, pose.x).addScaledVector(effect.up, pose.y);
      const horizontal = particle.art === "ripple";
      if (horizontal) this.point.y = effect.surfaceY;
      this.pool.show(slot, this.point, particle.width * pose.scaleX, particle.height * pose.scaleY, pose.angle, pose.opacity, horizontal);
    }
  }

  private release(effect: ActiveSurprise): void {
    for (const { slot } of effect.pieces) this.pool.release(slot);
  }

  private keepOnPage(position: THREE.Vector3, kind: SurpriseKind): void {
    const waterY = position.y;
    this.point.copy(position).project(this.camera);
    if (this.point.z < -1 || this.point.z > 1 || !Number.isFinite(this.point.x + this.point.y)) {
      this.camera.getWorldDirection(this.point);
      position.copy(this.camera.getWorldPosition(new THREE.Vector3())).addScaledVector(this.point, 4);
      return;
    }
    // Small mistap stars stay close to the finger, even near the page edges.
    // Larger visitors need room for their whole hop or friendly flight.
    const horizontalLimit = kind === "stars" ? 0.9 : 0.68;
    this.point.x = THREE.MathUtils.clamp(this.point.x, -horizontalLimit, horizontalLimit);
    if (kind !== "fish") {
      this.point.y = THREE.MathUtils.clamp(this.point.y, kind === "stars" ? -0.85 : -0.48, kind === "stars" ? 0.85 : 0.55);
      // Keep both foreground visitors and distant mistap stars at a friendly
      // screen size without moving the projected centre. Water stays physical.
      const minimumDepth = new THREE.Vector3(0, 0, -3).applyMatrix4(this.camera.projectionMatrix).z;
      const maximumDepth = new THREE.Vector3(0, 0, -6).applyMatrix4(this.camera.projectionMatrix).z;
      this.point.z = THREE.MathUtils.clamp(this.point.z, minimumDepth, maximumDepth);
    }
    position.copy(this.point.unproject(this.camera));
    if (kind === "fish") position.y = waterY;
  }

  private groundY(): number {
    return this.root.getWorldPosition(new THREE.Vector3()).y + 0.035;
  }
}
