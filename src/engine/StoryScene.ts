import * as THREE from "three";
import { CameraRig } from "./CameraRig.ts";
import { InteractionManager } from "./Interaction.ts";
import { Popup } from "./Popup.ts";
import { Hud } from "./Hud.ts";
import { Narrator } from "./Narrator.ts";
import { SoundEngine } from "./SoundEngine.ts";
// The heroine's hair-whirl on victory lives with her art; the scene triggers it.
import { startGirlCheer } from "../game/art/Figures.ts";

/** Shared services handed to every scene when it becomes active. */
export interface SceneContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  interaction: InteractionManager;
  hud: Hud;
  narrator: Narrator;
  sound: SoundEngine;
}

interface TriggeredPopup {
  popup: Popup;
  triggerTime: number;
  triggered: boolean;
}

/** Half-width of the clear lane the camera travels down the middle of a scene. */
const CORRIDOR_HALF_WIDTH = 0.9;

/** Fallback bloom colour for pieces that declare no natural colour of their own. */
const DEFAULT_BLOOM_COLOR = "#6f9c4a";

interface StarParticle {
  sprite: THREE.Sprite;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  spin: number;
  baseScale: number;
}

/** A little five-point golden star sprite for the victory shower. */
let starCanvas: HTMLCanvasElement | null = null;
function makeStarTexture(): THREE.CanvasTexture {
  if (!starCanvas) {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const c = size / 2;
    const glow = ctx.createRadialGradient(c, c, 2, c, c, c);
    glow.addColorStop(0, "rgba(255,240,170,0.9)");
    glow.addColorStop(1, "rgba(255,220,120,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(c, c, c, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 === 0 ? c * 0.82 : c * 0.34;
      const x = c + Math.cos(a) * r;
      const y = c + Math.sin(a) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "#ffd23f";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#e8a02a";
    ctx.stroke();
    starCanvas = canvas;
  }
  const texture = new THREE.CanvasTexture(starCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Base class for a chapter of the story. A scene owns a slice of the world
 * (its `root` group), a `CameraRig` describing how far the camera travels, and
 * a list of pop-ups that spring up as the camera reaches them.
 *
 * Subclasses implement `setup()` to build their artwork and register pop-ups
 * and hotspots. When the chapter is finished they call `complete()`.
 */
export abstract class StoryScene {
  readonly root = new THREE.Group();
  protected ctx!: SceneContext;
  protected rig!: CameraRig;

  /** Fired once when the scene decides the player may move on. */
  onComplete?: () => void;

  private readonly popups: TriggeredPopup[] = [];
  private elapsed = 0;
  private completed = false;
  private placedCount = 0;

  /** The heroine, if a scene registers her, so she can celebrate on success. */
  protected girl?: Popup;

  // Victory celebration state (jump + star shower).
  private celebrating = false;
  private celebrateElapsed = 0;
  private girlBaseY = 0;
  private readonly stars: StarParticle[] = [];

  /** Build geometry, configure `this.rig`, register pop-ups/hotspots here. */
  protected abstract setup(): void;

  /** Optional per-frame hook for scene-specific logic. */
  protected onUpdate(_dt: number): void {}

  enter(ctx: SceneContext): void {
    this.ctx = ctx;
    ctx.scene.add(this.root);
    this.setup();
  }

  /** Register a pop-up that unfolds `triggerTime` seconds into the scene. */
  protected addPopup(popup: Popup, triggerTime: number): void {
    // Nudge each pop-up to a unique depth so no two flat cutouts share a z
    // plane (which causes z-fighting where they overlap).
    popup.root.position.z -= this.placedCount * 0.0011;
    this.placedCount += 1;

    this.guardCorridor(popup);
    this.root.add(popup.root);
    this.popups.push({ popup, triggerTime, triggered: false });
  }

  /**
   * Keep pop-ups out of the camera's travel lane. If a piece's footprint
   * straddles the centre corridor (and it sits within the travelled stretch),
   * warn and nudge it sideways so the camera can't glide through it.
   */
  private guardCorridor(popup: Popup): void {
    const pos = popup.root.position;
    const withinTravel = pos.z <= 1 && pos.z >= -(this.rig.length + 1);
    if (!withinTravel) return;

    const innerEdge = Math.abs(pos.x) - popup.footprintRadius;
    if (innerEdge >= CORRIDOR_HALF_WIDTH) return;

    const sign = pos.x >= 0 ? 1 : -1;
    const nudged = sign * (CORRIDOR_HALF_WIDTH + popup.footprintRadius);
    console.warn(
      `[StoryScene] Pop-up at x=${pos.x.toFixed(2)}, z=${pos.z.toFixed(
        2
      )} overlaps the camera corridor; nudged to x=${nudged.toFixed(2)}.`
    );
    pos.x = nudged;
  }

  /** Signal that the chapter is done (fires `onComplete` once). */
  protected complete(): void {
    if (this.completed) return;
    this.completed = true;
    this.celebrate();
    this.colorizeWorld();
    this.onComplete?.();
  }

  /**
   * Mabli's victory dance: her hair whirls, she jumps for joy and a little
   * shower of stars bursts above her. Runs for a couple of seconds before the
   * page turns.
   */
  private celebrate(): void {
    startGirlCheer();
    if (!this.girl) return;
    this.celebrating = true;
    this.celebrateElapsed = 0;
    this.girlBaseY = this.girl.root.position.y;

    const gx = this.girl.root.position.x;
    const gz = this.girl.root.position.z;
    for (let i = 0; i < 14; i++) {
      const material = new THREE.SpriteMaterial({
        map: makeStarTexture(),
        transparent: true,
        depthWrite: false,
        depthTest: false
      });
      const sprite = new THREE.Sprite(material);
      sprite.renderOrder = 6;
      const baseScale = 0.22 + Math.random() * 0.28;
      sprite.scale.setScalar(baseScale);
      sprite.position.set(
        gx + (Math.random() - 0.5) * 1.4,
        1.7 + Math.random() * 0.5,
        gz + (Math.random() - 0.5) * 0.4
      );
      this.root.add(sprite);
      this.stars.push({
        sprite,
        vx: (Math.random() - 0.5) * 1.4,
        vy: 1.6 + Math.random() * 1.6,
        life: 0,
        ttl: 1.1 + Math.random() * 0.7,
        spin: (Math.random() - 0.5) * 7,
        baseScale
      });
    }
  }

  /** Advance the victory jump + star shower; tidies up when finished. */
  private updateCelebration(dt: number): void {
    if (!this.celebrating) return;
    this.celebrateElapsed += dt;

    if (this.girl) {
      // A few lively decaying hops.
      const t = this.celebrateElapsed;
      const hop = Math.abs(Math.sin(t * Math.PI * 2.2));
      const decay = Math.max(0, 1 - t / 2.4);
      this.girl.root.position.y = this.girlBaseY + hop * 0.4 * decay;
    }

    for (const s of this.stars) {
      s.life += dt;
      s.sprite.position.x += s.vx * dt;
      s.sprite.position.y += s.vy * dt;
      s.vy -= 3.2 * dt; // gravity
      s.sprite.material.rotation += s.spin * dt;
      const p = Math.min(1, s.life / s.ttl);
      s.sprite.material.opacity = 1 - p;
      s.sprite.scale.setScalar(s.baseScale * (1 + Math.sin(p * Math.PI) * 0.4));
    }

    if (this.celebrateElapsed > 2.6) {
      for (const s of this.stars) {
        this.root.remove(s.sprite);
        s.sprite.material.map?.dispose();
        s.sprite.material.dispose();
      }
      this.stars.length = 0;
      if (this.girl) this.girl.root.position.y = this.girlBaseY;
      this.celebrating = false;
    }
  }

  /**
   * Wash the whole chapter into colour as its payoff: every open pop-up blooms
   * from mono into its natural colour in a soft wave rolling out from the
   * camera, just before the page turns. Already-coloured targets are left be.
   */
  private colorizeWorld(): void {
    const camZ = this.ctx.camera.position.z;
    let maxDist = 0.0001;
    for (const { popup } of this.popups) {
      maxDist = Math.max(maxDist, Math.abs(popup.root.position.z - camZ));
    }
    for (const { popup } of this.popups) {
      if (popup.isColored) continue;
      const dist = Math.abs(popup.root.position.z - camZ);
      // Near pieces bloom first; the wave reaches the horizon over ~0.7s.
      const delay = (dist / maxDist) * 0.7;
      popup.colorizeFade(popup.naturalColor ?? DEFAULT_BLOOM_COLOR, 0.5, delay);
    }
  }

  update(dt: number): void {
    this.elapsed += dt;
    this.rig.update(dt);

    for (const entry of this.popups) {
      if (!entry.triggered && this.elapsed >= entry.triggerTime) {
        entry.triggered = true;
        entry.popup.open();
        this.ctx.sound.pop();
      }
      entry.popup.update(dt);
    }

    this.updateCelebration(dt);
    this.onUpdate(dt);
  }

  exit(): void {
    this.ctx.interaction.clear();
    this.root.removeFromParent();
    this.disposeGroup(this.root);
  }

  private disposeGroup(object: THREE.Object3D): void {
    object.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const material = child.material;
        const materials = Array.isArray(material) ? material : [material];
        for (const m of materials) {
          const map = (m as THREE.MeshBasicMaterial).map;
          map?.dispose();
          m.dispose();
        }
      }
    });
  }
}
