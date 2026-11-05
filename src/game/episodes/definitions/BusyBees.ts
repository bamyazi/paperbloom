import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { BEE } from "../EpisodeElements.ts";

export const BUSY_BEES: EpisodeDefinition = {
  id: "busy-bees",
  title: "The Busy Meadow",
  setting: "meadow",
  voice: "bee",
  opening: "Mabli heard a little buzz in the meadow. Some bees needed her help.",
  prompt: "Buzz! Can you make us golden again? Tap each bee.",
  progress: "Buzz, buzz! My friends need gold too!",
  ending: "Thank you, Mabli! Now our meadow is buzzing with colour!",
  targets: [-2.4, -0.8, 0.8, 2.4].map((x, index) => ({
    element: BEE,
    x,
    z: -11.8,
    scale: 1.15,
    lift: index % 2 === 0 ? 0.65 : 1.0,
    color: "#f3c94b"
  }))
};
