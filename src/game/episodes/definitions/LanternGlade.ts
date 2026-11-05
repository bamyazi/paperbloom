import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { FIREFLY } from "../EpisodeElements.ts";

export const LANTERN_GLADE: EpisodeDefinition = {
  id: "lantern-glade",
  title: "The Lantern Glade",
  setting: "glade",
  voice: "firefly",
  opening: "Evening came, and Mabli found a glade full of little fireflies.",
  prompt: "Our little lights have gone out. Tap each firefly to help us glow.",
  progress: "A little light! Help the other fireflies too.",
  ending: "Thank you, Mabli! Follow our lights to the rainbow hill.",
  targets: [-2.5, -1.25, 0, 1.25, 2.5].map((x, index) => ({
    element: FIREFLY,
    x,
    z: -11.8,
    scale: 1.05,
    lift: 0.45 + (2 - Math.abs(index - 2)) * 0.35,
    color: "#f8d655"
  }))
};
