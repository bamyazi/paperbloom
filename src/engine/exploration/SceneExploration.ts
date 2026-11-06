import type * as THREE from "three";
import type { InteractionManager } from "../interaction/InteractionManager.ts";
import type { Popup } from "../Popup.ts";
import type { PlayProfile } from "./PlayProfile.ts";
import type { PlayfulNarration } from "./PlayfulNarration.ts";
import type { TapWorldProjector } from "./TapWorldProjector.ts";

export interface ExplorationEffects {
  trigger(kind: string, object: THREE.Object3D): void;
  triggerAt(kind: string, position: THREE.Vector3): void;
  update(dt: number): void;
  dispose(): void;
}

/** Optional play never colours targets, increments counts, or advances a page. */
export class SceneExploration {
  private readonly registrations: Array<() => void> = [];
  private focus = "";
  private disposed = false;

  constructor(
    private readonly interaction: Pick<InteractionManager, "register" | "onMiss">,
    private readonly speech: PlayfulNarration,
    private readonly effects: ExplorationEffects,
    private readonly projector: Pick<TapWorldProjector, "project">,
    private readonly ground: PlayProfile,
    private readonly tapSound: () => void
  ) {
    this.registrations.push(interaction.onMiss((point) => {
      if (this.disposed) return;
      this.effects.triggerAt("stars", this.projector.project(point));
      this.tapSound();
      this.speech.say(this.ground, this.focus);
    }));
  }

  add(popup: Popup): void {
    const profile = popup.playProfile;
    if (!profile) return;
    this.registrations.push(this.interaction.register({
      object: popup.root,
      cursor: "pointer",
      generous: false,
      priority: -1,
      onClick: () => {
        if (this.disposed || !popup.root.visible) return;
        if (profile.reaction !== "still") popup.react();
        this.effects.trigger(profile.surprise ?? "stars", popup.root);
        this.tapSound();
        this.speech.say(profile, this.focus);
      }
    }));
  }

  startPuzzle(targets: readonly Popup[]): void {
    this.focus = targets[0]?.playProfile?.id ?? "";
  }

  puzzleProgress(): void {
    this.speech.cancel();
  }

  finishPuzzle(): void {
    // Reactions stay playful during the celebration, while its closing voice
    // and normal automatic page turn retain sole ownership of narration.
    this.speech.finish();
  }

  update(dt: number): void {
    if (this.disposed) return;
    this.speech.update(dt);
    this.effects.update(dt);
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const unregister of this.registrations) unregister();
    this.registrations.length = 0;
    this.speech.dispose();
    this.effects.dispose();
  }
}
