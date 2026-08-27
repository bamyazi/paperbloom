import * as THREE from "three";
import { Easing, easeOutBack, clamp } from "./Easing.ts";

export interface HingeSpec {
  /** The paper cutout to animate. */
  mesh: THREE.Mesh;
  /** Pivot location, local to the popup root (the fold line). */
  position: THREE.Vector3;
  /** Where the mesh centre sits relative to the pivot. */
  meshOffset?: THREE.Vector3;
  /** Axis the hinge rotates about. Default "x" (folds up from the page). */
  axis?: "x" | "y" | "z";
  /** Yaw of the whole hinge about Y, so a piece can face a direction. */
  yaw?: number;
  /** Angle (radians) while folded/at rest. Default -90°. */
  from?: number;
  /** Angle (radians) when fully open. Default 0°. */
  to?: number;
  /** Seconds to wait after the popup opens before this hinge animates. */
  delay?: number;
  /** Seconds this hinge takes to unfold. */
  duration?: number;
  easing?: Easing;  /** Redraw this part every frame (with elapsed time) for animated art. */
  animated?: boolean;}

interface Hinge {
  pivot: THREE.Group;
  mesh: THREE.Mesh;
  axis: "x" | "y" | "z";
  from: number;
  to: number;
  delay: number;
  duration: number;
  easing: Easing;
  animated: boolean;
}

/**
 * A multi-stage pop-up. Each `addHinge` adds one paper cutout on its own fold
 * line with an independent delay, so a piece can bloom in stages — a tree
 * trunk springs up first, then its branches swing out, then the canopy unfolds
 * on top.
 *
 * The whole assembly stays *invisible* until `open()` is called, which avoids
 * flat cutouts z-fighting the page while they wait folded-down.
 */
export class Popup {
  readonly root = new THREE.Group();

  /** Approximate half-width in X, used by the camera-corridor guard. */
  footprintRadius = 0.5;

  /** The colour this piece takes when the world blooms at the scene's end. */
  naturalColor: string | null = null;

  /** Idle sway (radians) applied to the whole piece once it has opened. */
  private idleAmplitude = 0.02;
  private idleFrequency = 0.8;
  private readonly idlePhase = Math.random() * Math.PI * 2;

  private readonly hinges: Hinge[] = [];
  private opening = false;
  private opened = false;
  private colored = false;
  private currentColor: string | null = null;
  private elapsed = 0;
  private clock = 0;
  private sinceOpen = 0;
  private pulse = 0;
  private animAccum = 0;

  // A gentle grow/shrink pulse to flag a tappable target to a small child.
  private highlighted = false;
  private highlightClock = 0;

  // A smooth colour bloom (0 = mono, 1 = fully coloured), used by colorizeFade.
  private fading = false;
  private fadeElapsed = 0;
  private fadeDelay = 0;
  private fadeDuration = 0.8;
  private mix = 1;

  constructor() {
    this.root.visible = false;
  }

  /**
   * Configure the idle sway. A per-instance random phase (plus whatever
   * frequency the caller picks) keeps neighbouring pieces from moving in
   * lockstep.
   */
  setIdle(amplitude: number, frequency: number): this {
    this.idleAmplitude = amplitude;
    this.idleFrequency = frequency;
    return this;
  }

  addHinge(spec: HingeSpec): this {
    const pivot = new THREE.Group();
    pivot.position.copy(spec.position);
    pivot.rotation.y = spec.yaw ?? 0;

    const axis = spec.axis ?? "x";
    const from = spec.from ?? -Math.PI / 2;
    const to = spec.to ?? 0;
    pivot.rotation[axis] = from;

    spec.mesh.position.copy(spec.meshOffset ?? new THREE.Vector3(0, 0, 0));
    pivot.add(spec.mesh);
    this.root.add(pivot);

    this.hinges.push({
      pivot,
      mesh: spec.mesh,
      axis,
      from,
      to,
      delay: spec.delay ?? 0,
      duration: spec.duration ?? 1.0,
      easing: spec.easing ?? easeOutBack,
      animated: spec.animated ?? false
    });
    return this;
  }

  /** Begin the staged unfold and make the piece visible. */
  open(): void {
    if (this.opened || this.opening) return;
    this.opening = true;
    this.root.visible = true;
  }

  /** Snap instantly to the fully open state. */
  snapOpen(): void {
    this.opening = false;
    this.opened = true;
    this.root.visible = true;
    for (const hinge of this.hinges) {
      hinge.pivot.rotation[hinge.axis] = hinge.to;
    }
  }

  get isOpen(): boolean {
    return this.opened;
  }

  get isColored(): boolean {
    return this.colored;
  }

  /**
   * Fill every part of the piece with `color` (each part's `draw` decides how
   * the colour is applied) and give a little celebratory pop. Idempotent.
   */
  colorize(color: string): void {
    if (this.colored) return;
    this.colored = true;
    this.highlighted = false;
    this.currentColor = color;
    for (const hinge of this.hinges) {
      hinge.mesh.scale.setScalar(1);
      const render = hinge.mesh.userData.render as
        | ((c: string | null, t: number) => void)
        | undefined;
      render?.(color, this.clock);
    }
    this.pulse = 0.0001;
  }

