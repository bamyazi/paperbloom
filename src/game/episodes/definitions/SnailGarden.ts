import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { SNAIL } from "../EpisodeElements.ts";

export const SNAIL_GARDEN: EpisodeDefinition = {
  id: "snail-garden",
  title: "The Spiral Garden",
  setting: "garden",
  voice: "snail",
  opening: "After the rain, three little snails peeked out of the leaves.",
  prompt: "Hello, Mabli. Will you colour our little shells? Tap each snail.",
  progress: "Lovely! There are more little shells to colour.",
  ending: "Look at our pretty shells! Thank you, Mabli. Let's go slowly, together.",
  targets: [
    { x: -2.3, color: "#e989ac" },
    { x: 0, color: "#a879c4" },
    { x: 2.3, color: "#51b5ad" }
  ].map((target) => ({ ...target, element: SNAIL, z: -11.8, scale: 1.1 }))
};
