import "./style.css";
import { Game } from "./engine/index.ts";
import { createStoryChapters } from "./game/story/StoryChapters.ts";

const canvas = document.getElementById("game") as HTMLCanvasElement;
const game = new Game(canvas);

const chapters = createStoryChapters();

/** Create only the chapter being entered; completed canvas artwork can be freed. */
function openChapter(index: number, wipe = false): void {
  const scene = chapters[index].createScene();
  if (index + 1 < chapters.length) {
    scene.onComplete = () => openChapter(index + 1, true);
  }
  if (wipe) game.scenes.go(scene, { wipe: true });
  else game.start(scene);
}

// A debug-only entry point lets each authored episode be checked locally
// without replaying the entire book. Normal play always starts at chapter one.
const parameters = new URLSearchParams(location.search);
// Automated visual checks must not narrate over a separate player preview.
if (parameters.has("debug") && parameters.has("silent")) {
  game.narrator.setEnabled(false);
  game.sound.setEnabled(false);
}
const requestedEpisode = parameters.has("debug") ? parameters.get("episode") : null;
const firstChapterIndex = Math.max(0, chapters.findIndex((chapter) => chapter.id === requestedEpisode));

// Wait for the reader to open the book before the first page unfolds.
game.hud.onStart(() => {
  openChapter(firstChapterIndex);
});
