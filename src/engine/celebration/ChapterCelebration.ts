import * as THREE from "three";
import type { Popup } from "../Popup.ts";
import { CelebrationParticles } from "./CelebrationParticles.ts";

const DURATION = 4;
const RAINBOW = ["#e96776", "#f7ac58", "#ffe276", "#82cc91", "#7bcbed", "#a28cdd", "#e8a1cf"];

/** Owns a short chapter finale and restores the heroine before teardown. */
export class ChapterCelebration {
  private group: THREE.Group | null = null;
  private readonly rings: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>[] = [];
  private ringGeometry: THREE.RingGeometry | null = null;
  private readonly particles: CelebrationParticles[] = [];
  private heroine: Popup | undefined;
  private heroineBaseY = 0;
  private elapsed = 0;

  constructor(private readonly root: THREE.Group, private readonly reducedMotion = false) {}

  start(camera: THREE.Camera, heroine?: Popup): void {
    this.dispose();
    this.elapsed = 0;
    this.heroine = heroine;
    this.heroineBaseY = heroine?.root.position.y ?? 0;
    this.group = new THREE.Group();
    this.group.name = "chapter-celebration";
    this.root.add(this.group);
    this.root.updateWorldMatrix(true, true);
    camera.updateWorldMatrix(true, false);
    this.createRing(camera, heroine);
    if (!this.reducedMotion) this.createBurst(camera);
  }

  update(dt: number): void {
    if (!this.group) return;
    const step = Math.max(0, dt);
    this.elapsed += step;
    if (this.elapsed >= DURATION) {
      this.dispose();
      return;
    }
    for (const particles of this.particles) particles.update(step, this.elapsed);
    this.updateRing();
    this.updateHeroine();
  }

  dispose(): void {
    if (this.heroine) this.heroine.root.position.y = this.heroineBaseY;
    this.heroine = undefined;
    for (const particles of this.particles) particles.dispose();
    this.particles.length = 0;
    for (const ring of this.rings) ring.material.dispose();
    this.rings.length = 0;
    this.ringGeometry?.dispose();
    this.ringGeometry = null;
    this.group?.removeFromParent();
    this.group = null;
  }

  private createBurst(camera: THREE.Camera): void {
    const burst = new THREE.Group();
    const worldPosition = new THREE.Vector3(0, -0.2, -4).applyMatrix4(camera.matrixWorld);
    burst.position.copy(this.root.worldToLocal(worldPosition));
    const rootRotation = this.root.getWorldQuaternion(new THREE.Quaternion());
    const cameraRotation = camera.getWorldQuaternion(new THREE.Quaternion());
    burst.quaternion.copy(rootRotation.invert()).multiply(cameraRotation);
    this.group!.add(burst);
    const perspective = camera as THREE.PerspectiveCamera;
    const halfHeight = perspective.isPerspectiveCamera
      ? Math.tan(THREE.MathUtils.degToRad(perspective.fov) / 2) * 4
      : 2.5;
    const halfWidth = halfHeight * (perspective.isPerspectiveCamera ? perspective.aspect : 1.6);
    for (const [kind, count] of [["paper", 140], ["star", 60]] as const) {
      const particles = new CelebrationParticles(kind, count, halfWidth, halfHeight);
      this.particles.push(particles);
      burst.add(particles.points);
    }
  }

  private createRing(camera: THREE.Camera, heroine?: Popup): void {
    const geometry = new THREE.RingGeometry(0.65, 1, 64, 7);
    this.ringGeometry = geometry;
    const positions = geometry.getAttribute("position");
    const colors = new Float32Array(positions.count * 3);
    for (let index = 0; index < positions.count; index++) {
      const radius = Math.hypot(positions.getX(index), positions.getY(index));
      const band = Math.min(RAINBOW.length - 1, Math.floor((radius - 0.65) / 0.35 * RAINBOW.length));
      const color = new THREE.Color(RAINBOW[Math.max(0, band)]);
      colors.set([color.r, color.g, color.b], index * 3);
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      fog: false
    });
    const centre = heroine
      ? heroine.root.getWorldPosition(new THREE.Vector3())
      : new THREE.Vector3(0, -1.4, -4).applyMatrix4(camera.matrixWorld);
    this.root.worldToLocal(centre);
    for (let index = 0; index < (this.reducedMotion ? 1 : 2); index++) {
      const ring = new THREE.Mesh(geometry, index === 0 ? material : material.clone());
      ring.position.set(centre.x, 0.045 + index * 0.002, centre.z);
      ring.rotation.x = -Math.PI / 2;
      ring.renderOrder = 4;
      this.rings.push(ring);
      this.group!.add(ring);
    }
    this.updateRing();
  }

  private updateRing(): void {
    for (const [index, ring] of this.rings.entries()) {
      if (this.reducedMotion) {
        ring.scale.setScalar(1.8);
        ring.material.opacity = Math.sin(Math.PI * Math.min(1, this.elapsed / DURATION)) * 0.38;
        continue;
      }
      const age = Math.max(0, this.elapsed - index * 0.75);
      const progress = Math.min(1, age / 3.2);
      const expansion = 1 - Math.pow(1 - progress, 3);
      ring.scale.setScalar(0.4 + expansion * 6.7);
      const reveal = THREE.MathUtils.smoothstep(age, 0, 0.35);
      ring.material.opacity = reveal * (1 - THREE.MathUtils.smoothstep(age, 1.5, 3.3)) * 0.65;
    }
  }

  private updateHeroine(): void {
    if (!this.heroine || this.reducedMotion) return;
    const decay = 1 - THREE.MathUtils.smoothstep(this.elapsed, 1, 3.1);
    const hop = Math.pow(Math.sin(this.elapsed * Math.PI * 1.2), 2);
    this.heroine.root.position.y = this.heroineBaseY + hop * decay * 0.32;
  }
}
