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
  BACKDROP,
  BUSH,
  BUTTERFLY,
  GIRL,
  GRASS,
  HILL,
  MUSHROOM,
  ROCK,
  TREE
} from "../elements.ts";

const CLEARING_Z = -13;
const CAMERA_TRAVEL = 8;
const HOLD_TIME = 5.2;

/**
 * Scene 03 — "The Butterfly Meadow"
 * ---------------------------------
 * The girl reaches a sunny meadow where grey butterflies flutter. The child
 * taps each butterfly to colour its wings; colouring them all completes the
 * chapter.
 */
export class Scene03Butterflies extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x0b1dfea7;

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
    this.buildHorizon();
    this.buildHeroScenery();
    this.scatterUndergrowth();
    this.buildButterflies();
    this.buildGirl();

    this.ctx.hud.showCaption("The path opened into a dull, grey meadow…", 5);
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
    crease.position.set(0, 0.001, -18);
    this.root.add(crease);
  }

  private buildHorizon(): void {
    this.place(buildElement(BACKDROP), 0, CLEARING_Z - 9, 0.1);
  }

  private buildHeroScenery(): void {
    this.place(buildElement(HILL, { scale: 0.9 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 1.0 }), 7.2, -11.5, 0.6);

    this.place(buildElement(TREE, { scale: 1.15 }), -3.7, -6.5);
    this.place(buildElement(TREE, { scale: 1.1 }), 3.8, -9);
    this.place(buildElement(BUSH, { scale: 1.2 }), -2.4, -5);
    this.place(buildElement(BUSH, { scale: 1.1 }), 2.5, -6.5);
    this.place(buildElement(BUSH, { scale: 1.2 }), 2.2, -11.5);
  }

  /** A grass-heavy meadow of decorative tufts, stones and toadstools. */
  private scatterUndergrowth(): void {
    for (let z = -2; z > CLEARING_Z - 1; z -= 0.5) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.85) continue;

        const x = side * (1.1 + this.random() * 2.6);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.8 + this.random() * 0.7;

        let definition = GRASS;
        if (pick < 0.62) definition = GRASS;
        else if (pick < 0.82) definition = MUSHROOM;
        else if (pick < 0.93) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** The butterflies fluttering over the meadow — every one a colour target. */
  private buildButterflies(): void {
    const flutter = [
      { x: -2.2, z: -11.0, scale: 0.85, color: "#e4572e" }, // red
      { x: -1.1, z: -11.0, scale: 0.85, color: "#2b8ac9" }, // blue
      { x: 0.0, z: -11.0, scale: 0.85, color: "#f4c20d" }, // yellow
      { x: 1.1, z: -11.0, scale: 0.85, color: "#9b4dca" }, // purple
      { x: 2.2, z: -11.0, scale: 0.85, color: "#ef7215" } // orange
    ];
    for (const b of flutter) {
      const popup = this.place(buildElement(BUTTERFLY, { scale: b.scale }), b.x, b.z);
      this.colorTargets.push({ popup, color: b.color });
    }
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -2.0, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startButterflyPuzzle();
    }
  }

  private startButterflyPuzzle(): void {
    this.ctx.hud.showCaption(
      "So many butterflies — but they're all grey! Tap each butterfly to colour its wings!",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) {
          this.ctx.hud.showCaption("Wonderful! Colour the others too!", 0);
        }
      },
      onComplete: () => {
        this.ctx.hud.showCaption(
          "You did it! The whole meadow is dancing with colour!",
          0
        );
        this.complete();
      }
    });
  }
}
