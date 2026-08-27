# Paper Bloom

A stylised, first-person **pop-up storybook** game that runs in the browser with
WebGL. You don't steer — the camera glides forward through a hand-drawn,
black-and-white paper world that literally *folds up* into view around you, like
turning the pages of a pop-up book. Later chapters use point-and-click puzzles;
solving one lets the story move on and the next scene unfolds.

The story: a young girl whose hair holds every colour must bring colour back to a
world that has faded to ink and cream. Her rainbow hair is the only colour
anywhere in the world.

## Art style

Everything is generated procedurally on 2D canvases — **no image assets**. Scenery
is drawn as ink line-work on a fibrous cream "paper" texture, then mounted on flat
cutouts that hinge up from the page.

## Running it

```powershell
npm install
npm run dev      # start the Vite dev server and open the game
```

Other scripts:

```powershell
npm run build    # type-check and produce a production build in dist/
npm run preview  # preview the production build
```

## How it's put together

```
src/
  main.ts                 Entry point — boots the Game and the first scene
  engine/
    Game.ts               Renderer, camera, main loop, shared context
    SceneManager.ts       Swaps between story chapters
    StoryScene.ts         Base class for a chapter (pop-ups + camera + hotspots)
    CameraRig.ts          Automatic forward "reading" camera with hand-held bob
    PopupElement.ts       A cutout on a hinge that folds up from flat
    Interaction.ts        Raycast point-and-click hotspot layer
    Paper.ts              Procedural paper texture + ink cutout factory
    Hud.ts                Title card and caption overlay
  art/
    Figures.ts            Hand-drawn girl, trees, hills, house, backdrop
  scenes/
    Scene01_Awakening.ts  Chapter 1 — the grey morning (no puzzles yet)
  utils/
    Easing.ts             Easing helpers for folds and camera moves
```

### Adding the next chapter

1. Create a new class extending `StoryScene` in `src/scenes/`.
2. In `setup()`, configure `this.rig`, call `this.addPopup(...)` for scenery, and
   register hotspots via `this.ctx.interaction.register(...)` for puzzles.
3. When the puzzle is solved, call `this.complete()`.
4. Wire it up so `scene.onComplete` tells the `SceneManager` to `go(...)` to it.
