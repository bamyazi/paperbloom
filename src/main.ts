import "./style.css";
import { Game } from "./engine/index.ts";
import { Scene01Awakening } from "./game/scenes/Scene01_Awakening.ts";
import { Scene02Frog } from "./game/scenes/Scene02_Frog.ts";
import { Scene03Butterflies } from "./game/scenes/Scene03_Butterflies.ts";
import { Scene04Orchard } from "./game/scenes/Scene04_Orchard.ts";
import { Scene05Fox } from "./game/scenes/Scene05_Fox.ts";
import { Scene07Bird } from "./game/scenes/Scene07_Bird.ts";
import { Scene08Rabbit } from "./game/scenes/Scene08_Rabbit.ts";
import { Scene09Toadstools } from "./game/scenes/Scene09_Toadstools.ts";
import { Scene06Sky } from "./game/scenes/Scene06_Sky.ts";

const canvas = document.getElementById("game") as HTMLCanvasElement;
const game = new Game(canvas);

const scene1 = new Scene01Awakening();
const scene2 = new Scene02Frog();
const scene3 = new Scene03Butterflies();
const scene4 = new Scene04Orchard();
const scene5 = new Scene05Fox();
const sceneBird = new Scene07Bird();
const sceneRabbit = new Scene08Rabbit();
const sceneToadstools = new Scene09Toadstools();
const scene6 = new Scene06Sky();

// Each chapter wipes to the next once its colouring puzzle is solved — after a
// pause long enough to watch Mabli's celebration and the whole world bloom.
const wipeTo = (next: Parameters<typeof game.scenes.go>[0]): void => {
  window.setTimeout(() => game.scenes.go(next, { wipe: true }), 3200);
};
scene1.onComplete = () => wipeTo(scene2);
scene2.onComplete = () => wipeTo(scene3);
scene3.onComplete = () => wipeTo(scene4);
scene4.onComplete = () => wipeTo(scene5);
scene5.onComplete = () => wipeTo(sceneBird);
sceneBird.onComplete = () => wipeTo(sceneRabbit);
sceneRabbit.onComplete = () => wipeTo(sceneToadstools);
sceneToadstools.onComplete = () => wipeTo(scene6);
scene6.onComplete = () => {
  console.info("The story is complete — colour has returned to the world.");
};

// Wait for the reader to open the book before the first page unfolds.
game.hud.onStart(() => {
  game.start(scene1);
});
