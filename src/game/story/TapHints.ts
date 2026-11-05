import type { StoryVoice } from "../../engine/narration/StoryVoice.ts";

/** Story copy is passed into the hint controller at the composition root. */
export const TAP_HINTS = [
  {
    text: "Can you tap one? Let's give it some colour!",
    speaker: "narrator"
  },
  {
    text: "Tap the one with the twinkly light. You can do it!",
    speaker: "narrator"
  }
] as const satisfies readonly { text: string; speaker: StoryVoice }[];
