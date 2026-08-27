/**
 * Small collection of easing functions used for pop-up folds and camera moves.
 * All take and return a normalised value in the range [0, 1].
 */

export type Easing = (t: number) => number;

export const linear: Easing = (t) => t;

export const easeInOutCubic: Easing = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const easeOutBack: Easing = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export const easeOutCubic: Easing = (t) => 1 - Math.pow(1 - t, 3);

/** Clamp a value to the [min, max] range. */
export const clamp = (v: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, v));

/** Linear interpolation between a and b. */
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
