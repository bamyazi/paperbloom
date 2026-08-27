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
  FOX,
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
const FOX_ORANGE = "#e8823a";

/**
 * Scene 05 — "The Little Fox"
 * ---------------------------
 * A shy fox waits in a woodland clearing. He tells the girl he has lost his
 * lovely orange coat. The child taps him to colour him in, which completes the
 * chapter.
 */
export class Scene05Fox extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x0f0c1a37;

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
    this.buildFox();
    this.buildGirl();

    this.ctx.hud.showCaption("In a hush of grey trees, someone was waiting…", 5);
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

    // Denser trees for a woodland feel.
    this.place(buildElement(TREE, { scale: 1.3 }), -3.6, -6.5);
    this.place(buildElement(TREE, { scale: 1.2 }), 3.7, -8);
    this.place(buildElement(TREE, { scale: 1.5 }), -4.2, -12);
    this.place(buildElement(TREE, { scale: 1.35 }), 4.0, -12.8);
    this.place(buildElement(BUSH, { scale: 1.3 }), -2.4, -9.5);
    this.place(buildElement(BUSH, { scale: 1.2 }), 2.4, -10.5);
  }

  private scatterUndergrowth(): void {
    for (let z = -3.2; z > CLEARING_Z - 1; z -= 0.55) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.82) continue;

        const x = side * (1.2 + this.random() * 2.4);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.6 + this.random() * 0.4;

        let definition = GRASS;
        if (pick < 0.5) definition = GRASS;
        else if (pick < 0.76) definition = MUSHROOM;
        else if (pick < 0.92) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /** The fox — the one thing the child must colour. */
  private buildFox(): void {
    const fox = this.place(buildElement(FOX, { scale: 1.05 }), 0.5, -11.2, 1.4);
    this.colorTargets.push({ popup: fox, color: FOX_ORANGE });
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -2.0, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startFoxPuzzle();
    }
  }

  private startFoxPuzzle(): void {
    this.ctx.hud.showCaption(
      "“Oh… I'm a little fox. I've lost my lovely orange coat. Will you colour me in?”",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onComplete: () => {
        this.ctx.hud.showCaption("“Look at me — orange again! Thank you, friend!”", 0);
        this.complete();
      }
    });
  }
}
