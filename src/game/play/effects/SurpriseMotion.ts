import * as THREE from "three";
import type { SurpriseMotion, SurpriseParticle, SurprisePose } from "./SurpriseTypes.ts";

type Path = (progress: number, particle: SurpriseParticle) => Partial<SurprisePose>;

const paths: Record<SurpriseMotion, Path> = {
  jump: (t, particle) => ({
    x: (particle.direction ?? 1) * t * 0.6,
    y: Math.sin(t * Math.PI) * 1.45,
    angle: (particle.direction ?? 1) * (0.25 - t * 0.5)
  }),
  fall: (t, particle) => ({
    x: (particle.direction ?? 1) * t * 0.28,
    y: -1.9 * t * t,
    angle: (particle.direction ?? 1) * t * 0.4
  }),
  fly: (t, particle) => ({
    x: (particle.direction ?? 1) * t * 1.2,
    y: t * 1.1 + Math.sin(t * Math.PI) * 0.4,
    scaleY: 0.9 + Math.sin(t * Math.PI * 8) * 0.1,
    angle: Math.sin(t * Math.PI * 4) * 0.14
  }),
  peek: (t, particle) => ({
    x: (particle.direction ?? 1) * THREE.MathUtils.smoothstep(t, 0, 0.6) * 0.28,
    y: THREE.MathUtils.smoothstep(t, 0, 0.2) * (1 - THREE.MathUtils.smoothstep(t, 0.7, 1)) * 0.45,
    angle: Math.sin(t * Math.PI * 2) * 0.06
  }),
  spark: (t, particle) => ({
    x: Math.cos(particle.phase ?? 0) * t * 0.95,
    y: Math.sin(particle.phase ?? 0) * t * 0.65 + Math.sin(t * Math.PI) * 0.4,
    angle: (particle.direction ?? 1) * t * 0.65
  }),
  ring: (t) => ({ scaleX: 0.35 + t * 1.9, scaleY: 0.35 + t * 1.9 }),
  splash: (t, particle) => ({
    x: (particle.direction ?? 1) * t * 0.5,
    y: Math.sin(t * Math.PI) * 0.55,
    scaleX: 0.9 - t * 0.45,
    scaleY: 0.9 - t * 0.45
  })
};

/** Age, rather than integrated velocity, determines every position and fade. */
export function surprisePose(particle: SurpriseParticle, age: number, reducedMotion = false): SurprisePose | null {
  const localAge = age - (particle.delay ?? 0);
  if (localAge < 0 || localAge >= particle.duration) return null;
  const t = localAge / particle.duration;
  const path = reducedMotion ? {} : paths[particle.motion](t, particle);
  return {
    x: particle.x + (path.x ?? 0),
    y: particle.y + (path.y ?? 0),
    scaleX: path.scaleX ?? 1,
    scaleY: path.scaleY ?? 1,
    angle: path.angle ?? 0,
    opacity: Math.min(1, 0.45 + t * 5) * (1 - THREE.MathUtils.smoothstep(t, 0.65, 1))
  };
}
