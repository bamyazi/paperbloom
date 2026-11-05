import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { BEE } from "../EpisodeElements.ts";

export const BUSY_BEES: EpisodeDefinition = {
  id: "busy-bees",
  title: "The Busy Meadow",
  setting: "meadow",
  opening: "A tiny buzz led Mabli to a meadow. The bees had lost their golden stripes!",
  prompt: "Tap the little bees to bring back their sunshine colours.",
  progress: "Buzzy and bright! Help the other bees too.",
  ending: "The golden bees danced from flower to flower. The meadow was humming again!",
  targets: [-2.4, -0.8, 0.8, 2.4].map((x, index) => ({
    element: BEE,
    x,
    z: -11.8,
    scale: 1.15,
    lift: index % 2 === 0 ? 0.65 : 1.0,
    color: "#f3c94b"
  }))
};
