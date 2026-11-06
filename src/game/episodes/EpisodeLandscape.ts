import * as THREE from "three";
import { buildElement } from "../../engine/Element.ts";
import { Popup } from "../../engine/Popup.ts";
import { BACKDROP, BUSH, FLOWER, GRASS, HILL, LILY_PAD, MUSHROOM, REED, TREE } from "../elements.ts";
import { makePaperTexture } from "../art/Paper.ts";
import { drawStream } from "../art/scenery/Stream.ts";
import type { EpisodeSetting } from "./EpisodeDefinition.ts";
import { PLAY_PROFILES } from "../play/PlayfulContent.ts";
import { createWaterSurface } from "../scenery/WaterSurface.ts";

type PlacePopup = (popup: Popup, x: number, z: number, trigger?: number) => Popup;

/** Builds the paper stage while keeping the centre clear for touch targets. */
export class EpisodeLandscape {
  constructor(private readonly root: THREE.Group, private readonly place: PlacePopup) {}

  build(setting: EpisodeSetting): void {
    this.addGround();
    this.place(buildElement(BACKDROP), 0, -23, 0.1);
    this.place(buildElement(HILL, { scale: 0.85 }), -7.5, -15, 0.3);
    this.place(buildElement(HILL, { scale: 0.9 }), 7.5, -15.5, 0.5);

    for (const side of [-1, 1]) {
      this.place(buildElement(BUSH, { scale: 1.0 }), side * 4.2, -13.5, 0.7);
      for (const depth of [-5, -7.5, -10]) {
        this.place(buildElement(GRASS, { scale: 0.9 }), side * 3.9, depth, 1.1);
      }
    }

    if (setting === "stream") this.addStream();
    if (setting === "meadow") this.addMeadow();
    if (setting === "garden") this.addGarden();
    if (setting === "glade") this.addGlade();
  }

  private addGround(): void {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 60),
      new THREE.MeshBasicMaterial({ map: makePaperTexture(14), side: THREE.DoubleSide })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, -18);
    this.root.add(ground);

    const fold = new THREE.Mesh(
      new THREE.PlaneGeometry(0.04, 60),
      new THREE.MeshBasicMaterial({ color: "#c9c1ac", transparent: true, opacity: 0.4 })
    );
    fold.rotation.x = -Math.PI / 2;
    fold.position.set(0, 0.004, -18);
    this.root.add(fold);
  }

  private addMeadow(): void {
    for (const side of [-1, 1]) {
      this.place(buildElement(FLOWER, { scale: 1.9 }), side * 3.6, -14, 0.8);
      this.place(buildElement(FLOWER, { scale: 1.3 }), side * 4.3, -12.8, 1.1);
    }
  }

  private addStream(): void {
    const stream = createWaterSurface({
      draw: drawStream,
      width: 8.5,
      depth: 5,
      profile: PLAY_PROFILES.stream
    });
    this.place(stream, 0, -12.1, 0.2);
    for (const side of [-1, 1]) {
      this.place(buildElement(REED, { scale: 1.1 }), side * 3.7, -13, 0.9);
      this.place(buildElement(LILY_PAD, { scale: 0.9 }), side * 2.9, -14.2, 1.2);
    }
  }

  private addGarden(): void {
    for (const side of [-1, 1]) {
      this.place(buildElement(FLOWER, { scale: 2.1 }), side * 3.8, -14.5, 0.8);
      this.place(buildElement(MUSHROOM, { scale: 1.25 }), side * 3.5, -12.8, 1.0);
    }
  }

  private addGlade(): void {
    for (const side of [-1, 1]) {
      this.place(buildElement(TREE, { scale: 1.1 }), side * 5.1, -12.8, 0.6);
      this.place(buildElement(MUSHROOM, { scale: 1.2 }), side * 3.7, -13.6, 1.0);
    }
  }
}
