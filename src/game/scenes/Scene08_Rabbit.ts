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
  RABBIT,
  ROCK,
  TREE
} from "../elements.ts";

const CLEARING_Z = -13;
const CAMERA_TRAVEL = 8;
const HOLD_TIME = 5.2;
const RABBIT_BROWN = "#b98b5e";

/**
 * Scene 08 — "The Shy Rabbit"
 * ---------------------------
 * A timid rabbit sits in the long grass, its soft coat drained to grey. The
 * child taps it to return its warm brown, finishing the chapter.
 */
export class Scene08Rabbit extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x6d3a90f1;

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
    this.buildRabbit();
    this.buildGirl();

    this.ctx.hud.showCaption("Something soft rustled in the tall, grey grass…", 5);
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
    this.place(buildElement(HILL, { scale: 1.0 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 0.95 }), 7.2, -11.5, 0.6);

    this.place(buildElement(TREE, { scale: 1.15 }), -4.0, -7);
    this.place(buildElement(TREE, { scale: 1.1 }), 4.0, -9.5);
    this.place(buildElement(BUSH, { scale: 1.3 }), -2.6, -8.5);
    this.place(buildElement(BUSH, { scale: 1.2 }), 2.7, -10.5);
  }

  private scatterUndergrowth(): void {
    // A grass-heavy meadow so the rabbit nestles in the long grass.
    for (let z = -3; z > CLEARING_Z - 1; z -= 0.5) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.86) continue;

        const x = side * (1.1 + this.random() * 2.6);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.8 + this.random() * 0.6;

        let definition = GRASS;
        if (pick < 0.68) definition = GRASS;
        else if (pick < 0.85) definition = MUSHROOM;
        else if (pick < 0.94) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** The rabbit — the one thing the child must colour. */
  private buildRabbit(): void {
    const rabbit = this.place(buildElement(RABBIT, { scale: 1.1 }), 0.6, -11.0, 1.4);
    this.colorTargets.push({ popup: rabbit, color: RABBIT_BROWN });
    // A couple of grass tufts in front so it looks nestled in the meadow.
    this.place(buildElement(GRASS, { scale: 1.4 }), -0.1, -10.4, 1.6);
    this.place(buildElement(GRASS, { scale: 1.3 }), 1.3, -10.5, 1.6);
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -2.0, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startRabbitPuzzle();
    }
  }

  private startRabbitPuzzle(): void {
    this.ctx.hud.showCaption(
      "“Hello… I'm a shy little rabbit, and my soft brown is all gone. Will you colour me in?”",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onComplete: () => {
        this.ctx.hud.showCaption("“Warm and brown again! Thank you, kind friend.”", 0);
        this.complete();
      }
    });
  }
}
