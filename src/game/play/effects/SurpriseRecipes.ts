import type { SurpriseKind, SurpriseParticle } from "./SurpriseTypes.ts";

const aliases: Record<string, SurpriseKind> = {
  pond: "fish", stream: "fish", water: "fish", fish: "fish",
  tree: "acorns", acorn: "acorns", acorns: "acorns",
  bush: "butterfly", butterfly: "butterfly", rock: "snail", snail: "snail",
  mushroom: "stars", house: "stars", rainbow: "stars", stars: "stars"
};

export function surpriseKind(kind: string): SurpriseKind {
  return aliases[kind] ?? "stars";
}

const recipes: Record<SurpriseKind, () => SurpriseParticle[]> = {
  fish: () => [
    { art: "fish", motion: "jump", x: 0, y: 0.25, width: 1.2, height: 0.85, duration: 1.8 },
    { art: "ripple", motion: "ring", x: 0, y: 0, width: 1.1, height: 1.1, duration: 1.1 },
    { art: "ripple", motion: "ring", x: 0.6, y: 0, width: 1.1, height: 1.1, duration: 0.75, delay: 1.6 },
    ...[-1, 1, -0.55, 0.55].map((direction, index): SurpriseParticle => ({
      art: "drop", motion: "splash", x: 0.6, y: 0.1, width: 0.14, height: 0.2,
      duration: 0.65, delay: 1.6 + index * 0.04, direction
    }))
  ],
  acorns: () => [-1, 0, 1].map((direction, index) => ({
    art: "acorn", motion: "fall", x: direction * 0.33, y: 0.3, width: 0.36, height: 0.45,
    duration: 1.6, delay: index * 0.12, direction
  })),
  butterfly: () => [{
    art: "butterfly", motion: "fly", x: 0, y: 0.3, width: 0.9, height: 0.72, duration: 2.1
  }],
  snail: () => [{
    art: "snail", motion: "peek", x: 0.25, y: 0.22, width: 1.1, height: 0.78, duration: 2.3
  }],
  stars: () => Array.from({ length: 6 }, (_, index) => ({
    art: "star", motion: "spark", x: 0, y: 0.15, width: 0.23 + index % 2 * 0.06,
    height: 0.23 + index % 2 * 0.06, duration: 1.4, phase: index / 6 * Math.PI * 2,
    direction: index % 2 === 0 ? 1 : -1
  }))
};

export function surpriseRecipe(kind: SurpriseKind, reducedMotion: boolean): SurpriseParticle[] {
  const particles = recipes[kind]();
  if (!reducedMotion) return particles;
  const visitor = { ...particles[0], delay: 0, duration: 1.8, y: particles[0].y + 0.35 };
  return [visitor, {
    art: "ripple", motion: "ring", x: visitor.x, y: visitor.y - 0.15,
    width: 1.15, height: 1.15, duration: 1.8
  }];
}
