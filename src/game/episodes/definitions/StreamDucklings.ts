import type { EpisodeDefinition } from "../EpisodeDefinition.ts";
import { DUCKLING } from "../EpisodeElements.ts";

export const STREAM_DUCKLINGS: EpisodeDefinition = {
  id: "stream-ducklings",
  title: "The Duckling Parade",
  setting: "stream",
  voice: "duckling",
  opening: "Mabli found four little ducklings beside the stream.",
  prompt: "Quack! Our yellow feathers are gone. Tap each duckling to help!",
  progress: "Quack, quack! Help my friends too!",
  ending: "We're fluffy and yellow again! Thank you, Mabli!",
  targets: [-2.4, -0.8, 0.8, 2.4].map((x) => ({
    element: DUCKLING,
    x,
    z: -11.8,
    scale: 1.1,
    color: "#f7cc45"
  }))
};
