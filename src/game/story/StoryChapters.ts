import type { StoryScene } from "../../engine/StoryScene.ts";
import { Scene01Awakening } from "../scenes/Scene01_Awakening.ts";
import { Scene02Frog } from "../scenes/Scene02_Frog.ts";
import { Scene03Butterflies } from "../scenes/Scene03_Butterflies.ts";
import { Scene04Orchard } from "../scenes/Scene04_Orchard.ts";
import { Scene05Fox } from "../scenes/Scene05_Fox.ts";
import { Scene07Bird } from "../scenes/Scene07_Bird.ts";
import { Scene08Rabbit } from "../scenes/Scene08_Rabbit.ts";
import { Scene09Toadstools } from "../scenes/Scene09_Toadstools.ts";
import { Scene06Sky } from "../scenes/Scene06_Sky.ts";
import { EpisodeScene } from "../episodes/EpisodeScene.ts";
import { NEW_EPISODES } from "../episodes/definitions.ts";

export interface StoryChapter {
  id: string;
  title: string;
  createScene: () => StoryScene;
}

/** The composition root for story order; all new stops lead to the sky finale. */
export function createStoryChapters(): StoryChapter[] {
  return [
    { id: "awakening", title: "The Grey Morning", createScene: () => new Scene01Awakening() },
    { id: "grey-pond", title: "The Grey Pond", createScene: () => new Scene02Frog() },
    { id: "butterflies", title: "Butterfly Wings", createScene: () => new Scene03Butterflies() },
    { id: "orchard", title: "The Orchard", createScene: () => new Scene04Orchard() },
    { id: "fox", title: "The Little Fox", createScene: () => new Scene05Fox() },
    { id: "bird", title: "The Little Bird", createScene: () => new Scene07Bird() },
    { id: "rabbit", title: "The Little Rabbit", createScene: () => new Scene08Rabbit() },
    { id: "toadstools", title: "The Toadstool Ring", createScene: () => new Scene09Toadstools() },
    ...NEW_EPISODES.map((definition) => ({
      id: definition.id,
      title: definition.title,
      createScene: () => new EpisodeScene(definition)
    })),
    { id: "painted-sky", title: "The Painted Sky", createScene: () => new Scene06Sky() }
  ];
}
