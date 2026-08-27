import { SceneContext, StoryScene } from "./StoryScene.ts";
import { Transition } from "./Transition.ts";

export interface SceneChangeOptions {
  /** Play a wipe transition and rebuild the scene fresh. */
  wipe?: boolean;
}

/**
 * Swaps between chapters. With `wipe`, the screen is hidden by the transition
 * while the old scene is torn down and the new one entered, so every scene
 * starts anew behind the wipe.
 */
export class SceneManager {
  private current: StoryScene | null = null;

  constructor(
    private readonly ctx: SceneContext,
    private readonly transition?: Transition
  ) {}

  go(scene: StoryScene, options: SceneChangeOptions = {}): void {
    if (options.wipe && this.transition) {
      this.ctx.sound.pageTurn();
      this.transition.wipe(() => this.swap(scene));
    } else {
      this.swap(scene);
    }
  }

  private swap(scene: StoryScene): void {
    this.current?.exit();
    this.current = scene;
    scene.enter(this.ctx);
  }

  update(dt: number): void {
    this.current?.update(dt);
  }
}
