import * as THREE from "three";
import type { CanvasDraw } from "./Cutout.ts";

/** A cutout owns its base texture; this helper owns only its temporary colour layer. */
export class CutoutColorBlend {
  private readonly context: CanvasRenderingContext2D;
  private readonly colorMap: { value: THREE.Texture };
  private readonly mix = { value: 0 };
  private colorCanvas: HTMLCanvasElement | null = null;
  private colorContext: CanvasRenderingContext2D | null = null;
  private colorTexture: THREE.CanvasTexture | null = null;
  private currentColor: string | null = null;
  private lastAnimationTime = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly texture: THREE.CanvasTexture,
    material: THREE.MeshBasicMaterial,
    private readonly draw: CanvasDraw,
    private readonly animated = false
  ) {
    this.context = canvas.getContext("2d", { willReadFrequently: true })!;
    this.colorMap = { value: texture };
    this.installShader(material);
    material.addEventListener("dispose", () => this.releaseColorLayer());
  }

  render(color: string | null, time: number, blend: number): void {
    const progress = THREE.MathUtils.clamp(blend, 0, 1);
    if (color && progress < 1) {
      if (this.currentColor !== color) this.beginFade(color, time);
      this.mix.value = progress;
      if (this.animated && time - this.lastAnimationTime >= 0.04) {
        this.drawFrame(this.context, null, time);
        this.drawFrame(this.colorContext!, color, time);
        this.texture.needsUpdate = true;
        this.colorTexture!.needsUpdate = true;
        this.lastAnimationTime = time;
      }
      return;
    }

    if (color && this.currentColor === color && this.colorCanvas) {
      if (this.animated) this.drawFrame(this.colorContext!, color, time);
      this.context.save();
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.globalAlpha = 1;
      this.context.globalCompositeOperation = "source-over";
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(this.colorCanvas, 0, 0);
      this.context.restore();
    } else {
      this.drawFrame(this.context, color, time);
    }
    this.texture.needsUpdate = true;
    this.releaseColorLayer();
  }

  private beginFade(color: string, time: number): void {
    this.releaseColorLayer();
    this.currentColor = color;
    this.colorCanvas = document.createElement("canvas");
    this.colorCanvas.width = this.canvas.width;
    this.colorCanvas.height = this.canvas.height;
    this.colorContext = this.colorCanvas.getContext("2d")!;
    if (this.animated) {
      this.drawFrame(this.context, null, time);
      this.texture.needsUpdate = true;
    }
    this.drawFrame(this.colorContext, color, time);
    this.colorTexture = new THREE.CanvasTexture(this.colorCanvas);
    this.colorTexture.colorSpace = this.texture.colorSpace;
    this.colorTexture.anisotropy = this.texture.anisotropy;
    this.colorMap.value = this.colorTexture;
    this.lastAnimationTime = time;
  }

  private drawFrame(context: CanvasRenderingContext2D, color: string | null, time: number): void {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalAlpha = 1;
    context.globalCompositeOperation = "source-over";
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.lineJoin = "round";
    context.lineCap = "round";
    this.draw(context, this.canvas.width, this.canvas.height, color, time);
    context.restore();
  }

  private installShader(material: THREE.MeshBasicMaterial): void {
    material.customProgramCacheKey = () => "paper-bloom-color-blend-v1";
    material.onBeforeCompile = (shader) => {
      shader.uniforms.paperColorMap = this.colorMap;
      shader.uniforms.paperColorMix = this.mix;
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <map_pars_fragment>",
        "#include <map_pars_fragment>\nuniform sampler2D paperColorMap;\nuniform float paperColorMix;"
      ).replace("#include <map_fragment>", `
        #ifdef USE_MAP
          vec4 sampledDiffuseColor = texture2D(map, vMapUv);
          if (paperColorMix > 0.0) {
            vec4 coloredSample = texture2D(paperColorMap, vMapUv);
            sampledDiffuseColor = mix(sampledDiffuseColor, coloredSample, paperColorMix);
          }
          diffuseColor *= sampledDiffuseColor;
        #endif
      `);
    };
  }

  private releaseColorLayer(): void {
    this.mix.value = 0;
    this.colorMap.value = this.texture;
    this.colorTexture?.dispose();
    if (this.colorCanvas) {
      this.colorCanvas.width = 0;
      this.colorCanvas.height = 0;
    }
    this.colorCanvas = null;
    this.colorContext = null;
    this.colorTexture = null;
    this.currentColor = null;
  }
}
