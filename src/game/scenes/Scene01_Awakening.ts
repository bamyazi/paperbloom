import * as THREE from "three";
import {
  buildElement,
  CameraRig,
  ColoringPuzzle,
  ColorTarget,
  Popup,
  StoryScene
} from "../../engine/index.ts";
import { makePaperTexture } from "../art/Paper.ts";
import {
  BACKDROP,
  BUSH,
  FLOWER,
  GIRL,
  GRASS,
  HILL,
  HOUSE,
  MUSHROOM,
  ROCK,
  TREE
} from "../elements.ts";

/** Where the girl / clearing sits, and how far the camera actually travels. */
const CLEARING_Z = -13;
const CAMERA_TRAVEL = 8;
/** Seconds the camera holds still while the whole scene springs up. */
const HOLD_TIME = 5.2;

/**
 * Scene 01 — "The Grey Morning"
 * -----------------------------
 * The opening chapter. The camera holds still while a dense black-and-white
 * paper world springs up all around it — hills, trees whose branches and
 * canopies unfold in stages, shrubs, flowers, toadstools and grass. Once the
 * page has fully bloomed, the camera glides forward into the clearing where the
 * girl waits, the last spot of colour in the world, her hair a living rainbow.
 * There are no puzzles yet; this chapter teaches the language of the book.
 */
export class Scene01Awakening extends StoryScene {
  private puzzleStarted = false;
  private readonly colorTargets: ColorTarget[] = [];
  // Small deterministic RNG so the scattered scenery is dense but reproducible.
  private seed = 0x1a2b3c4d;

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
    this.buildColorTargets();
    this.buildGirl();

