/**
 * The Pop-up Storybook engine — public API.
 *
 * A small, art-agnostic engine for first-person "pop-up book" stories:
 *
 *  - `Game`            boots the renderer, camera and main loop.
 *  - `StoryScene`      base class for a chapter; owns its pop-ups and camera.
 *  - `SceneManager`    swaps between chapters.
 *  - `CameraRig`       hold-then-travel first-person camera.
 *  - `Popup`           multi-stage hinged unfold animation.
 *  - `buildElement`    assembles a `Popup` from a declarative element definition.
 *  - `createCutout`    turns your own canvas art into a foldable cutout.
 *  - `InteractionManager` point-and-click hotspots for puzzles.
 *  - `Hud`             title card + caption overlay.
 *
 * Author a story by extending `StoryScene`, drawing art via `createCutout`
 * callbacks, and composing `Popup`s with whatever hinge stages you like.
 */
export * from "./Game.ts";
export * from "./SceneManager.ts";
export * from "./Transition.ts";
export * from "./StoryScene.ts";
export * from "./CameraRig.ts";
export * from "./Popup.ts";
export * from "./Cutout.ts";
export * from "./Element.ts";
export * from "./Interaction.ts";
export * from "./ColoringPuzzle.ts";
export * from "./Hud.ts";
export * from "./Narrator.ts";
export * from "./SoundEngine.ts";
export * from "./Easing.ts";
