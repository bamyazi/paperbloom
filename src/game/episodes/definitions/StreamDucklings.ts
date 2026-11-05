import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { DUCKLING } from "../EpisodeElements.ts";

export const STREAM_DUCKLINGS: EpisodeDefinition = {
  id: "stream-ducklings",
  title: "The Duckling Parade",
  setting: "stream",
  opening: "At a quiet stream, four grey ducklings waited for their yellow feathers.",
  prompt: "Tap every duckling to make the little parade golden again.",
  progress: "Quack, quack! There are more ducklings to help.",
  ending: "Four fluffy ducklings waddled away together. What a cheerful yellow parade!",
  targets: [-2.4, -0.8, 0.8, 2.4].map((x) => ({
    element: DUCKLING,
    x,
    z: -11.8,
    scale: 1.1,
    color: "#f7cc45"
  }))
};
