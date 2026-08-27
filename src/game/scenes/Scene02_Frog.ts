import * as THREE from "three";
import {
  buildElement,
  CameraRig,
  ColorTarget,
  ColoringPuzzle,
  createCutout,
  Popup,
  StoryScene
} from "../../engine/index.ts";
import { makePaperTexture } from "../art/Paper.ts";
import { drawPond } from "../art/Figures.ts";
import {
  BACKDROP,
  BUSH,
  FROG,
  GIRL,
  GRASS,
  HILL,
  LILY_PAD,
  MUSHROOM,
  REED,
  ROCK,
  TREE
} from "../elements.ts";

const CLEARING_Z = -13;
const CAMERA_TRAVEL = 8;
const HOLD_TIME = 5.2;
const FROG_GREEN = "#3fa34d";

/**
 * Scene 02 — "The Grey Pond"
 * --------------------------
 * The girl reaches a quiet pond ringed with reeds and lily pads. A little frog
 * sits on a pad, sad because he has lost all his green colour. The child must
 * find him among the pond life and tap him to colour him in, which completes
 * the chapter.
 */
export class Scene02Frog extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x51e2f00d;

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
    this.buildPondLife();
    this.buildGirl();

    this.ctx.hud.showCaption("Mabli followed the path to a quiet, grey pond…", 5);
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

  /** The paper page, gutter crease, and a flat pond in the clearing. */
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

    const pond = createCutout({ draw: drawPond, width: 8, height: 5.5, pixelsPerUnit: 64, doubleSided: true });
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(0, 0.012, -11);
    this.root.add(pond);
  }

  private buildHorizon(): void {
    this.place(buildElement(BACKDROP), 0, CLEARING_Z - 9, 0.1);
  }

  private buildHeroScenery(): void {
    this.place(buildElement(HILL, { scale: 0.9 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 1.0 }), 7.2, -11.5, 0.6);

    this.place(buildElement(TREE, { scale: 1.15 }), -3.6, -6);
    this.place(buildElement(TREE, { scale: 1.1 }), 3.7, -8.5);
    this.place(buildElement(TREE, { scale: 1.2 }), -4.2, -12.5);

    this.place(buildElement(BUSH, { scale: 1.2 }), -2.2, -5);
    this.place(buildElement(BUSH, { scale: 1.1 }), 2.4, -6.5);

    // Reeds cluster around the pond's edge.
    this.place(buildElement(REED, { scale: 1.1 }), -2.6, -9.6);
    this.place(buildElement(REED, { scale: 1.25 }), 2.6, -10.2);
    this.place(buildElement(REED, { scale: 1.0 }), -2.9, -11.6);
    this.place(buildElement(REED, { scale: 1.15 }), 2.3, -12.2);
  }

  private scatterUndergrowth(): void {
    for (let z = -2; z > CLEARING_Z - 1; z -= 0.6) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.8) continue;

        const x = side * (1.2 + this.random() * 2.4);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.8 + this.random() * 0.7;

        let definition = GRASS;
        if (pick < 0.4) definition = GRASS;
        else if (pick < 0.62) definition = REED;
        else if (pick < 0.8) definition = MUSHROOM;
        else if (pick < 0.92) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** Lily pads on the pond, and the colourless frog perched on one. */
  private buildPondLife(): void {
    this.place(buildElement(LILY_PAD, { scale: 1.2 }), 0.5, -10.9);
    this.place(buildElement(LILY_PAD, { scale: 1.0 }), -1.3, -10.4);
    this.place(buildElement(LILY_PAD, { scale: 1.1 }), 1.5, -11.9);

    // The frog — the one thing the child must find and colour.
    const frog = this.place(buildElement(FROG, { scale: 1.25 }), 0.5, -10.6, 1.4);
    this.colorTargets.push({ popup: frog, color: FROG_GREEN });
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -1.7, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startFrogPuzzle();
    }
  }

  private startFrogPuzzle(): void {
    this.ctx.hud.showCaption(
      "“Ribbit… hello! I’m a little frog, but I’ve lost all my green. Can you find me and tap me to colour me in?”",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onComplete: () => {
        this.ctx.hud.showCaption("“Ribbit-ribbit! I’m green again! Thank you!”", 0);
        this.complete();
      }
    });
  }
}