  /**
   * Colour the piece in with a smooth fade rather than an instant swap — the
   * coloured art blooms up over the mono art over `duration` seconds, after an
   * optional `delay`. Used to wash the whole scene into colour at a chapter's
   * end. Idempotent; a no-op once coloured.
   */
  colorizeFade(color: string, duration = 0.8, delay = 0): void {
    if (this.colored || this.fading) return;
    this.currentColor = color;
    this.fading = true;
    this.fadeElapsed = 0;
    this.fadeDelay = delay;
    this.fadeDuration = Math.max(0.001, duration);
    this.mix = 0;
  }

  /**
   * Flag this piece as a tappable target so it gently pulses (grows and
   * shrinks) to catch a small child's eye. Turning it off resets its size.
   */
  setHighlighted(on: boolean): void {
    this.highlighted = on;
    if (!on) {
      for (const hinge of this.hinges) hinge.mesh.scale.setScalar(1);
    }
  }

  /**
   * Add a big invisible pad around each part so taps anywhere *near* the piece
   * count — a very forgiving hit area for small children. Only meant for
   * colouring targets.
   */
  enlargeHitArea(): void {
    for (const hinge of this.hinges) {
      const geo = hinge.mesh.geometry as THREE.PlaneGeometry;
      const gw = geo.parameters?.width ?? 1;
      const gh = geo.parameters?.height ?? 1;
      // A generous invisible sphere around the art, so a tap from any direction
      // that passes near the piece counts — not just one that lands on its flat
      // face.
      const radius = Math.max(gw, gh) * 0.95 + 0.7;
      const pad = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 12, 8),
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false,
          depthTest: false
        })
      );
      pad.renderOrder = -1;
      hinge.mesh.add(pad);
    }
  }

  update(dt: number): void {
    this.clock += dt;

    if (this.opening) {
      this.elapsed += dt;
      let allDone = true;
      for (const hinge of this.hinges) {
        const local = clamp((this.elapsed - hinge.delay) / hinge.duration, 0, 1);
        hinge.pivot.rotation[hinge.axis] = THREE.MathUtils.lerp(
          hinge.from,
          hinge.to,
          hinge.easing(local)
        );
        if (local < 1) allDone = false;
      }
      if (allDone) {
        this.opening = false;
        this.opened = true;
      }
    }

    // Idle sway, ramped in gently so it doesn't snap on when the fold ends.
    if (this.opening || this.opened) {
      this.sinceOpen += dt;
      const ramp = clamp(this.sinceOpen / 0.8, 0, 1);
      this.root.rotation.z =
        Math.sin(this.clock * this.idleFrequency + this.idlePhase) *
        this.idleAmplitude *
        ramp;
    }

    // A quick scale "pop" when the piece is coloured in.
    if (this.pulse > 0) {
      this.pulse += dt;
      const t = this.pulse / 0.35;
      if (t >= 1) {
        this.pulse = 0;
        this.root.scale.setScalar(1);
      } else {
        this.root.scale.setScalar(1 + Math.sin(t * Math.PI) * 0.14);
      }
    }

    // Gentle grow/shrink pulse on an uncoloured target, to draw a child's eye.
    if (this.highlighted && !this.colored && this.opened) {
      this.highlightClock += dt;
      const s = 1 + Math.sin(this.highlightClock * 2.8) * 0.1;
      for (const hinge of this.hinges) hinge.mesh.scale.setScalar(s);
    }

    // Smooth colour bloom: ramp `mix` and redraw each part, cross-fading the
    // coloured art up over the mono art.
    if (this.fading) {
      this.fadeElapsed += dt;
      const local = clamp((this.fadeElapsed - this.fadeDelay) / this.fadeDuration, 0, 1);
      this.mix = local;
      if (this.fadeElapsed >= this.fadeDelay && this.currentColor) {
        for (const hinge of this.hinges) {
          const render = hinge.mesh.userData.render as
            | ((c: string | null, t: number, mix: number) => void)
            | undefined;
          render?.(this.currentColor, this.clock, this.mix);
        }
      }
      if (local >= 1) {
        this.fading = false;
        this.colored = true;
        this.pulse = 0.0001;
      }
    }

    // Per-frame redraw for animated cutouts (e.g. flowing hair), throttled.
    if (this.opened) {
      this.animAccum += dt;
      if (this.animAccum >= 0.04) {
        this.animAccum = 0;
        for (const hinge of this.hinges) {
          if (!hinge.animated) continue;
          const render = hinge.mesh.userData.render as
            | ((c: string | null, t: number, mix: number) => void)
            | undefined;
          render?.(this.currentColor, this.clock, this.fading ? this.mix : 1);
        }
      }
    }
  }
}
