import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { SNAIL } from "../EpisodeElements.ts";

export const SNAIL_GARDEN: EpisodeDefinition = {
  id: "snail-garden",
  title: "The Spiral Garden",
  setting: "garden",
  opening: "After a soft shower, Mabli found three snails with empty, colourless shells.",
  prompt: "Tap the snails to give each spiral shell its own colour.",
  progress: "Such a lovely spiral! Colour the other shells too.",
  ending: "Pink, purple and turquoise shells shone among the leaves. Even slow journeys can be wonderful!",
  targets: [
    { x: -2.3, color: "#e989ac" },
    { x: 0, color: "#a879c4" },
    { x: 2.3, color: "#51b5ad" }
  ].map((target) => ({ ...target, element: SNAIL, z: -11.8, scale: 1.1 }))
};
