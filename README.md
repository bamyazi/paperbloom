# Paper Bloom

A stylised, first-person **pop-up storybook** game that runs in the browser with
WebGL. You don't steer — the camera glides forward through a hand-drawn,
black-and-white paper world that literally *folds up* into view around you, like
turning the pages of a pop-up book. Tap or click the highlighted flowers, animals
and other objects to colour them in. Colouring every target in a chapter makes
the whole world bloom and turns the page to the next scene.

The story: a young girl whose hair holds every colour must bring colour back to a
world that has faded to ink and cream. Her rainbow hair is the only colour
anywhere in the world.

## Play online

[Open Paper Bloom](https://bamyazi.github.io/paperbloom/) in a browser with WebGL
support, then select **Open the book**. On a phone, play in landscape orientation.

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

Run the interaction regression tests with Node.js 24 or newer:

```powershell
npm test
```

### Touch input and debugging

Puzzle targets become active once the camera reaches the clearing. Taps and
clicks use the canvas's displayed size and position, independently of pixel
density. Visible painted artwork takes priority over a neighbouring target's
padding; touch targets allow an 18px margin and mouse targets an 8px margin.
A tap can drift up to 30px, and simultaneous fingers are tracked separately.

Add `?debug` to the game URL (for example,
`http://localhost:5173/?debug`) to display the last tap as a red cross, the
projected art planes as green outlines and a hit summary. The overlay follows
the canvas viewport, making it useful when checking device rotation or sizing.

## Deployment

GitHub Pages publishes the built files from the root of the `gh-pages` branch.
In **Settings → Pages**, use **Deploy from a branch**, select **gh-pages** and
**/ (root)**. To update the game, run `npm ci` and `npm run build`, publish the
contents of `dist/` to `gh-pages`, and request a Pages build through the GitHub
Pages API (`POST /repos/bamyazi/paperbloom/pages/builds`) if needed. Keep application
source on `main`; preserve the existing history when updating `gh-pages`.

The optional `.github/workflows/deploy.yml` workflow builds on pushes to `main`
or manual dispatch, but GitHub Actions is currently disabled for the account.
It is not the active deployment method.

## How it's put together

```
src/
  main.ts                   Starts the game and wires the chapter order
  style.css                 Title, captions, overlays and responsive layout
  engine/
    Game.ts                 Renderer, camera and animation loop
    SceneManager.ts         Chapter lifecycle and page transitions
    StoryScene.ts           Chapter root, timed pop-ups and completion effects
    CameraRig.ts            Automatic camera movement and pauses
    Element.ts              Builds pop-ups from element definitions
    Popup.ts                Hinges, unfolding, highlighting and colouring
    Cutout.ts               Canvas artwork rendered as a Three.js mesh
    Interaction.ts          Compatibility exports for scene imports
    interaction/
      Hotspot.ts            Hotspot and screen-coordinate types
      InteractionManager.ts Pointer gestures, capture and hotspot registration
      HotspotPicker.ts      Painted-art picking and bounded CSS-pixel padding
      TapDiagnostics.ts     Optional ?debug tap and projected-art overlay
    ColoringPuzzle.ts       Tap-to-colour targets and puzzle completion
    Hud.ts                  Title card, captions and closing card
    Narrator.ts             Browser speech synthesis for story text
    SoundEngine.ts          Synthesised effects and ambient music
    Transition.ts           Page-turn overlay
    Easing.ts               Animation easing functions
  game/
    elements.ts             Reusable prop definitions, colours and fold timings
    art/
      Figures.ts            Canvas drawings of characters, plants and scenery
      Paper.ts              Procedural paper texture
    scenery/
      Scenery.ts            Factory functions for assembled scenery pop-ups
    scenes/
      Scene01_Awakening.ts  Opening chapter and flower-colouring puzzle
      Scene02_Frog.ts       Further chapters each own their layout and puzzle
      ...
```

### Adding the next chapter

1. Create a class extending `StoryScene` in `src/game/scenes/`. Use an existing
   chapter as a guide for layout, captions and camera timing.
2. In `setup()`, configure `this.rig` before placing scenery with
   `this.addPopup(...)`. Build reusable props from `src/game/elements.ts` using
   `buildElement`; add new drawings in `src/game/art/Figures.ts` when needed.
3. Once the camera reaches the puzzle, create a `ColoringPuzzle` with the chapter's
   `ColorTarget[]`, `this.ctx.interaction` and `this.ctx.sound`. It highlights
   targets, handles taps and clicks, and reports progress through `onColor`.
4. Call `this.complete()` from the puzzle's `onComplete` callback. This triggers
   Mabli's celebration, colours the scenery and fires the chapter's `onComplete`.
5. Instantiate the chapter in `src/main.ts` and wire it into the chapter order
   with `wipeTo(...)`, allowing the celebration to finish before the page turns.
