import type { ElementDefinition } from "../engine/index.ts";
import { easeOutCubic } from "../engine/index.ts";
import { PLAY_PROFILES } from "./play/PlayfulContent.ts";
import {
  drawApple,
  drawBackdrop,
  drawBird,
  drawBlossom,
  drawBranch,
  drawBush,
  drawButterfly,
  drawCanopy,
  drawCloud,
  drawFox,
  drawFrog,
  drawGirl,
  drawGrass,
  drawHill,
  drawHouse,
  drawLilyPad,
  drawMushroom,
  drawRabbit,
  drawRainbow,
  drawReed,
  drawRock,
  drawStem,
  drawSun,
  drawTrunk
} from "./art/Figures.ts";

/**
 * elements.ts
 * -----------
 * Paper Bloom's world, described as data. Each entry is an `ElementDefinition`
 * the engine's `buildElement` turns into a pop-up. Multi-part entries (trees,
 * flowers) unfold in stages via each part's `delay`. Add new props by adding
 * data here — no new builder functions required.
 */

/** A rolling hill shelf that folds up from the page. */
export const HILL: ElementDefinition = {
  play: PLAY_PROFILES.hill,
  parts: [{ draw: drawHill, width: 12, height: 2.6, pixelsPerUnit: 96, duration: 1.25 }],
  footprintRadius: 6,
  naturalColor: "#79ad48",
  idle: { amplitude: 0.006, frequency: 0.5 }
};

/**
 * A multi-stage tree: trunk springs up, two branches swing out about Z, then
 * the leafy canopy unfolds on top.
 */
export const TREE: ElementDefinition = {
  play: PLAY_PROFILES.tree,
  parts: [
    { draw: drawTrunk, width: 0.7, height: 2.2, duration: 0.85 },
    {
      draw: (c, w, h, color) => drawBranch(c, w, h, false, color),
      width: 1.3,
      height: 0.8,
      position: [0, 1.364, 0.01],
      meshOffset: [0.65, 0, 0],
      axis: "z",
      from: -Math.PI / 2,
      to: -0.12,
      delay: 0.65,
      duration: 0.5
    },
    {
      draw: (c, w, h, color) => drawBranch(c, w, h, true, color),
      width: 1.3,
      height: 0.8,
      position: [0, 1.1, 0.02],
      meshOffset: [-0.65, 0, 0],
      axis: "z",
      from: Math.PI / 2,
      to: 0.12,
      delay: 0.8,
      duration: 0.5
    },
    {
      draw: drawCanopy,
      width: 2.7,
      height: 2.5,
      position: [0, 2.09, -0.01],
      meshOffset: [0, 1.0, 0],
      delay: 1.0,
      duration: 0.7
    }
  ],
  footprintRadius: 1.35,
  naturalColor: "#5c9a3c",
  idle: { amplitude: 0.018, frequency: 0.6 }
};

/** A rounded shrub. */
export const BUSH: ElementDefinition = {
  play: PLAY_PROFILES.bush,
  parts: [{ draw: drawBush, width: 1.8, height: 1.1, duration: 0.7 }],
  footprintRadius: 0.9,
  naturalColor: "#5c9a3c",
  idle: { amplitude: 0.03, frequency: 1.0 }
};

/** A two-stage flower: the stem rises, then the blossom opens. */
export const FLOWER: ElementDefinition = {
  play: PLAY_PROFILES.flower,
  parts: [
    { draw: drawStem, width: 0.5, height: 0.9, duration: 0.55 },
    {
      draw: drawBlossom,
      width: 0.7,
      height: 0.7,
      position: [0, 0.855, 0.01],
      meshOffset: [0, 0.28, 0],
      delay: 0.5,
      duration: 0.5
    }
  ],
  footprintRadius: 0.35,
  idle: { amplitude: 0.05, frequency: 1.4 }
};

/** A stone that tips up from the page. */
export const ROCK: ElementDefinition = {
  play: PLAY_PROFILES.rock,
  parts: [{ draw: drawRock, width: 1.1, height: 0.7, duration: 0.55 }],
  footprintRadius: 0.55,
  naturalColor: "#a9a49a",
  idle: { amplitude: 0.006, frequency: 0.6 }
};

/** A tuft of grass. */
export const GRASS: ElementDefinition = {
  play: PLAY_PROFILES.grass,
  parts: [{ draw: drawGrass, width: 0.9, height: 0.6, duration: 0.5 }],
  footprintRadius: 0.45,
  naturalColor: "#79ad48",
  idle: { amplitude: 0.065, frequency: 1.6 }
};

/** A spotted toadstool. */
export const MUSHROOM: ElementDefinition = {
  play: PLAY_PROFILES.mushroom,
  parts: [{ draw: drawMushroom, width: 0.7, height: 0.7, duration: 0.5 }],
  footprintRadius: 0.35,
  naturalColor: "#d6452f",
  idle: { amplitude: 0.015, frequency: 0.9 }
};

/** A crooked cottage. */
export const HOUSE: ElementDefinition = {
  play: PLAY_PROFILES.house,
  parts: [{ draw: drawHouse, width: 3.4, height: 3.2, duration: 1.0 }],
  footprintRadius: 1.7,
  naturalColor: "#e7d3a4",
  idle: { amplitude: 0.008, frequency: 0.5 }
};

/** The heroine, whose rainbow hair is the only colour in the world. */
export const GIRL: ElementDefinition = {
  play: PLAY_PROFILES.mabli,
  parts: [
    {
      draw: drawGirl,
      width: 1.4,
      height: 2.1,
      pixelsPerUnit: 320,
      duration: 1.4,
      easing: easeOutCubic,
      animated: true
    }
  ],
  footprintRadius: 0.7,
  motion: { bob: 0.02, drift: 0.025, tilt: 0.025, breathe: 0.02, speed: 0.8, reactionHeight: 0.18 }
};

