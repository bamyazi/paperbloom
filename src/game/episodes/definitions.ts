import type { EpisodeDefinition } from "./EpisodeDefinition.ts";
import { BUSY_BEES } from "./definitions/BusyBees.ts";
import { STREAM_DUCKLINGS } from "./definitions/StreamDucklings.ts";
import { SNAIL_GARDEN } from "./definitions/SnailGarden.ts";
import { LANTERN_GLADE } from "./definitions/LanternGlade.ts";

export const NEW_EPISODES: readonly EpisodeDefinition[] = [
  BUSY_BEES,
  STREAM_DUCKLINGS,
  SNAIL_GARDEN,
  LANTERN_GLADE
];
