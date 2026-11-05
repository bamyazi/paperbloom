import { buildElement } from "../../engine/Element.ts";
import { CameraRig } from "../../engine/CameraRig.ts";
import { ColoringPuzzle } from "../../engine/ColoringPuzzle.ts";
import type { ColorTarget } from "../../engine/ColoringPuzzle.ts";
import type { Popup } from "../../engine/Popup.ts";
import { StoryScene } from "../../engine/StoryScene.ts";
import { GIRL } from "../elements.ts";
import type { EpisodeDefinition } from "./EpisodeDefinition.ts";
import { EpisodeLandscape } from "./EpisodeLandscape.ts";

/** Runs one independently authored episode on a shared, uncluttered paper stage. */
export class EpisodeScene extends StoryScene {
  private readonly targets: ColorTarget[] = [];
  private puzzleStarted = false;

  constructor(private readonly definition: EpisodeDefinition) {
    super();
  }

  protected setup(): void {
    this.rig = new CameraRig(this.ctx.camera, {
      speed: 1.6,
      length: 8,
      holdTime: 5.2,
      eyeHeight: 1.4,
      lookAhead: 5
    });
    this.rig.reset();
    new EpisodeLandscape(this.root, this.place).build(this.definition.setting);

    for (const target of this.definition.targets) {
      const popup = buildElement(target.element, { scale: target.scale });
      popup.root.position.y += target.lift ?? 0;
      this.place(popup, target.x, target.z, 1.3);
      this.targets.push({ popup, color: target.color });
    }
    this.girl = this.place(buildElement(GIRL, { scale: 1.05 }), -3.1, -15, 1.1);
    this.ctx.hud.showCaption(this.definition.opening, 5);
  }

  private readonly place = (popup: Popup, x: number, z: number, trigger = 0.8): Popup => {
    popup.root.position.x = x;
    popup.root.position.z = z;
    this.addPopup(popup, trigger);
    return popup;
  };

  protected onUpdate(): void {
    if (this.puzzleStarted || !this.rig.atEnd) return;
    this.puzzleStarted = true;
    this.rig.pause();
    this.ctx.hud.showCaption(this.definition.prompt, 0, this.definition.voice);
    new ColoringPuzzle({
      interaction: this.ctx.interaction,
      sound: this.ctx.sound,
      counting: this.ctx.hud.counting,
      guidance: this.ctx.guidance,
      targets: this.targets,
      onColor: (remaining) => {
        if (remaining > 0) this.ctx.hud.showCaption(this.definition.progress, 0, this.definition.voice);
      },
      onComplete: () => {
        this.ctx.hud.showCaption(this.definition.ending, 0, this.definition.voice);
        this.complete();
      }
    });
  }
}
