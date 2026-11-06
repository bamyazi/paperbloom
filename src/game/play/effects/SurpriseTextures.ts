import * as THREE from "three";
import { drawButterfly } from "../../art/Figures.ts";
import { drawSnail } from "../../art/animals/Snail.ts";
import { drawFish } from "../../art/animals/Fish.ts";
import { drawAcorn, drawPaperStar, drawRipple, drawWaterDrop } from "./SurpriseArtwork.ts";
import type { SurpriseArt } from "./SurpriseTypes.ts";

type Draw = (context: CanvasRenderingContext2D, width: number, height: number) => void;

const artwork: Record<SurpriseArt, Draw> = {
  fish: (context, width, height) => drawFish(context, width, height, "#f4c364", 0.8),
  butterfly: (context, width, height) => drawButterfly(context, width, height, "#d99bc5", 0.8),
  snail: (context, width, height) => drawSnail(context, width, height, "#a78dc0", 0.8),
  acorn: drawAcorn,
  star: drawPaperStar,
  ripple: drawRipple,
  drop: drawWaterDrop
};

/** Lazy, shared artwork. The owner disposes it after all pooled materials. */
export class SurpriseTextures {
  private readonly textures = new Map<SurpriseArt, THREE.CanvasTexture>();

  get(kind: SurpriseArt): THREE.CanvasTexture {
    const existing = this.textures.get(kind);
    if (existing) return existing;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = kind === "star" || kind === "ripple" ? 256 : 192;
    const context = canvas.getContext("2d")!;
    artwork[kind](context, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.name = `paper-surprise-${kind}`;
    texture.colorSpace = THREE.SRGBColorSpace;
    this.textures.set(kind, texture);
    return texture;
  }

  dispose(): void {
    for (const texture of this.textures.values()) {
      texture.dispose();
      const canvas = texture.image as HTMLCanvasElement;
      canvas.width = 0;
      canvas.height = 0;
    }
    this.textures.clear();
  }
}
