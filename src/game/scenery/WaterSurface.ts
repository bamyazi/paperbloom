import * as THREE from "three";
import { createCutout } from "../../engine/Cutout.ts";
import type { CanvasDraw } from "../../engine/Cutout.ts";
import { Popup } from "../../engine/Popup.ts";
import type { PlayProfile } from "../../engine/exploration/PlayProfile.ts";

export interface WaterSurfaceOptions {
  draw: CanvasDraw;
  width: number;
  depth: number;
  profile: PlayProfile;
  color?: string;
}

/** Paintable, tappable water stays parallel to the page throughout its lifecycle. */
export function createWaterSurface(options: WaterSurfaceOptions): Popup {
  const water = createCutout({
    draw: options.draw,
    width: options.width,
    height: options.depth,
    pixelsPerUnit: 64,
    doubleSided: true
  });
  water.rotation.x = -Math.PI / 2;
  const surface = new Popup().configureMotion({ enabled: false });
  surface.playProfile = options.profile;
  surface.naturalColor = options.color ?? "#a8cddd";
  surface.footprintRadius = options.width / 2;
  surface.root.position.y = 0.012;
  surface.addHinge({
    mesh: water,
    position: new THREE.Vector3(),
    meshOffset: new THREE.Vector3(),
    from: 0,
    to: 0,
    duration: 0.6
  });
  return surface;
}
