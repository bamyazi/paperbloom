import type { StoryVoice } from "../narration/StoryVoice.ts";

export interface PlayLine {
  text: string;
  speaker: StoryVoice;
}

/** Shared authored responses; per-instance cooldowns belong to the scene. */
export interface PlayProfile {
  id: string;
  lines: readonly PlayLine[];
  idleHints?: readonly PlayLine[];
  focusReplies?: Readonly<Record<string, readonly PlayLine[]>>;
  surprise?: string;
  /** Flat water stays on the page while its separate visitor/splash reacts. */
  reaction?: "bounce" | "still";
}
