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

Chapters with several things to tap also teach counting: each newly coloured
object adds one to a large number and its row of dots. The narrator counts
aloud, then the character's closing line finishes before the page turns.
Tapping the same object again does not add another count.

If the child pauses, the book waits eight quiet seconds after the instructions
or counting finish, then gently prompts and marks one remaining shape with a
gold halo and pointing finger. Reminders repeat after twelve more quiet seconds.
From the third reminder, the marked shape gently pulses to catch the child's
eye. Successful taps dismiss help before the next number starts.
Hidden tabs and portrait rotation pause help and restore a fresh grace period.

The story: a young girl whose hair holds every colour must bring colour back to a
world that has faded to ink and cream. Her rainbow hair is the only colour
anywhere in the world.

## Play online

[Open Paper Bloom](https://bamyazi.github.io/paperbloom/) in a browser with WebGL
support, then select **Open the book**. On a phone, play in landscape orientation.
At the end, the large **AGAIN** button turns back to the first chapter for a
fresh reading, with counting and hints reset.

Explore the scenery while looking for the counting targets. Trees rustle and
drop acorns, bushes reveal butterflies, rocks hide little snails, and tapping
water makes a fish jump with a splash. Other taps make paper sparkles and small
reactions; even empty paper responds. Frog, fox and rabbit have their own extra
dialogue and reminders. These optional taps never change the count: solving the
chapter's colouring puzzle still turns the page automatically after its ending.

## Art style

Everything is generated procedurally on 2D canvases — **no image assets**. Scenery
is drawn as ink line-work on a fibrous cream "paper" texture, then mounted on flat
cutouts that hinge up from the page.

Story voices are recorded WAV assets, with a separate cast for Mabli and each
woodland friend. Players download only the line being played; no voice service,
account or API key is needed. Browser speech is a fallback if a recording cannot
play. The free Kokoro model runs locally during authoring; see
[voice generation and casting](tools/voice_generation/README.md) for regeneration,
source licences and pronunciation notes.

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
npm run check:voices # check recorded text, speaker keys, WAV formats and hashes
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
Add `&no-tap-debug` when checking scenery surprises without the hit-box overlay.

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
    CutoutColorBlend.ts      Smooth GPU blend between ink and coloured artwork
    animation/PopupMotion.ts Continuous bobbing, breathing and tap reactions
    Interaction.ts          Compatibility exports for scene imports
    interaction/
      Hotspot.ts            Hotspot and screen-coordinate types
      InteractionManager.ts Pointer gestures, capture and hotspot registration
      HotspotPicker.ts      Painted-art picking and bounded CSS-pixel padding
      TapDiagnostics.ts     Optional ?debug tap and projected-art overlay
    ColoringPuzzle.ts       Tap-to-colour targets and puzzle completion
    Hud.ts                  Title lifecycle (inert after start), captions and closing card
    Narrator.ts             Recorded story lines, queue and browser speech fallback
    narration/              WAV lookup, audio lifecycle and fallback character voices
    learning/               Counting progress and ordered number narration
    guidance/               Quiet-time hint timing, eligible targets and dismissal
    exploration/            Optional tap reactions, owned asides and blank-paper projection
    SoundEngine.ts          Synthesised effects and ambient music
    Transition.ts           Page-turn overlay
    transition/             Curved paper leaf, animation and cancellation lifecycle
    Easing.ts               Animation easing functions
  game/
    audio/                  Generated text/speaker catalogue for recorded WAVs
    learning/               Counting display and visual number feedback
    presentation/           Static illustrated book cover
                            Target-following hint halo and CSS-pixel projection
    play/
      PlayfulContent.ts     Scenery replies, character chatter, hints and endings
      effects/              Fish, visitors, acorns and paper-star surprises
    story/
      StoryChapters.ts      createStoryChapters catalog, chapter IDs and order
      StoryPacing.ts        Shared forward camera speed for every chapter
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

### Changing the approach speed

`game/story/StoryPacing.ts` owns `STORY_CAMERA_SPEED`. Its value of `2.0` moves
the camera through the eight-unit approach in four seconds, after the existing
5.2-second pop-up hold. Change this one constant to adjust every chapter's pace.
The opening flower puzzle also waits for its narration to finish.

### Editing dialogue and voices

Use the third argument of `hud.showCaption(text, seconds, speaker)` to choose a
character. New episode definitions use `voice` for their prompt, encouragement
and closing line, while `opening` uses the narrator. After changing dialogue,
export and regenerate the corresponding WAVs using the voice authoring guide;
the catalogue keys include both the exact text and the speaker.

The static assets under `public/audio/narration/` are copied into the production
build and resolve relative to the book's URL, including `/paperbloom/` on GitHub
Pages. Keep model weights, virtual environments and preview builds outside the
repository. Captions and the browser fallback keep changed text playable while
its replacement recording is being authored.

### Changing the counting lesson

`engine/learning/CountingLesson.ts` owns the current count and number words;
`ColoringPuzzle` advances it only after a new target is coloured. Each scene
passes `hud.counting` into its puzzle, and `StoryScene` resets it on entry and
exit. Single-target chapters keep their usual dialogue without a counting badge.
Change the badge and dots in `game/learning/CountingDisplay.ts` and its CSS.

`NarrationQueue` keeps rapid taps in spoken order. During counting, the HUD shows
encouragement as text and queues the closing dialogue after the final number.
`Narrator.isSpeaking` includes pending lines, so chapter completion waits for
both the lesson and the closing dialogue. `main.ts` composes the display with
the engine through the small `CountingView` interface.

### Changing idle help

`engine/guidance/TapGuidance.ts` owns the quiet delays and third-reminder emphasis.
`game/story/TapHints.ts` owns the two recorded hint lines, which alternate while
the child is paused. A puzzle starts
guidance with its target list and reports each successful tap before counting;
`StoryScene` resets it on entry and exit. The main game loop updates it only
while the book is visible and ready to play, waiting whenever narration is busy.

`game/presentation/TapHintDisplay.ts` follows one remaining target. Its projection
module uses the current camera and displayed canvas rectangle, so density,
rotation and character motion cannot move the halo away from the artwork.
The halo is pointer-transparent and does not change picking. `Hud.showTapHint`
and the cancellation handle returned by `Narrator.speak` dismiss only the owned
hint, preserving any newer caption, counted number or closing dialogue.
`engine/animation/TapHintPulse.ts` owns the marked artwork's gentle warm-light pulse
and restores its material state when help ends. Reduced motion keeps help still.

### Restarting the book

The end card in `index.html` owns the **AGAIN** button. `Hud.onRestart` hides and
disables the card immediately, cancels closing narration and clears the count.
`main.ts` opens a fresh chapter-zero scene through the normal page turn, reusing
the existing renderer, audio and mute settings. `Scene06Sky.exit` restores its
borrowed fog/background colours so its finale tint cannot leak into a new book.
The end card is inert while hidden and `showEndCard` re-arms the button for every
subsequent reading.

### Adding an exploration response

Author a `PlayProfile` in `game/play/PlayfulContent.ts`, then reference it from an
element's `play` field in `game/elements.ts` or `EpisodeElements.ts`. Its `lines`
rotate as the child explores; `focusReplies` can identify a prop in the current
frog, fox or rabbit puzzle. Character `idleHints` replace generic help for that
chapter. All speech uses the same exact-text recording export workflow.

Each `StoryScene` owns one `SceneExploration` instance and disposes it before
freeing its artwork. Optional taps react and emit effects even while narration
is busy; `PlayfulNarration` waits for quiet and cancels only its own aside before
the next counted number. Finishing the puzzle silences further asides so its
closing voice and automatic page turn cannot be held up by exploration.

`PaperSurprises` owns a bounded pool of sprites and shared textures. Add a recipe
and analytic trajectory under `game/play/effects/` for a new surprise; it never
changes colouring or counting state. Ground taps project through the current
camera in CSS pixels. Puzzle and exploration hotspots can coexist on a character:
the puzzle action has priority, and its exact registration disposer leaves the
playful response available afterwards. There is no separate page-advance control.
