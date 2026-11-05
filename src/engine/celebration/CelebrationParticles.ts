import * as THREE from "three";

export type CelebrationParticleKind = "paper" | "star";

const COLORS = ["#f16767", "#ffb34e", "#f9df63", "#7cc77f", "#6fc9ed", "#9c85df", "#e88ac6"];

/** One draw call and one owned texture for a whole burst of paper or stars. */
export class CelebrationParticles {
  readonly points: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  private readonly velocities: Float32Array;
  private readonly positions: Float32Array;
  private readonly origins: Float32Array;
  private readonly births: Float32Array;
  private disposed = false;

  constructor(private readonly kind: CelebrationParticleKind, count: number, halfWidth = 3, halfHeight = 2) {
    this.positions = new Float32Array(count * 3);
    this.origins = new Float32Array(count * 3);
    this.velocities = new Float32Array(count * 3);
    this.births = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    for (let index = 0; index < count; index++) {
      const offset = index * 3;
      this.positions[offset] = (Math.random() - 0.5) * halfWidth * 1.5;
      this.positions[offset + 1] = -halfHeight * (0.55 + Math.random() * 0.2);
      this.positions[offset + 2] = (Math.random() - 0.5) * 0.5;
      this.velocities[offset] = (Math.random() - 0.5) * 1.4;
      this.velocities[offset + 1] = halfHeight * (0.55 + Math.random() * 0.45);
      this.velocities[offset + 2] = (Math.random() - 0.5) * 0.12;
      this.births[index] = index / count + (kind === "star" ? 0.08 : 0);
      const color = new THREE.Color(kind === "star" ? "#fff0ab" : COLORS[index % COLORS.length]);
      colors.set([color.r, color.g, color.b], offset);
    }
    this.origins.set(this.positions);

    const geometry = new THREE.BufferGeometry();
    geometry.setDrawRange(0, 0);
    geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      map: this.createTexture(),
      size: kind === "paper" ? 0.2 : 0.32,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      fog: false,
      blending: kind === "star" ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    this.points = new THREE.Points(geometry, material);
    this.points.frustumCulled = false;
    this.points.renderOrder = kind === "paper" ? 10 : 11;
  }

  update(_dt: number, elapsed: number): void {
    if (this.disposed) return;
    let active = 0;
    for (let index = 0; index < this.births.length; index++) {
      const age = elapsed - this.births[index];
      if (age < 0) break;
      const offset = index * 3;
      const phase = index * 2.4;
      // Integrate drag and gravity analytically: dropped frames never change
      // the trajectory, and flutter remains a gentle bounded displacement.
      const drift = (1 - Math.exp(-0.65 * age)) / 0.65;
      const flutter = (Math.sin(age * 4 + phase) - Math.sin(phase)) * 0.12;
      const gravity = this.kind === "paper" ? 0.65 : 0.45;
      this.positions[offset] = this.origins[offset] + this.velocities[offset] * drift + flutter;
      this.positions[offset + 1] = this.origins[offset + 1] + this.velocities[offset + 1] * age - gravity * age * age / 2;
      this.positions[offset + 2] = this.origins[offset + 2] + this.velocities[offset + 2] * age;
      active++;
    }
    this.points.geometry.setDrawRange(0, active);
    this.points.geometry.getAttribute("position").needsUpdate = true;
    const fade = 1 - THREE.MathUtils.smoothstep(elapsed, 2.5, 4);
    const shimmer = this.kind === "star" ? 0.9 + Math.sin(elapsed * 7) * 0.1 : 1;
    this.points.material.opacity = fade * shimmer;
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.points.removeFromParent();
    this.points.geometry.dispose();
    this.points.material.map?.dispose();
    this.points.material.dispose();
  }

  private createTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const context = canvas.getContext("2d")!;
    if (this.kind === "star") this.drawStar(context);
    else this.drawPaper(context);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  private drawPaper(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(19, 8);
    context.lineTo(49, 19);
    context.lineTo(42, 56);
    context.lineTo(13, 44);
    context.closePath();
    context.fillStyle = "#fffdf4";
    context.fill();
    context.strokeStyle = "#8c8270";
    context.lineWidth = 2;
    context.stroke();
  }

  private drawStar(context: CanvasRenderingContext2D): void {
    const glow = context.createRadialGradient(32, 32, 3, 32, 32, 32);
    glow.addColorStop(0, "rgba(255,255,255,0.6)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 64, 64);
    context.beginPath();
    for (let point = 0; point < 10; point++) {
      const angle = -Math.PI / 2 + point * Math.PI / 5;
      const radius = point % 2 === 0 ? 24 : 10;
      const x = 32 + Math.cos(angle) * radius;
      const y = 32 + Math.sin(angle) * radius;
      if (point === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();
  }
}
