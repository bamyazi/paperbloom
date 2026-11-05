import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { FIREFLY } from "../EpisodeElements.ts";

export const LANTERN_GLADE: EpisodeDefinition = {
  id: "lantern-glade",
  title: "The Lantern Glade",
  setting: "glade",
  opening: "As evening settled, Mabli heard a whisper: our little lanterns have gone out!",
  prompt: "Tap the fireflies to help their tiny lanterns glow.",
  progress: "A little light! Find the other fireflies.",
  ending: "Five golden lanterns twinkled in the glade and showed Mabli the path to the hilltop.",
  targets: [-2.5, -1.25, 0, 1.25, 2.5].map((x, index) => ({
    element: FIREFLY,
    x,
    z: -11.8,
    scale: 1.05,
    lift: 0.45 + (2 - Math.abs(index - 2)) * 0.35,
    color: "#f8d655"
  }))
};