    // A two-part opening that introduces Mabli before the first puzzle.
    this.ctx.hud.showCaption(
      "Once, all the colour drained out of the world — every last drop.",
      5
    );
    window.setTimeout(() => {
      this.ctx.hud.showCaption(
        "Only one thing kept its colour: the rainbow hair of a little girl named Mabli.",
        5
      );
    }, 5200);
  }

  private random(): number {
    this.seed = (this.seed * 1664525 + 1013904223) >>> 0;
    return this.seed / 0x100000000;
  }

  /**
   * Place a pop-up at (x, z). By default it unfolds on a timer keyed to its
   * depth, so the scene blooms back to front — the furthest pieces rise first
   * and the wave rolls in toward the camera while it holds still. Pass
   * `trigger` to override the timing.
   */
  private place(popup: Popup, x: number, z: number, trigger?: number): Popup {
    popup.root.position.x = x;
    popup.root.position.z = z;
    const time = trigger ?? Math.max(0.2, 0.5 + (-CLEARING_Z + z) * 0.26);
    this.addPopup(popup, time);
    return popup;
  }

  /** The flat paper "page" the whole diorama stands on. */
  private buildGround(): void {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 60),
      new THREE.MeshBasicMaterial({
        map: makePaperTexture(14),
        side: THREE.DoubleSide
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, -18);
    this.root.add(ground);

    // The central fold of the book — a faint gutter crease down the path.
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

  /** The far-off horizon of faint hills and a pale sun, which also pops up. */
  private buildHorizon(): void {
    this.place(buildElement(BACKDROP), 0, CLEARING_Z - 9, 0.1);
  }

  /** The larger, hand-placed structure of the scene, kept close to the path. */
  private buildHeroScenery(): void {
    // Hills frame the sides and sit beyond the camera's stopping point.
    this.place(buildElement(HILL, { scale: 0.9 }), -7, -10, 0.3);
    this.place(buildElement(HILL, { scale: 1.0 }), 7.2, -11.5, 0.6);

    // Trees crowd in close on both sides, each unfolding in stages.
    this.place(buildElement(TREE, { scale: 1.15 }), -2.6, -5);
    this.place(buildElement(TREE, { scale: 1.0 }), 2.7, -6.5);
    this.place(buildElement(TREE, { scale: 1.3 }), -3.3, -9);
    this.place(buildElement(TREE, { scale: 1.05 }), 3.2, -10.5);
    this.place(buildElement(TREE, { scale: 1.2 }), -3.0, -12.5);

    // A crooked cottage nestled to one side, just past the clearing.
    this.place(buildElement(HOUSE, { scale: 0.95 }), 4.6, -12);

    // Fuller shrubs tucked between the trees.
    this.place(buildElement(BUSH, { scale: 1.2 }), -1.7, -4);
    this.place(buildElement(BUSH, { scale: 1.1 }), 1.8, -5.5);
    this.place(buildElement(BUSH, { scale: 1.2 }), 2.3, -9.5);
    this.place(buildElement(BUSH, { scale: 1.0 }), -2.0, -11);
  }

  /** Dense scattered undergrowth: flowers, grass, toadstools and stones. */
  private scatterUndergrowth(): void {
    for (let z = -2; z > CLEARING_Z - 1; z -= 0.55) {
      for (const side of [-1, 1]) {
        if (this.random() > 0.82) continue;

        const x = side * (1.0 + this.random() * 2.4);
        const jz = z + (this.random() - 0.5) * 0.4;
        const pick = this.random();
        let scale = 0.8 + this.random() * 0.7;

        // Decorative scatter is never flowers — every flower is a colour target.
        let definition = GRASS;
        if (pick < 0.45) definition = GRASS;
        else if (pick < 0.72) definition = MUSHROOM;
        else if (pick < 0.9) definition = ROCK;
        else {
          definition = BUSH;
          scale *= 0.8;
        }

        this.place(buildElement(definition, { scale }), x, jz);
      }
    }
  }

  /**
   * The flowers in the clearing — the full set the child must colour to
   * progress. These are the only flowers in the scene, so every visible flower
   * is a target. Each gets its own colour (a little rainbow to "bring back").
   */
  private buildColorTargets(): void {
    // A single, well-spaced row of flowers across the clearing so none hides
    // behind another and every one stays comfortably on screen.
    const flowers = [
      { x: -2.2, z: -11.0, scale: 1.15, color: "#e4572e" }, // red
      { x: -1.32, z: -11.0, scale: 1.15, color: "#ef7215" }, // orange
      { x: -0.44, z: -11.0, scale: 1.15, color: "#f4c20d" }, // yellow
      { x: 0.44, z: -11.0, scale: 1.15, color: "#3fa34d" }, // green
      { x: 1.32, z: -11.0, scale: 1.15, color: "#2b8ac9" }, // blue
      { x: 2.2, z: -11.0, scale: 1.15, color: "#9b4dca" } // purple
    ];
    for (const f of flowers) {
      const popup = this.place(buildElement(FLOWER, { scale: f.scale }), f.x, f.z);
      this.colorTargets.push({ popup, color: f.color });
    }
  }

  /** The heroine, waiting at the clearing — the one splash of colour. */
  private buildGirl(): void {
    this.girl = this.place(buildElement(GIRL, { scale: 1.1 }), 0, CLEARING_Z, 1.2);
  }

  protected onUpdate(_dt: number): void {
    if (!this.puzzleStarted && this.rig.atEnd) {
      this.puzzleStarted = true;
      this.rig.pause();
      this.startColorPuzzle();
    }
  }

  /** Once at the clearing, invite the child to colour the flowers to progress. */
  private startColorPuzzle(): void {
    this.ctx.hud.showCaption(
      "Mabli found some flowers, but they have no colour. Tap each flower to colour it in!",
      0
    );
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      targets: this.colorTargets,
      onColor: (remaining) => {
        if (remaining > 0) {
          this.ctx.hud.showCaption("So pretty! Tap the other flowers too.", 0);
        }
      },
      onComplete: () => {
        this.ctx.hud.showCaption(
          "You did it! Colour is coming back to the world. And so Mabli's journey begins.",
          0
        );
        this.complete();
      }
    });
  }
}
