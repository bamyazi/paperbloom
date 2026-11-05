# Paper Bloom

A stylised, first-person **pop-up storybook** game that runs in the browser with
WebGL. You don't steer — the camera glides forward through a hand-drawn,
black-and-white paper world that literally *folds up* into view around you, like
turning the pages of a pop-up book. Tap or click the highlighted flowers, animals
and other objects to colour them in. Colouring every target in a chapter makes
the whole world bloom and turns the page to the next scene.

Individual targets colour in immediately. Finishing a chapter starts a slower
wave across the scenery, with confetti, sparkles and a rainbow ring around
Mabli's celebration. The colour wave spreads over 0.85 seconds, each piece fades
for 1.4 seconds, and the page waits 4 seconds of animation before turning.
The next page also waits for the closing narration to finish, followed by a
short quiet pause. Slow frames or backgrounding cannot skip the colour wave.

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

Run the regression tests with Node.js 24 or newer:

```powershell
npm test
```

### Reviewing the new chapters locally

Four extra episodes lead into the final **Painted Sky** chapter. Build and start
the local production preview before reviewing them:

```powershell
npm run build
npm run preview -- --port 4173
```

| Episode | Colouring puzzle | Local preview |
| --- | --- | --- |
| The Busy Meadow | Four bees regain their golden stripes | [Busy bees](http://localhost:4173/?debug&episode=busy-bees) |
| The Duckling Parade | Four ducklings regain yellow feathers | [Ducklings](http://localhost:4173/?debug&episode=stream-ducklings) |
| The Spiral Garden | Three snails receive pink, purple and turquoise shells | [Snails](http://localhost:4173/?debug&episode=snail-garden) |
| The Lantern Glade | Five fireflies relight their lanterns | [Fireflies](http://localhost:4173/?debug&episode=lantern-glade) |

These debug links select the starting episode; select **Open the book** and wait
for the camera to reach the puzzle. Check every target, the gradual scenery
wash and celebration, and the next page on desktop and a landscape phone view.
The ending can be checked with
[Painted Sky](http://localhost:4173/?debug&episode=painted-sky). Review local changes
before deploying them.
Add `&silent` for automated visual playthroughs so a second test tab does not
narrate over the player's preview.

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
It also reports CSS dimensions, pixel density, visual viewport scale and the
actual WebGL drawing buffer/viewport. These measurements stay on the device;
share a screenshot after a tap to diagnose a device-specific offset.

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
  main.ts                   Starts the game; ?debug&episode=<id> selects a chapter
  style.css                 Title, captions, overlays and responsive layout
  engine/
    Game.ts                 Renderer, camera and animation loop
    SceneManager.ts         Chapter lifecycle and page transitions
    StoryScene.ts           Chapter root, timed pop-ups and completion effects
    SceneTimings.ts         Scenery colour wave, fade and page-turn hold timings
    celebration/
      ChapterCelebration.ts Mabli's celebration, particles and their cleanup
      CelebrationParticles.ts Batched paper confetti and star particles
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
    Hud.ts                  Title lifecycle (inert after start), captions and closing card
    Narrator.ts             Browser speech synthesis for story text
    SoundEngine.ts          Synthesised effects and ambient music
    Transition.ts           Page-turn overlay
    Easing.ts               Animation easing functions
  game/
    story/
      StoryChapters.ts      createStoryChapters catalog, chapter IDs and order
    elements.ts             Reusable prop definitions, colours and fold timings
    art/
      Figures.ts            Canvas drawings of characters, plants and scenery
      Paper.ts              Procedural paper texture
      animals/              Bee, duckling, snail and firefly canvas drawings
    episodes/
      EpisodeDefinition.ts  Story text, setting and target-placement types
      EpisodeScene.ts       Shared camera, captions and colouring-puzzle lifecycle
      EpisodeLandscape.ts   Meadow, stream, garden and glade scenery
      EpisodeElements.ts    Reusable animal cutouts and their animation settings
      definitions.ts        Ordered collection of the new episode definitions
      definitions/          One independently editable file per episode
    scenery/
      Scenery.ts            Factory functions for assembled scenery pop-ups
    scenes/
      Scene01_Awakening.ts  Opening chapter and flower-colouring puzzle
      Scene02_Frog.ts       Further chapters each own their layout and puzzle
      ...
```

### Adding the next chapter

1. Add an `EpisodeDefinition` in `src/game/episodes/definitions/` with a unique
   ID, story text, setting and target placements. Existing definitions provide
   examples; `EpisodeScene` runs their camera, narration and puzzles.
2. Add new creature drawings in `src/game/art/animals/` and their cutout
   definitions in `EpisodeElements.ts` when needed. Change shared background
   scenery in `EpisodeLandscape.ts`.
3. Register the episode in `src/game/episodes/definitions.ts`. The complete
   chapter catalog and order live in `src/game/story/StoryChapters.ts`.
4. Build, test and open `?debug&episode=<id>` in the local preview. Complete the
   puzzle and check that the world wash finishes before the next page turns.

For a chapter with different mechanics, extend `StoryScene` in `src/game/scenes/`.
Configure `this.rig` before placing pop-ups, register the chapter's interaction,
and call `this.complete()` once its puzzle is solved. Completion owns the scenery
wash and celebration; change their timing in `src/engine/SceneTimings.ts` and
their visuals in `src/engine/celebration/ChapterCelebration.ts`.
