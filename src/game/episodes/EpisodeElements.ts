import type { ElementDefinition } from "../../engine/Element.ts";
import { drawBee } from "../art/animals/Bee.ts";
import { drawDuckling } from "../art/animals/Duckling.ts";
import { drawSnail } from "../art/animals/Snail.ts";
import { drawFirefly } from "../art/animals/Firefly.ts";

export const BEE: ElementDefinition = {
  parts: [{ draw: drawBee, width: 1.2, height: 1.0, duration: 0.8, animated: true }],
  footprintRadius: 0.6,
  shadow: false,
  naturalColor: "#f3c94b",
  motion: { bob: 0.17, drift: 0.14, tilt: 0.1, breathe: 0.025, speed: 1.8, reactionHeight: 0.22 }
};

export const DUCKLING: ElementDefinition = {
  parts: [{ draw: drawDuckling, width: 1.3, height: 1.4, duration: 0.8, animated: true }],
  footprintRadius: 0.65,
  naturalColor: "#f7cc45",
  motion: { bob: 0.045, drift: 0.07, tilt: 0.065, breathe: 0.025, speed: 1.7, reactionHeight: 0.2 }
};

export const SNAIL: ElementDefinition = {
  parts: [{ draw: drawSnail, width: 1.7, height: 1.2, duration: 0.8, animated: true }],
  footprintRadius: 0.85,
  naturalColor: "#a879c4",
  motion: { bob: 0.012, drift: 0.03, tilt: 0.025, breathe: 0.02, speed: 0.7, reactionHeight: 0.08 }
};

export const FIREFLY: ElementDefinition = {
  parts: [{ draw: drawFirefly, width: 1.0, height: 1.2, duration: 0.8, animated: true }],
  footprintRadius: 0.5,
  shadow: false,
  naturalColor: "#f8d655",
  motion: { bob: 0.2, drift: 0.17, tilt: 0.09, breathe: 0.035, speed: 1.2, reactionHeight: 0.22 }
};
