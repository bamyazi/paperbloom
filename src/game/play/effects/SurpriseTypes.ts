export type SurpriseKind = "fish" | "acorns" | "butterfly" | "snail" | "stars";
export type SurpriseArt = "fish" | "acorn" | "butterfly" | "snail" | "star" | "ripple" | "drop";
export type SurpriseMotion = "jump" | "fall" | "fly" | "peek" | "spark" | "ring" | "splash";

/** One reusable cutout and its short, analytic path in the camera's birth plane. */
export interface SurpriseParticle {
  art: SurpriseArt;
  motion: SurpriseMotion;
  x: number;
  y: number;
  width: number;
  height: number;
  duration: number;
  delay?: number;
  direction?: number;
  phase?: number;
}

export interface SurprisePose {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  angle: number;
  opacity: number;
}
