import * as THREE from "three";
import {
  buildElement,
  CameraRig,
  ColorTarget,
  ColoringPuzzle,
  Popup,
  StoryScene
} from "../../engine/index.ts";
import { makePaperTexture } from "../art/Paper.ts";
import {
  BUSH,
  CLOUD,
  GIRL,
  GRASS,
  HILL,
  RAINBOW,
  ROCK,
  SUN,
  TREE
} from "../elements.ts";

const CLEARING_Z = -13;
const CAMERA_TRAVEL = 8;
const HOLD_TIME = 5.2;

/**
 * Scene 06 — "The Painted Sky" (finale)
 * -------------------------------------
 * On a wide hilltop the sky itself is grey. The child colours the sun and the
 * clouds; when the sky is full of colour a rainbow arcs over the world, the
 * page warms, and the story ends.
 */
export class Scene06Sky extends StoryScene {
  private puzzleStarted = false;
  private finale = false;
  private readonly colorTargets: ColorTarget[] = [];
  private readonly warmTarget = new THREE.Color("#f7ecd2");
  private seed = 0x5c1b7a01;

  protected setup(): void {
    this.rig = new CameraRig(this.ctx.camera, {
      speed: 1.6,
      length: CAMERA_TRAVEL,
      holdTime: HOLD_TIME,
      eyeHeight: 1.4,
      lookAhead: 5
    });
    this.rig.reset();

    this.buildGround();
    this.buildSky();
    this.buildHeroScenery();
    this.scatterUndergrowth();
    this.buildGirl();

    this.ctx.hud.showCaption("At last Mabli climbed a hill beneath a wide, grey sky…", 5);
  }

  private random(): number {
    this.seed = (this.seed * 1664525 + 1013904223) >>> 0;
    return this.seed / 0x100000000;
  }

  private place(popup: Popup, x: number, z: number, trigger?: number): Popup {
    popup.root.position.x = x;
    popup.root.position.z = z;
    const time = trigger ?? Math.max(0.2, 0.5 + (-CLEARING_Z + z) * 0.26);
    this.addPopup(popup, time);
    return popup;
  }

  private buildGround(): void {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 60),
      new THREE.MeshBasicMaterial({ map: makePaperTexture(14), side: THREE.DoubleSide })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, -18);
    this.root.add(ground);

    const crease = new THREE.Mesh(
      new THREE.PlaneGeometry(0.05, 60),
      new THREE.MeshBasicMaterial({
        color: "#c9c1ac",
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      })
    );
    crease.rotation.x = -Math.PI / 2;
    crease.position.set(0, 0.004, -18);
    this.root.add(crease);
  }

  /** The sun and clouds — the sky's colour targets. */
  private buildSky(): void {
    const sun = this.place(buildElement(SUN, { scale: 1.5 }), 0, -15.5, 0.4);
    this.colorTargets.push({ popup: sun, color: "#f6c744" });

    // Clouds kept well clear of the sun and of each other.
    const clouds = [
      { x: -3.4, z: -15.0, scale: 1.2, color: "#bcdff0" },
      { x: 3.4, z: -15.4, scale: 1.3, color: "#f4c2d0" },
      { x: -2.0, z: -17.6, scale: 1.1, color: "#d9c2ec" }
    ];
    for (const c of clouds) {
      const cloud = this.place(buildElement(CLOUD, { scale: c.scale }), c.x, c.z, 0.7);
      this.colorTargets.push({ popup: cloud, color: c.color });
    }
  }

  private buildHeroScenery(): void {
    // Small, distant hills that frame the horizon without hiding the clearing.
    this.place(buildElement(HILL, { scale: 0.8 }), -7.5, -14, 0.3);
    this.place(buildElement(HILL, { scale: 0.85 }), 7.6, -14.5, 0.6);
    this.place(buildElement(TREE, { scale: 1.1 }), -4.4, -7.5);
    this.place(buildElement(BUSH, { scale: 1.1 }), 3.2, -9.5);
    this.place(buildElement(BUSH, { scale: 1.0 }), -2.8, -10.5);
  }

  private scatterUndergrowth(): void {
    for (let z = -3.2; z > CLEARING_Z - 1; z -= 0.6) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.78) continue;

        const x = side * (1.2 + this.random() * 2.6);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.6 + this.random() * 0.4;

        let definition = GRASS;
        if (pick < 0.7) definition = GRASS;
        else if (pick < 0.9) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.15 }), -1.9, CLEARING_Z, 1.2);
  }

  protected onUpdate(dt: number): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startSkyPuzzle();
    }

    // During the finale, gently warm the whole page.
    if (this.finale) {
      const background = this.ctx.scene.background;
      if (background instanceof THREE.Color) background.lerp(this.warmTarget, Math.min(1, dt * 0.6));
      this.ctx.scene.fog?.color.lerp(this.warmTarget, Math.min(1, dt * 0.6));
    }
  }

  private startSkyPuzzle(): void {
    this.ctx.hud.showCaption(
      "The whole sky is grey! Tap the sun and each cloud to colour them.",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) this.ctx.hud.showCaption("Beautiful! Keep colouring the sky!", 0);
      },
      onComplete: () => this.startFinale()
    });
  }

  /** The ending: a rainbow arcs over the world and the page fills with colour. */
  private startFinale(): void {
    this.finale = true;
    this.ctx.hud.showCaption("Colour rushed back into every corner of the world!", 0);
    this.place(buildElement(RAINBOW), 0, -16.5, 0);

    window.setTimeout(() => {
      this.ctx.hud.showEndCard(
        "The End",
        "And so Mabli, the girl with the rainbow hair, brought colour back to the whole world."
      );
      this.complete();
    }, 3400);
  }
}