/**
 * The distant grey horizon — faint rolling hills and a pale sun. It also folds
 * up from the page; being furthest back it is the first thing to rise.
 */
export const BACKDROP: ElementDefinition = {
  play: PLAY_PROFILES.sky,
  parts: [
    {
      draw: drawBackdrop,
      width: 60,
      height: 18,
      pixelsPerUnit: 48,
      duration: 1.8,
      easing: easeOutCubic
    }
  ],
  footprintRadius: 30,
  shadow: false,
  idle: { amplitude: 0.004, frequency: 0.3 }
};

/** A little frog who has lost his colour — a colouring target that breathes. */
export const FROG: ElementDefinition = {
  play: PLAY_PROFILES.frog,
  parts: [
    { draw: drawFrog, width: 1.5, height: 1.3, duration: 0.8, animated: true }
  ],
  footprintRadius: 0.65,
  motion: { bob: 0.045, drift: 0, tilt: 0.025, breathe: 0.055, speed: 1.2, reactionHeight: 0.3 }
};

/** A flat lily pad (pond decoration). */
export const LILY_PAD: ElementDefinition = {
  play: PLAY_PROFILES.lilypad,
  parts: [{ draw: drawLilyPad, width: 1.7, height: 1.1, duration: 0.6 }],
  footprintRadius: 0.85,
  naturalColor: "#5c9a3c",
  idle: { amplitude: 0.02, frequency: 0.8 }
};

/** A tall reed with a cattail (pond decoration). */
export const REED: ElementDefinition = {
  play: PLAY_PROFILES.reed,
  parts: [{ draw: drawReed, width: 0.8, height: 2.4, duration: 0.7 }],
  footprintRadius: 0.4,
  naturalColor: "#79ad48",
  idle: { amplitude: 0.05, frequency: 1.2 }
};

/** A butterfly that floats above the ground, flaps and can be coloured in. */
export const BUTTERFLY: ElementDefinition = {
  play: PLAY_PROFILES.butterfly,
  parts: [
    {
      draw: drawButterfly,
      width: 1.1,
      height: 1.1,
      meshOffset: [0, 1.5, 0],
      duration: 0.7,
      animated: true
    }
  ],
  footprintRadius: 0.45,
  shadow: false,
  motion: { bob: 0.22, drift: 0.18, tilt: 0.12, breathe: 0.035, speed: 1.4, reactionHeight: 0.22 }
};

/** An apple that hangs in a tree (elevated) and can be coloured in. */
export const APPLE: ElementDefinition = {
  play: PLAY_PROFILES.apple,
  parts: [{ draw: drawApple, width: 0.9, height: 1.0, meshOffset: [0, 2.2, 0], duration: 0.6 }],
  footprintRadius: 0.35,
  shadow: false,
  idle: { amplitude: 0.03, frequency: 1.1 }
};

/** A little fox character that can be coloured orange. Blinks. */
export const FOX: ElementDefinition = {
  play: PLAY_PROFILES.fox,
  parts: [{ draw: drawFox, width: 1.7, height: 1.7, duration: 0.85, animated: true }],
  footprintRadius: 0.75,
  motion: { bob: 0.025, drift: 0.035, tilt: 0.045, breathe: 0.025, speed: 0.8, reactionHeight: 0.22 }
};

/** A plump little bird that bobs and can be coloured (a bluebird). */
export const BIRD: ElementDefinition = {
  play: PLAY_PROFILES.bird,
  parts: [{ draw: drawBird, width: 1.4, height: 1.4, duration: 0.8, animated: true }],
  footprintRadius: 0.6,
  motion: { bob: 0.07, drift: 0.065, tilt: 0.08, breathe: 0.025, speed: 1.6, reactionHeight: 0.24 }
};

/** A shy rabbit sitting up, ears flicking; can be coloured a soft brown. */
export const RABBIT: ElementDefinition = {
  play: PLAY_PROFILES.rabbit,
  parts: [{ draw: drawRabbit, width: 1.6, height: 1.8, duration: 0.85, animated: true }],
  footprintRadius: 0.7,
  motion: { bob: 0.09, drift: 0.025, tilt: 0.035, breathe: 0.03, speed: 1.1, reactionHeight: 0.36 }
};

/** A friendly sun high in the sky (elevated), colourable golden. Rays turn. */
export const SUN: ElementDefinition = {
  play: PLAY_PROFILES.sun,
  parts: [{ draw: drawSun, width: 2.2, height: 2.2, meshOffset: [0, 3.0, 0], duration: 1.0, animated: true }],
  footprintRadius: 0.9,
  shadow: false,
  idle: { amplitude: 0.006, frequency: 0.4 }
};

/** A cloud high in the sky (elevated), colourable with a soft tint. */
export const CLOUD: ElementDefinition = {
  play: PLAY_PROFILES.cloud,
  parts: [{ draw: drawCloud, width: 2.2, height: 1.3, meshOffset: [0, 3.2, 0], duration: 0.9 }],
  footprintRadius: 1.0,
  shadow: false,
  idle: { amplitude: 0.01, frequency: 0.5 }
};

/** A full-colour rainbow arc — the finale payoff (decoration, not a target). */
export const RAINBOW: ElementDefinition = {
  play: PLAY_PROFILES.rainbow,
  parts: [{ draw: drawRainbow, width: 16, height: 8, pixelsPerUnit: 40, meshOffset: [0, 3, 0], duration: 1.6, easing: easeOutCubic }],
  footprintRadius: 8,
  shadow: false,
  idle: { amplitude: 0.004, frequency: 0.3 }
};
