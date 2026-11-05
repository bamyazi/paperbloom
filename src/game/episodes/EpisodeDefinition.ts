import type { ElementDefinition } from "../../engine/Element.ts";
import type { StoryVoice } from "../../engine/narration/StoryVoice.ts";

export type EpisodeSetting = "meadow" | "stream" | "garden" | "glade";

export interface EpisodeTarget {
  element: ElementDefinition;
  x: number;
  z: number;
  scale: number;
  color: string;
  /** Extra height for flying creatures; the authored cutout keeps its own hinge. */
  lift?: number;
}

/** Story text and target placement belong to the episode, not the engine. */
export interface EpisodeDefinition {
  id: string;
  title: string;
  setting: EpisodeSetting;
  voice: StoryVoice;
  opening: string;
  prompt: string;
  progress: string;
  ending: string;
  targets: readonly EpisodeTarget[];
}
