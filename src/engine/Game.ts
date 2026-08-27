import * as THREE from "three";
import { InteractionManager } from "./Interaction.ts";
import { Hud } from "./Hud.ts";
import { Narrator } from "./Narrator.ts";
import { SoundEngine } from "./SoundEngine.ts";
import { SceneManager } from "./SceneManager.ts";
import { Transition } from "./Transition.ts";
import { SceneContext, StoryScene } from "./StoryScene.ts";

const PAPER_BACKGROUND = new THREE.Color("#efe9d8");

// Scenes are framed for a landscape view; targets spread horizontally. Holding
// a constant *horizontal* field of view keeps that whole width on screen in
// portrait too (the vertical FOV widens instead, capped to limit distortion).
const DESIGN_VFOV = 72;
const DESIGN_ASPECT = 1.6;
const MAX_VFOV = 120;

/**
 * A soft vertical gradient "sky" for the scene backdrop — a warm cream that
 * lifts to a paler, lightly sunlit top. Reads far nicer than a flat fill and
 * blends into the fog so the paper world melts into the distance.
 */
function makeSkyTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 4;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, "#f7f2e4"); // pale, sunlit top
  grad.addColorStop(0.55, "#efe9d8"); // the paper cream mid-tone
  grad.addColorStop(1, "#e4dcc6"); // a touch deeper toward the horizon
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Game
 * ----
 * Owns the renderer, camera and main loop, and exposes a `SceneContext` that
 * scenes use to reach shared services (interaction, HUD). It is deliberately
 * thin: all the storytelling lives inside the individual `StoryScene`s.
 */
export class Game {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly interaction: InteractionManager;
  readonly hud: Hud;
  readonly narrator: Narrator;
  readonly sound: SoundEngine;
  readonly scenes: SceneManager;

  private readonly clock = new THREE.Clock();
  private running = false;

  constructor(canvas: HTMLCanvasElement) {
    // Phones have weak GPUs but very high pixel densities; antialiasing and a
    // 2x+ pixel ratio there flood the fill rate and drop the frame rate, which
    // in turn slows the dt-driven animation clock. Trim both on mobile.
    const isMobile =
      typeof navigator !== "undefined" &&
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: false,
      powerPreference: "high-performance"
    });
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
    );
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene.background = makeSkyTexture();
    this.scene.fog = new THREE.Fog(PAPER_BACKGROUND, 18, 40);

    this.camera = new THREE.PerspectiveCamera(
      72,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    this.camera.position.set(0, 1.5, 0);

    this.interaction = new InteractionManager(this.camera, canvas);
    this.narrator = new Narrator();
    this.sound = new SoundEngine();
    this.hud = new Hud(this.narrator);

    const context: SceneContext = {
      scene: this.scene,
      camera: this.camera,
      interaction: this.interaction,
      hud: this.hud,
      narrator: this.narrator,
      sound: this.sound
    };
    this.scenes = new SceneManager(context, new Transition());

    this.resize();
    window.addEventListener("resize", this.resize);
    window.addEventListener("orientationchange", this.resize);
  }

  /** Load a scene and begin the render loop (idempotent). */
  start(scene: StoryScene): void {
    this.sound.resume();
    this.scenes.go(scene);
    if (this.running) return;
    this.running = true;
    this.clock.start();
    this.renderer.setAnimationLoop(this.tick);
  }

  private readonly tick = (): void => {
    // Clamp only against big jumps (tab switches). A low cap would make the
    // whole game run in slow motion on phones that render below 1/cap fps.
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.scenes.update(dt);
    this.hud.update(dt);
    this.renderer.render(this.scene, this.camera);
  };

  private readonly resize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    this.camera.aspect = aspect;
    if (aspect < DESIGN_ASPECT) {
      const hfovTan =
        Math.tan(THREE.MathUtils.degToRad(DESIGN_VFOV) / 2) * DESIGN_ASPECT;
      const vfov = THREE.MathUtils.radToDeg(2 * Math.atan(hfovTan / aspect));
      this.camera.fov = Math.min(vfov, MAX_VFOV);
    } else {
      this.camera.fov = DESIGN_VFOV;
    }
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };
}
