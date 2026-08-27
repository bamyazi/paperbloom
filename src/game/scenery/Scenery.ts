import * as THREE from "three";
import {
  CanvasDraw,
  createCutout,
  easeOutBack,
  easeOutCubic,
  Popup
} from "../../engine/index.ts";
import {
  drawBackdrop,
  drawBlossom,
  drawBranch,
  drawBush,
  drawCanopy,
  drawGirl,
  drawGrass,
  drawHill,
  drawHouse,
  drawMushroom,
  drawRock,
  drawStem,
  drawTrunk
} from "../art/Figures.ts";

/**
 * Scenery.ts
 * ----------
 * Factory helpers that assemble ready-to-place `Popup`s from paper cutouts.
 * Larger props (trees, flowers) are built as *multi-stage* pop-ups: the base
 * springs up first, then finer parts unfold on a delay.
 */

/** Tiny lift so a folded-flat cutout never z-fights the ground page. */
const GROUND_LIFT = 0.02;

type DrawFn = CanvasDraw;

function cut(draw: DrawFn, width: number, height: number, pixelsPerUnit = 256): THREE.Mesh {
  return createCutout({ draw, width, height, pixelsPerUnit, doubleSided: true });
}

function base(popup: Popup, footprintRadius: number): Popup {
  popup.footprintRadius = footprintRadius;
  popup.root.position.y = GROUND_LIFT;
  return popup;
}

/** A rolling hill shelf that folds up from the page. */
export function buildHill(scale = 1): Popup {
  const w = 12 * scale;
  const h = 2.6 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawHill, w, h, 96),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 1.25,
    easing: easeOutBack
  });
  return popup.setIdle(0.006, 0.4 + Math.random() * 0.2);
}

/**
 * A multi-stage tree: trunk springs up, two branches swing out from the trunk,
 * then the leafy canopy unfolds on top.
 */
export function buildTree(scale = 1): Popup {
  const trunkW = 0.7 * scale;
  const trunkH = 2.2 * scale;
  const canopyW = 2.7 * scale;
  const canopyH = 2.5 * scale;
  const branchW = 1.3 * scale;
  const branchH = 0.8 * scale;

  const popup = base(new Popup(), canopyW / 2);

  // Stage 1 — trunk.
  popup.addHinge({
    mesh: cut(drawTrunk, trunkW, trunkH),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, trunkH / 2, 0),
    duration: 0.85,
    easing: easeOutBack
  });

  // Stage 2 — branches swing outward from the trunk (rotate about Z).
  popup.addHinge({
    mesh: cut((c, w, h) => drawBranch(c, w, h, false), branchW, branchH),
    position: new THREE.Vector3(0, trunkH * 0.62, 0.01),
    meshOffset: new THREE.Vector3(branchW / 2, 0, 0),
    axis: "z",
    from: -Math.PI / 2,
    to: -0.12,
    delay: 0.65,
    duration: 0.5,
    easing: easeOutBack
  });
  popup.addHinge({
    mesh: cut((c, w, h) => drawBranch(c, w, h, true), branchW, branchH),
    position: new THREE.Vector3(0, trunkH * 0.5, 0.02),
    meshOffset: new THREE.Vector3(-branchW / 2, 0, 0),
    axis: "z",
    from: Math.PI / 2,
    to: 0.12,
    delay: 0.8,
    duration: 0.5,
    easing: easeOutBack
  });

  // Stage 3 — canopy unfolds up over the crown.
  popup.addHinge({
    mesh: cut(drawCanopy, canopyW, canopyH),
    position: new THREE.Vector3(0, trunkH * 0.95, -0.01),
    meshOffset: new THREE.Vector3(0, canopyH * 0.4, 0),
    from: -Math.PI / 2,
    to: 0,
    delay: 1.0,
    duration: 0.7,
    easing: easeOutBack
  });

  return popup.setIdle(0.018, 0.55 + Math.random() * 0.35);
}

/** A rounded shrub. */
export function buildBush(scale = 1): Popup {
  const w = 1.8 * scale;
  const h = 1.1 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawBush, w, h),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 0.7,
    easing: easeOutBack
  });
  return popup.setIdle(0.03, 0.9 + Math.random() * 0.5);
}

/** A two-stage flower: the stem rises, then the blossom opens. */
export function buildFlower(scale = 1): Popup {
  const stemW = 0.5 * scale;
  const stemH = 0.9 * scale;
  const headSize = 0.7 * scale;

  const popup = base(new Popup(), headSize / 2);
  popup.addHinge({
    mesh: cut(drawStem, stemW, stemH),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, stemH / 2, 0),
    duration: 0.55,
    easing: easeOutBack
  });
  popup.addHinge({
    mesh: cut(drawBlossom, headSize, headSize),
    position: new THREE.Vector3(0, stemH * 0.95, 0.01),
    meshOffset: new THREE.Vector3(0, headSize * 0.4, 0),
    from: -Math.PI / 2,
    to: 0,
    delay: 0.5,
    duration: 0.5,
    easing: easeOutBack
  });
  return popup.setIdle(0.05, 1.2 + Math.random() * 0.7);
}

/** A stone that tips up from the page. */
export function buildRock(scale = 1): Popup {
  const w = 1.1 * scale;
  const h = 0.7 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawRock, w, h),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 0.55,
    easing: easeOutBack
  });
  return popup.setIdle(0.006, 0.5 + Math.random() * 0.3);
}

/** A tuft of grass. */
export function buildGrass(scale = 1): Popup {
  const w = 0.9 * scale;
  const h = 0.6 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawGrass, w, h),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 0.5,
    easing: easeOutBack
  });
  return popup.setIdle(0.065, 1.4 + Math.random() * 0.8);
}

/** A spotted toadstool. */
export function buildMushroom(scale = 1): Popup {
  const w = 0.7 * scale;
  const h = 0.7 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawMushroom, w, h),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 0.5,
    easing: easeOutBack
  });
  return popup.setIdle(0.015, 0.8 + Math.random() * 0.5);
}

/** A crooked cottage. */
export function buildHouse(scale = 1): Popup {
  const w = 3.4 * scale;
  const h = 3.2 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawHouse, w, h),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 1.0,
    easing: easeOutBack
  });
  return popup.setIdle(0.008, 0.4 + Math.random() * 0.2);
}

/** The heroine, whose rainbow hair is the only colour in the world. */
export function buildGirl(scale = 1): Popup {
  const w = 1.4 * scale;
  const h = 2.1 * scale;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: createCutout({ draw: drawGirl, width: w, height: h, pixelsPerUnit: 320, doubleSided: true }),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 1.4,
    easing: easeOutCubic
  });
  return popup.setIdle(0.02, 0.6 + Math.random() * 0.2);
}

/**
 * The distant grey horizon — faint rolling hills and a pale sun. It also folds
 * up from the page; being furthest back it is the first thing to rise.
 */
export function buildBackdrop(): Popup {
  const w = 60;
  const h = 18;
  const popup = base(new Popup(), w / 2);
  popup.addHinge({
    mesh: cut(drawBackdrop, w, h, 48),
    position: new THREE.Vector3(0, 0, 0),
    meshOffset: new THREE.Vector3(0, h / 2, 0),
    duration: 1.8,
    easing: easeOutCubic
  });
  return popup.setIdle(0.004, 0.3);
}
