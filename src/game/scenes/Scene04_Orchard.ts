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
  APPLE,
  BACKDROP,
  BUSH,
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
 * Scene 04 — "The Grey Orchard"
 * -----------------------------
 * The girl comes to an old apple tree heavy with grey apples. The child taps
 * each apple to colour it; colouring them all completes the chapter.
 */
export class Scene04Orchard extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0xa9911ee5;

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
    this.buildApples();
    this.buildGirl();

    this.ctx.hud.showCaption("Beyond the meadow stood a great, grey apple tree…", 5);
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

  private buildHorizon(): void {
    this.place(buildElement(BACKDROP), 0, CLEARING_Z - 9, 0.1);
  }

  private buildHeroScenery(): void {
    this.place(buildElement(HILL, { scale: 0.9 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 1.0 }), 7.2, -11.5, 0.6);

    // The apple tree the apples hang from (set back so its crown frames them).
    this.place(buildElement(TREE, { scale: 1.7 }), 0, -14.0, 0.8);

    this.place(buildElement(TREE, { scale: 1.0 }), -4.0, -7);
    this.place(buildElement(BUSH, { scale: 1.1 }), -2.4, -5.5);
    this.place(buildElement(BUSH, { scale: 1.0 }), 2.6, -6.5);
    this.place(buildElement(BUSH, { scale: 1.0 }), 3.0, -11.5);
  }

  private scatterUndergrowth(): void {
    for (let z = -3.2; z > CLEARING_Z - 1; z -= 0.55) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.78) continue;

        const x = side * (1.2 + this.random() * 2.6);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.6 + this.random() * 0.4;

        let definition = GRASS;
        if (pick < 0.55) definition = GRASS;
        else if (pick < 0.78) definition = MUSHROOM;
        else if (pick < 0.92) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** The apples hanging in the tree — varied scale gives varied height/cluster. */
  private buildApples(): void {
    // Big, clearly separated apples across the crown so a small child can pick
    // out and tap each one easily.
    const apples = [
      { x: -2.2, z: -13.0, scale: 1.3, color: "#e4572e" }, // red
      { x: -1.1, z: -13.0, scale: 1.3, color: "#d64541" }, // deep red
      { x: 0.0, z: -13.0, scale: 1.3, color: "#f4c20d" }, // gold
      { x: 1.1, z: -13.0, scale: 1.3, color: "#3fa34d" }, // green
      { x: 2.2, z: -13.0, scale: 1.3, color: "#ef7215" } // orange
    ];
    for (const a of apples) {
      const popup = this.place(buildElement(APPLE, { scale: a.scale }), a.x, a.z);
      this.colorTargets.push({ popup, color: a.color });
    }
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -2.1, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startApplePuzzle();
    }
  }

  private startApplePuzzle(): void {
    this.ctx.hud.showCaption(
      "The apples have no colour! Tap each apple to fill it with colour.",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) this.ctx.hud.showCaption("Yum! Colour the rest too!", 0);
      },
      onComplete: () => {
        this.ctx.hud.showCaption("You did it! The orchard is ripe with colour!", 0);
        this.complete();
      }
    });
  }
}
