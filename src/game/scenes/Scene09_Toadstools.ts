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
const CAP_RED = "#d6452f";

/**
 * Scene 09 — "The Toadstool Ring"
 * -------------------------------
 * A little ring of toadstools waits in the clearing, all their red washed away.
 * The child taps each one to colour its cap, finishing the chapter.
 */
export class Scene09Toadstools extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x7fa1c33b;

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
    this.buildToadstools();
    this.buildGirl();

    this.ctx.hud.showCaption("Deeper in, a little ring of toadstools stood waiting…", 5);
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
    this.place(buildElement(HILL, { scale: 0.95 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 1.0 }), 7.2, -11.5, 0.6);

    this.place(buildElement(TREE, { scale: 1.4 }), -4.0, -7);
    this.place(buildElement(TREE, { scale: 1.3 }), 4.1, -8.5);
    this.place(buildElement(TREE, { scale: 1.5 }), -4.4, -12.5);
    this.place(buildElement(BUSH, { scale: 1.3 }), -2.6, -9);
    this.place(buildElement(BUSH, { scale: 1.2 }), 2.7, -10.5);
  }

  private scatterUndergrowth(): void {
    for (let z = -3; z > CLEARING_Z - 1; z -= 0.6) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.84) continue;

        const x = side * (1.4 + this.random() * 2.2);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.7 + this.random() * 0.5;

        let definition = GRASS;
        if (pick < 0.55) definition = GRASS;
        else if (pick < 0.8) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** A clearly-separated row of toadstools — every cap is a colour target. */
  private buildToadstools(): void {
    // Four big caps flanking the centre so Mabli can stand in the middle gap
    // without ever standing in front of a target. Large and widely spaced so a
    // small child can tap each one easily.
    const caps = [-2.7, -1.0, 1.0, 2.7];
    for (const x of caps) {
      const popup = this.place(buildElement(MUSHROOM, { scale: 2.3 }), x, -11.0);
      this.colorTargets.push({ popup, color: CAP_RED });
    }
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), 0, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startToadstoolPuzzle();
    }
  }

  private startToadstoolPuzzle(): void {
    this.ctx.hud.showCaption(
      "The toadstools have lost their cheerful red caps. Tap each one to colour it in!",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) this.ctx.hud.showCaption("Lovely and red! Colour the others too.", 0);
      },
      onComplete: () => {
        this.ctx.hud.showCaption("A whole ring of red toadstools — wonderful!", 0);
        this.complete();
      }
    });
  }
}
