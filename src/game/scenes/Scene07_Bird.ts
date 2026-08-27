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
  BIRD,
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
 * Scene 07 — "The Little Birds"
 * ----------------------------
 * A few little birds sit on rocks in the clearing, their feathers washed to
 * grey. The child taps each one to bring its colour back, finishing the
 * chapter.
 */
export class Scene07Bird extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  private seed = 0x2b71c4a9;

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
    this.buildBird();
    this.buildGirl();

    this.ctx.hud.showCaption("A little song drifted across the still, grey meadow…", 5);
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

    this.place(buildElement(TREE, { scale: 1.2 }), -3.7, -6.5);
    this.place(buildElement(TREE, { scale: 1.3 }), 3.9, -9);
    this.place(buildElement(BUSH, { scale: 1.2 }), -2.4, -8.5);
    this.place(buildElement(BUSH, { scale: 1.1 }), 2.6, -10.5);
  }

  private scatterUndergrowth(): void {
    for (let z = -3; z > CLEARING_Z - 1; z -= 0.55) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.82) continue;

        const x = side * (1.2 + this.random() * 2.4);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.7 + this.random() * 0.5;

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

  /** Three little birds on rock perches — a small flock of colour targets. */
  private buildBird(): void {
    const birds = [
      { x: -1.7, color: "#4a90d9" }, // bluebird
      { x: 0.0, color: "#e2703a" }, // robin
      { x: 1.7, color: "#f4c20d" } // goldfinch
    ];
    for (const b of birds) {
      this.place(buildElement(ROCK, { scale: 1.4 }), b.x, -11.0, 1.2);
      const bird = this.place(buildElement(BIRD, { scale: 1.0 }), b.x, -11.0, 1.5);
      bird.root.position.y = 0.5; // perch it on top of the rock
      this.colorTargets.push({ popup: bird, color: b.color });
    }
  }

  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), -2.0, CLEARING_Z, 1.2);
  }

  protected onUpdate(): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startBirdPuzzle();
    }
  }

  private startBirdPuzzle(): void {
    this.ctx.hud.showCaption(
      "“Tweet! We're little birds, but our colours have flown away. Tap each of us to colour us in!”",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) this.ctx.hud.showCaption("“Tweet! Now colour my friends too!”", 0);
      },
      onComplete: () => {
        this.ctx.hud.showCaption("“Tweet-tweet! A whole flock of colour — thank you!”", 0);
        this.complete();
      }
    });
  }
}
