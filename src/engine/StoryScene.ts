import * as THREE from "three";
import { CameraRig } from "./CameraRig.ts";
import { InteractionManager } from "./Interaction.ts";
import { Popup } from "./Popup.ts";
import { Hud } from "./Hud.ts";
import { Narrator } from "./Narrator.ts";
import { SoundEngine } from "./SoundEngine.ts";
import {
  CHAPTER_COMPLETION_HOLD_MS,
  CHAPTER_NARRATION_QUIET_SECONDS,
  WORLD_COLOR_FADE_SECONDS,
  WORLD_COLOR_WAVE_SECONDS
} from "./SceneTimings.ts";
import { ChapterCelebration } from "./celebration/ChapterCelebration.ts";
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
const DEFAULT_BLOOM_COLOR = "#6f9c4a";

/** Owns a chapter's scene graph, timed pop-ups and completion lifecycle. */
export abstract class StoryScene {
  readonly root = new THREE.Group();
  protected ctx!: SceneContext;
  protected rig!: CameraRig;
  protected girl?: Popup;

  /** Fires once after the animated hold and a quiet pause following narration. */
  onComplete?: () => void;

  private readonly popups: TriggeredPopup[] = [];
  private celebration: ChapterCelebration | null = null;
  private elapsed = 0;
  private completed = false;
  private completionElapsed = 0;
  private narrationQuietElapsed = 0;
  private completionNotified = false;
  private placedCount = 0;

  protected abstract setup(): void;
  protected onUpdate(_dt: number): void {}

  /** The finale uses the same animation/narration gate as chapter transitions. */
  protected get completionReady(): boolean {
    return this.completed &&
      this.completionElapsed >= CHAPTER_COMPLETION_HOLD_MS / 1000 &&
      this.narrationQuietElapsed >= CHAPTER_NARRATION_QUIET_SECONDS &&
      !this.ctx.narrator.isSpeaking;
  }

  enter(ctx: SceneContext): void {
    this.ctx = ctx;
    ctx.scene.add(this.root);
    this.setup();
  }

  /** Register a pop-up that unfolds this many seconds into the chapter. */
  protected addPopup(popup: Popup, triggerTime: number): void {
    // Separate flat cutouts slightly so overlapping paper does not z-fight.
    popup.root.position.z -= this.placedCount * 0.0011;
    this.placedCount += 1;
    this.guardCorridor(popup);
    this.root.add(popup.root);
    this.popups.push({ popup, triggerTime, triggered: false });
  }

  private guardCorridor(popup: Popup): void {
    const position = popup.root.position;
    const withinTravel = position.z <= 1 && position.z >= -(this.rig.length + 1);
    if (!withinTravel) return;
    const innerEdge = Math.abs(position.x) - popup.footprintRadius;
    if (innerEdge >= CORRIDOR_HALF_WIDTH) return;
    const sign = position.x >= 0 ? 1 : -1;
    const nudged = sign * (CORRIDOR_HALF_WIDTH + popup.footprintRadius);
    console.warn(
      `[StoryScene] Pop-up at x=${position.x.toFixed(2)}, z=${position.z.toFixed(2)} ` +
      `overlaps the camera corridor; nudged to x=${nudged.toFixed(2)}.`
    );
    position.x = nudged;
  }

  /** Start the world wash and celebration once, after the final target is done. */
  protected complete(): void {
    if (this.completed) return;
    this.completed = true;
    this.celebrate();
    this.colorizeWorld();
  }

  private celebrate(): void {
    const reducedMotion = typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) startGirlCheer();
    this.celebration = new ChapterCelebration(this.root, reducedMotion);
    this.celebration.start(this.ctx.camera, this.girl);
  }

  private colorizeWorld(): void {
    const cameraZ = this.ctx.camera.position.z;
    let maxDistance = 0.0001;
    for (const { popup } of this.popups) {
      maxDistance = Math.max(maxDistance, Math.abs(popup.root.position.z - cameraZ));
    }
    for (const { popup } of this.popups) {
      if (popup.isColored) continue;
      const distance = Math.abs(popup.root.position.z - cameraZ);
      const delay = distance / maxDistance * WORLD_COLOR_WAVE_SECONDS;
      popup.colorizeFade(
        popup.naturalColor ?? DEFAULT_BLOOM_COLOR,
        WORLD_COLOR_FADE_SECONDS,
        delay
      );
    }
  }

  update(dt: number): void {
    const wasCompleted = this.completed;
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
    this.celebration?.update(dt);
    this.onUpdate(dt);
    if (wasCompleted) this.updateCompletion(dt);
  }

  private updateCompletion(dt: number): void {
    if (this.completionNotified) return;
    const step = Math.max(0, dt);
    this.completionElapsed += step;
    this.narrationQuietElapsed = this.ctx.narrator.isSpeaking
      ? 0
      : this.narrationQuietElapsed + step;
    if (!this.completionReady) return;
    // The callback can synchronously exit this scene and enter its successor.
    this.completionNotified = true;
    this.onComplete?.();
  }

  exit(): void {
    this.completionNotified = true;
    this.ctx.interaction.clear();
    this.ctx.narrator.cancel();
    this.celebration?.dispose();
    this.celebration = null;
    this.root.removeFromParent();
    this.disposeGroup(this.root);
    this.root.clear();
    this.popups.length = 0;
    this.girl = undefined;
  }

  private disposeGroup(object: THREE.Object3D): void {
    object.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      child.geometry.dispose();
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const material of materials) {
        (material as THREE.MeshBasicMaterial).map?.dispose();
        material.dispose();
      }
    });
  }
}
