import type { Object3D } from "three";

/** A scene owns each hotspot and unregisters it when its puzzle is solved. */
export interface Hotspot {
  object: Object3D;
  onClick: () => void;
  onHover?: (hovering: boolean) => void;
  cursor?: string;
  /** Allow a small screen-space margin around each visible cutout. */
  generous?: boolean;
}

export interface ScreenPoint {
  x: number;
  y: number;
}

export interface ViewportSize {
  width: number;
  height: number;
}
