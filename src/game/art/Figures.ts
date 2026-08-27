import { INK, paperFill, sketchLine } from "./Paper.ts";

/**
 * Figures.ts
 * ----------
 * Hand-drawn artwork, all produced with the 2D canvas API. Each function fills
 * a paper silhouette and inks line-work on top. Everything is monochrome ink on
 * cream paper — the *only* colour anywhere in the world is the girl's hair.
 */

/** The seven strands of the girl's hair — the last colour left in the world. */
export const HAIR_COLOURS = [
  "#e4572e", // vermilion
  "#f3a712", // amber
  "#f7e733", // sunflower
  "#3fa34d", // leaf green
  "#2b8ac9", // sky blue
  "#4b3f9e", // indigo
  "#9b4dca" // violet
];

// Mabli's victory cheer — her hair whirls for a moment when a puzzle is solved.
let girlCheerStart = -1;
const GIRL_CHEER_DURATION = 2.6;

/** Kick off Mabli's celebration: her rainbow hair spins around. */
export function startGirlCheer(): void {
  girlCheerStart = performance.now() / 1000;
}

/** Cheer progress 0→1 while active, or -1 when idle. */
function girlCheerProgress(): number {
  if (girlCheerStart < 0) return -1;
  const e = performance.now() / 1000 - girlCheerStart;
  if (e > GIRL_CHEER_DURATION) return -1;
  return e / GIRL_CHEER_DURATION;
}

function inkStroke(ctx: CanvasRenderingContext2D, width: number): void {
  ctx.strokeStyle = INK;
  ctx.lineWidth = width;
}

/** Base cream used if the tiling paper pattern is unavailable for any reason. */
const PAPER_CREAM = "#f3eede";

/**
 * A natural palette used when a piece is coloured in. Monochrome (ink on cream)
 * is the world's resting state; these are the hues it blooms into.
 */
const PALETTE = {
  barkLight: "#9a6f42",
  bark: "#7c5327",
  barkDark: "#5c3d1d",
  leaf: "#5c9a3c",
  leafLight: "#7cbb54",
  leafDark: "#3f7a2a",
  grass: "#79ad48",
  grassDark: "#5c8f34",
  stone: "#a9a49a",
  stoneDark: "#7f7a70",
  wall: "#e7d3a4",
  wallDark: "#cdb078",
  roof: "#b8543a",
  roofDark: "#8f3d2a",
  door: "#6f4a2f",
  mushCap: "#d6452f",
  mushStem: "#efe6cf"
} as const;

/** Lighten (amount > 0) or darken (amount < 0) a #rrggbb colour. */
function shade(hex: string, amount: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const adj = (c: number): number =>
    Math.max(0, Math.min(255, Math.round(c + amount * 255)));
  const r = adj((n >> 16) & 255);
  const g = adj((n >> 8) & 255);
  const b = adj(n & 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function paperSilhouette(
  ctx: CanvasRenderingContext2D,
  path: () => void,
  color?: string | null
): void {
  ctx.save();
  path();
  if (color) {
    // Coloured state: a solid natural hue with a whisper of paper tooth over it.
    ctx.fillStyle = color;
    ctx.fill();
    const pattern = paperFill(ctx);
    if (pattern) {
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = pattern;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  } else {
    // Resting state: cream base, then overlay the fibrous pattern. If the
    // pattern could not be created, `fillStyle` keeps the cream base.
    ctx.fillStyle = PAPER_CREAM;
    ctx.fill();
    const pattern = paperFill(ctx);
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fill();
    }
  }
  ctx.restore();
}

/** Fill a path with a soft top-lit vertical shade over `base`, for round forms. */
function shadeVertical(
  ctx: CanvasRenderingContext2D,
  path: () => void,
  x: number,
  yTop: number,
  yBottom: number,
  light: string,
  dark: string
): void {
  ctx.save();
  path();
  const g = ctx.createLinearGradient(x, yTop, x, yBottom);
  g.addColorStop(0, light);
  g.addColorStop(1, dark);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.restore();
}

/**
 * Clip to `path` and wash a radial light→shadow gradient across it so a flat
 * silhouette reads as a rounded, top-lit volume. Works in mono (subtle ink
 * shading) or over a colour. The light sits up-left by convention.
 */
function volumeShade(
  ctx: CanvasRenderingContext2D,
  path: () => void,
  cx: number,
  cy: number,
  r: number,
  light: string,
  shadow: string
): void {
  ctx.save();
  path();
  ctx.clip();
  const g = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.4, r * 0.1, cx, cy, r * 1.25);
  g.addColorStop(0, light);
  g.addColorStop(1, shadow);
  ctx.fillStyle = g;
  ctx.fillRect(cx - r * 2, cy - r * 2, r * 4, r * 4);
  ctx.restore();
}

/** A soft, irregular blob of foliage — the building block of leafy crowns. */
function leafClump(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  seed: number,
  fill: string
): void {
  ctx.save();
  ctx.beginPath();
  const bumps = 9;
  for (let i = 0; i <= bumps; i++) {
    const a = (i / bumps) * Math.PI * 2;
    const rr = r * (0.78 + 0.22 * Math.sin(i * 3.1 + seed) * Math.cos(i * 1.7 + seed));
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr;
    if (i === 0) ctx.moveTo(x, y);
    else {
      const pa = ((i - 0.5) / bumps) * Math.PI * 2;
      const pr = r * (0.95 + 0.12 * Math.sin(i * 5.3 + seed));
      ctx.quadraticCurveTo(cx + Math.cos(pa) * pr, cy + Math.sin(pa) * pr, x, y);
    }
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.restore();
}

/** The heroine: a small girl in a plain pinafore with wild rainbow hair. */
export function drawGirl(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  _color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const headR = w * 0.14;
  const headY = h * 0.17;
  const chinY = headY + headR * 0.95;
  const shoulderY = headY + headR * 1.35;
  const waistY = h * 0.52;
  const hemY = h * 0.87;
  const shoulderHalf = w * 0.15;
  const waistHalf = w * 0.1;
  const hemHalf = w * 0.26;
  const neckHalf = headR * 0.33;

  // --- Rainbow hair (drawn first, behind the head), fuller and flowing ------
  // On a victory cheer the whole mane whirls around the head.
  const cheer = girlCheerProgress();
  ctx.save();
  if (cheer >= 0) {
    const ease = 1 - (1 - cheer) * (1 - cheer);
    ctx.translate(cx, headY);
    ctx.rotate(ease * Math.PI * 6);
    ctx.translate(-cx, -headY);
  }
  const strands = HAIR_COLOURS.length * 2;
  for (let i = 0; i < strands; i++) {
    const t = i / (strands - 1);
    const side = t < 0.5 ? -1 : 1;
    const spread = Math.abs(t - 0.5) * 2 * headR * 2.6;
    const ca = Math.PI + t * Math.PI;
    const startX = cx + Math.cos(ca) * headR * 0.95;
    const startY = headY + Math.sin(ca) * headR * 0.95 - headR * 0.2;

    const sway = Math.sin(time * 2.2 + i * 0.7) * headR * (0.5 + Math.abs(t - 0.5));
    const lift = Math.cos(time * 1.7 + i * 0.5) * headR * 0.16;
    const endX = cx + side * (headR * 0.5 + spread) + sway;
    const endY = headY + headR * (2.4 + Math.abs(t - 0.5) * 2.6) + lift;

    ctx.strokeStyle = HAIR_COLOURS[i % HAIR_COLOURS.length];
    ctx.lineWidth = w * 0.045;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
      cx + side * headR * 2.4 + sway * 0.6,
      headY + headR * 0.8,
      cx + side * headR * 1.6 + sway,
      headY + headR * 2.0 + lift,
      endX,
      endY
    );
    ctx.stroke();
  }
  ctx.restore();

  // --- Neck: a solid column from the chin down past the shoulder line so the
  //     head and body read as one piece (drawn before the dress covers it). ---
  paperSilhouette(ctx, () => {
    ctx.beginPath();
    ctx.moveTo(cx - neckHalf, chinY - headR * 0.1);
    ctx.lineTo(cx - neckHalf, shoulderY + headR * 0.3);
    ctx.lineTo(cx + neckHalf, shoulderY + headR * 0.3);
    ctx.lineTo(cx + neckHalf, chinY - headR * 0.1);
    ctx.closePath();
  });
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.moveTo(cx - neckHalf, chinY - headR * 0.1);
  ctx.lineTo(cx - neckHalf, shoulderY);
  ctx.moveTo(cx + neckHalf, chinY - headR * 0.1);
  ctx.lineTo(cx + neckHalf, shoulderY);
  ctx.stroke();

  // --- Dress: fitted bodice flaring into a skirt, its neckline hugging the
  //     neck so there is no gap between head and body. ------------------------
  const dress = (): void => {
    ctx.beginPath();
    // Left shoulder up to the neckline.
    ctx.moveTo(cx - shoulderHalf, shoulderY + headR * 0.15);
    ctx.quadraticCurveTo(cx - neckHalf * 1.4, shoulderY - headR * 0.05, cx - neckHalf, shoulderY - headR * 0.15);
    // Neckline scoop across the front.
    ctx.quadraticCurveTo(cx, shoulderY + headR * 0.35, cx + neckHalf, shoulderY - headR * 0.15);
    ctx.quadraticCurveTo(cx + neckHalf * 1.4, shoulderY - headR * 0.05, cx + shoulderHalf, shoulderY + headR * 0.15);
    // Right side to waist and skirt.
    ctx.quadraticCurveTo(cx + waistHalf * 1.15, (shoulderY + waistY) / 2, cx + waistHalf, waistY);
    ctx.quadraticCurveTo(cx + hemHalf * 0.7, (waistY + hemY) / 2, cx + hemHalf, hemY);
    for (let i = 0; i < 5; i++) {
      const x0 = cx + hemHalf - (i / 5) * hemHalf * 2;
      const x1 = cx + hemHalf - ((i + 1) / 5) * hemHalf * 2;
      ctx.quadraticCurveTo((x0 + x1) / 2, hemY + h * 0.03, x1, hemY);
    }
    // Left side back up to the shoulder.
    ctx.quadraticCurveTo(cx - hemHalf * 0.7, (waistY + hemY) / 2, cx - waistHalf, waistY);
    ctx.quadraticCurveTo(cx - waistHalf * 1.15, (shoulderY + waistY) / 2, cx - shoulderHalf, shoulderY + headR * 0.15);
    ctx.closePath();
  };
  paperSilhouette(ctx, dress);
  volumeShade(ctx, dress, cx - w * 0.05, h * 0.6, w * 0.3, "rgba(255,255,250,0.3)", "rgba(40,35,28,0.16)");
  inkStroke(ctx, w * 0.016);
  ctx.strokeStyle = INK;
  dress();
  ctx.stroke();

  // Waistline + a couple of skirt folds.
  ctx.lineWidth = w * 0.01;
  ctx.beginPath();
  ctx.moveTo(cx - waistHalf, waistY);
  ctx.quadraticCurveTo(cx, waistY + h * 0.01, cx + waistHalf, waistY);
  for (const fx of [-0.5, 0, 0.5]) {
    ctx.moveTo(cx + fx * hemHalf * 0.9, waistY + h * 0.03);
    ctx.lineTo(cx + fx * hemHalf * 1.2, hemY - h * 0.02);
  }
  ctx.stroke();

  // --- Arms with little hands ----------------------------------------------
  inkStroke(ctx, w * 0.03);
  ctx.lineCap = "round";
  for (const s of [-1, 1]) {
    const swing = Math.sin(time * 1.4 + (s > 0 ? 1 : 0)) * h * 0.01;
    ctx.beginPath();
    ctx.moveTo(cx + s * shoulderHalf * 0.92, shoulderY + headR * 0.25);
    ctx.quadraticCurveTo(
      cx + s * (shoulderHalf + w * 0.05),
      h * 0.44,
      cx + s * (waistHalf + w * 0.06),
      h * 0.58 + swing
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx + s * (waistHalf + w * 0.06), h * 0.59 + swing, w * 0.028, 0, Math.PI * 2);
    ctx.fillStyle = PAPER_CREAM;
    ctx.fill();
    ctx.stroke();
  }

  // --- Legs with shoes ------------------------------------------------------
  inkStroke(ctx, w * 0.03);
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cx + s * hemHalf * 0.35, hemY);
    ctx.lineTo(cx + s * hemHalf * 0.35, h * 0.96);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + s * hemHalf * 0.35 - w * 0.02, h * 0.96);
    ctx.quadraticCurveTo(
      cx + s * hemHalf * 0.35 + s * w * 0.06,
      h * 0.99,
      cx + s * hemHalf * 0.35 + s * w * 0.07,
      h * 0.975
    );
    ctx.lineTo(cx + s * hemHalf * 0.35 + w * 0.01, h * 0.955);
    ctx.closePath();
    ctx.fillStyle = INK;
    ctx.fill();
  }

  // --- Head + face (drawn last, on top of the neck) -------------------------
  const headPath = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, headY, headR * 0.92, headR, 0, 0, Math.PI * 2);
  };
  paperSilhouette(ctx, headPath);
  volumeShade(ctx, headPath, cx - headR * 0.25, headY - headR * 0.2, headR, "rgba(255,250,240,0.4)", "rgba(60,45,30,0.14)");
  inkStroke(ctx, w * 0.016);
  ctx.strokeStyle = INK;
  headPath();
  ctx.stroke();

  // Rosy cheeks.
  ctx.save();
  ctx.fillStyle = "rgba(230,120,110,0.35)";
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(cx + s * headR * 0.5, headY + headR * 0.28, headR * 0.2, headR * 0.14, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // Eyes with a little life, a nose, and a smile.
  const blink = time % 4 < 0.15;
  ctx.strokeStyle = INK;
  ctx.fillStyle = INK;
  for (const s of [-1, 1]) {
    const ex = cx + s * headR * 0.34;
    const ey = headY - headR * 0.02;
    if (blink) {
      inkStroke(ctx, w * 0.012);
      ctx.beginPath();
      ctx.moveTo(ex - headR * 0.14, ey);
      ctx.quadraticCurveTo(ex, ey + headR * 0.08, ex + headR * 0.14, ey);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(ex, ey, headR * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(ex - headR * 0.04, ey - headR * 0.04, headR * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = INK;
    }
  }
  inkStroke(ctx, w * 0.01);
  ctx.beginPath();
  ctx.moveTo(cx, headY + headR * 0.1);
  ctx.lineTo(cx - headR * 0.06, headY + headR * 0.26);
  ctx.stroke();
  inkStroke(ctx, w * 0.014);
  ctx.beginPath();
  ctx.arc(cx, headY + headR * 0.32, headR * 0.34, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
}

/** A rolling hill/ground shelf that the world stands on. */
export function drawHill(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  // A soft, rounded mound — a smooth dome that eases down to the ground at both
  // ends with no sharp corners.
  const crestY = (x: number): number => {
    const t = x / w; // 0..1
    // A gentle asymmetric hill profile, highest a little left of centre.
    const dome = Math.sin(Math.PI * Math.min(1, Math.max(0, t))) ** 1.4;
    return h - dome * h * 0.82;
  };
  const crestPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(0, h + 2);
    ctx.lineTo(0, crestY(0));
    for (let x = 0; x <= w; x += w / 48) ctx.lineTo(x, crestY(x));
    ctx.lineTo(w, h + 2);
    ctx.closePath();
  };
  paperSilhouette(ctx, crestPath, color ? PALETTE.grass : null);

  if (color) {
    shadeVertical(ctx, crestPath, w / 2, h * 0.1, h, PALETTE.grass, PALETTE.grassDark);
  }

  // Crest line.
  inkStroke(ctx, w * 0.005);
  ctx.strokeStyle = color ? PALETTE.grassDark : INK;
  ctx.beginPath();
  ctx.moveTo(0, crestY(0));
  for (let x = 0; x <= w; x += w / 48) ctx.lineTo(x, crestY(x));
  ctx.stroke();

  // Short grass tufts nestled along the smooth crest.
  ctx.strokeStyle = color ? PALETTE.grassDark : INK;
  ctx.lineWidth = w * 0.004;
  for (let i = 2; i < 46; i++) {
    const x = (i / 48) * w + Math.random() * (w / 60);
    const yc = crestY(x);
    if (yc > h * 0.94) continue; // skip the flat ends
    const len = h * 0.05 + Math.random() * h * 0.04;
    sketchLine(ctx, x, yc, x - len * 0.3, yc - len, 0.5);
    sketchLine(ctx, x, yc, x + len * 0.2, yc - len * 0.8, 0.5);
  }
}

/** A tree trunk on its own — the first stage of a pop-up tree. */
export function drawTrunk(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  const baseHalf = w * 0.34;
  const topHalf = w * 0.12;

  // A tapered trunk with a slight lean and a flared, rooted base, then two
  // limbs that fork upward — far more tree-like than a straight wedge.
  const sway = w * 0.05;
  const trunkPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx - baseHalf, h);
    ctx.quadraticCurveTo(cx - baseHalf * 0.5, h * 0.55, cx - topHalf + sway, h * 0.16);
    // left limb
    ctx.quadraticCurveTo(cx - topHalf * 2.2 + sway, h * 0.08, cx - topHalf * 2.6 + sway, h * -0.02);
    ctx.lineTo(cx - topHalf * 1.2 + sway, h * 0.12);
    // crown notch
    ctx.quadraticCurveTo(cx + sway, h * 0.05, cx + topHalf * 1.4 + sway, h * 0.1);
    // right limb
    ctx.lineTo(cx + topHalf * 2.6 + sway, h * -0.04);
    ctx.quadraticCurveTo(cx + topHalf * 2.0 + sway, h * 0.09, cx + topHalf + sway, h * 0.18);
    ctx.quadraticCurveTo(cx + baseHalf * 0.5, h * 0.55, cx + baseHalf, h);
    // root flare
    ctx.quadraticCurveTo(cx + baseHalf * 0.5, h * 0.985, cx + baseHalf * 0.28, h);
    ctx.quadraticCurveTo(cx, h * 0.97, cx - baseHalf * 0.28, h);
    ctx.quadraticCurveTo(cx - baseHalf * 0.5, h * 0.985, cx - baseHalf, h);
    ctx.closePath();
  };

  paperSilhouette(ctx, trunkPath, color ? PALETTE.bark : null);
  volumeShade(
    ctx,
    trunkPath,
    cx - baseHalf * 0.3,
    h * 0.5,
    h * 0.6,
    color ? "rgba(255,240,210,0.35)" : "rgba(255,250,235,0.0)",
    color ? "rgba(60,38,16,0.5)" : "rgba(45,38,28,0.32)"
  );

  // Outline.
  inkStroke(ctx, w * 0.02);
  ctx.strokeStyle = color ? PALETTE.barkDark : INK;
  trunkPath();
  ctx.stroke();

  // Curved bark grooves that follow the taper.
  ctx.lineWidth = w * 0.016;
  ctx.strokeStyle = color ? "rgba(70,45,20,0.6)" : "rgba(33,29,24,0.55)";
  for (const [ox, top, bot] of [
    [-0.06, 0.85, 0.2],
    [0.02, 0.9, 0.14],
    [0.1, 0.8, 0.24]
  ] as const) {
    ctx.beginPath();
    ctx.moveTo(cx + w * ox, h * bot);
    ctx.bezierCurveTo(
      cx + w * (ox + 0.04),
      h * (bot + (top - bot) * 0.4),
      cx + w * (ox - 0.02),
      h * (bot + (top - bot) * 0.7),
      cx + w * (ox + 0.02),
      h * top
    );
    ctx.stroke();
  }
}

/** A round, lumpy leaf canopy — the crown of a pop-up tree. */
export function drawCanopy(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  const cy = h * 0.5;
  const r = Math.min(w, h) * 0.46;

  // A leafy silhouette: a ring of overlapping scalloped clumps rather than one
  // smooth blob, so the crown edge looks like bunched foliage.
  const clumps: { x: number; y: number; r: number; s: number }[] = [];
  const ring = 7;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * Math.PI * 2 - Math.PI / 2;
    clumps.push({
      x: cx + Math.cos(a) * r * 0.62,
      y: cy + Math.sin(a) * r * 0.6,
      r: r * (0.42 + 0.08 * Math.sin(i * 2.7)),
      s: i * 1.9
    });
  }
  clumps.push({ x: cx, y: cy, r: r * 0.62, s: 5.5 });

  const base = color ? PALETTE.leaf : PAPER_CREAM;
  // Silhouette pass (also lays a paper tooth in mono).
  for (const c of clumps) leafClump(ctx, c.x, c.y, c.r, c.s, base);
  if (!color) {
    const pattern = paperFill(ctx);
    if (pattern) {
      ctx.save();
      ctx.globalAlpha = 0.9;
      for (const c of clumps) leafClump(ctx, c.x, c.y, c.r, c.s, pattern as unknown as string);
      ctx.restore();
    }
  }

  // Shaded foliage: darker clumps low/right, lighter clumps up/left.
  if (color) {
    for (const c of clumps) {
      const t = (c.y - (cy - r)) / (2 * r);
      leafClump(ctx, c.x, c.y, c.r * 0.86, c.s + 1, t > 0.55 ? PALETTE.leafDark : PALETTE.leaf);
    }
    for (const c of clumps.slice(0, 4)) {
      leafClump(ctx, c.x - c.r * 0.2, c.y - c.r * 0.25, c.r * 0.5, c.s + 3, PALETTE.leafLight);
    }
  }

  // Overall volume shading for a rounded crown.
  volumeShade(
    ctx,
    () => {
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.02, 0, Math.PI * 2);
    },
    cx,
    cy,
    r,
    "rgba(255,255,240,0.18)",
    color ? "rgba(30,60,20,0.35)" : "rgba(40,35,28,0.28)"
  );

  // Fine ink edges on the top clumps to define the leafy rim.
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = color ? PALETTE.leafDark : "rgba(33,29,24,0.7)";
  for (const c of clumps) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r * 0.92, Math.PI * 0.85, Math.PI * 2.15);
    ctx.stroke();
  }

  // Sparse leaf veins for texture.
  ctx.lineWidth = w * 0.006;
  ctx.strokeStyle = color ? "rgba(35,70,25,0.5)" : "rgba(33,29,24,0.4)";
  for (let i = 0; i < 18; i++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.random() * r * 0.75;
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr;
    sketchLine(ctx, x, y, x + w * 0.025, y - h * 0.02, 0.4);
  }
}

/** A side branch with small leaf clusters, rooted at the left edge. */
export function drawBranch(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  flip = false,
  color?: string | null
): void {
  ctx.save();
  if (flip) {
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
  }

  const cy = h * 0.55;

  // A tapered, slightly forking twig.
  const twig = (): void => {
    ctx.beginPath();
    ctx.moveTo(0, cy - h * 0.1);
    ctx.quadraticCurveTo(w * 0.4, h * 0.3, w * 0.72, h * 0.24);
    ctx.lineTo(w * 0.72, h * 0.34);
    ctx.quadraticCurveTo(w * 0.4, h * 0.42, 0, cy + h * 0.1);
    ctx.closePath();
  };
  paperSilhouette(ctx, twig, color ? PALETTE.bark : null);
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = color ? PALETTE.barkDark : INK;
  twig();
  ctx.stroke();
  // A small offshoot twig.
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.36);
  ctx.quadraticCurveTo(w * 0.5, h * 0.55, w * 0.58, h * 0.62);
  ctx.stroke();

  // A few overlapping leaves at the tip instead of one flat blob.
  const leaves: [number, number, number, number][] = [
    [0.7, 0.24, 0.26, -0.4],
    [0.82, 0.34, 0.22, 0.1],
    [0.66, 0.42, 0.2, 0.5],
    [0.58, 0.6, 0.16, 0.7]
  ];
  for (const [lx, ly, lr, rot] of leaves) {
    const leaf = (): void => {
      ctx.save();
      ctx.translate(w * lx, h * ly);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, h * lr * 1.5, h * lr * 0.7, 0, 0, Math.PI * 2);
      ctx.restore();
    };
    paperSilhouette(ctx, leaf, color ? PALETTE.leaf : null);
    inkStroke(ctx, w * 0.008);
    ctx.strokeStyle = color ? PALETTE.leafDark : INK;
    leaf();
    ctx.stroke();
    // midrib
    ctx.beginPath();
    ctx.moveTo(w * lx - Math.cos(rot) * h * lr * 1.3, h * ly - Math.sin(rot) * h * lr * 1.3);
    ctx.lineTo(w * lx + Math.cos(rot) * h * lr * 1.3, h * ly + Math.sin(rot) * h * lr * 1.3);
    ctx.stroke();
  }

  ctx.restore();
}

/** A crooked cottage with a peaked roof and a round door. */
export function drawHouse(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const bodyTop = h * 0.42;

  // Walls.
  paperSilhouette(
    ctx,
    () => {
      ctx.beginPath();
      ctx.moveTo(w * 0.12, h * 0.96);
      ctx.lineTo(w * 0.12, bodyTop);
      ctx.lineTo(w * 0.88, bodyTop);
      ctx.lineTo(w * 0.88, h * 0.96);
      ctx.closePath();
    },
    color ? PALETTE.wall : null
  );
  if (color) {
    shadeVertical(
      ctx,
      () => {
        ctx.beginPath();
        ctx.rect(w * 0.12, bodyTop, w * 0.76, h * 0.54);
      },
      w / 2,
      bodyTop,
      h * 0.96,
      "rgba(255,248,225,0.25)",
      "rgba(120,90,45,0.28)"
    );
  }

  // Peaked roof (drawn as its own coloured shape).
  paperSilhouette(
    ctx,
    () => {
      ctx.beginPath();
      ctx.moveTo(w * 0.06, bodyTop + h * 0.02);
      ctx.lineTo(w * 0.5, h * 0.12);
      ctx.lineTo(w * 0.94, bodyTop + h * 0.02);
      ctx.closePath();
    },
    color ? PALETTE.roof : null
  );
  if (color) {
    shadeVertical(
      ctx,
      () => {
        ctx.beginPath();
        ctx.moveTo(w * 0.06, bodyTop + h * 0.02);
        ctx.lineTo(w * 0.5, h * 0.12);
        ctx.lineTo(w * 0.94, bodyTop + h * 0.02);
        ctx.closePath();
      },
      w / 2,
      h * 0.12,
      bodyTop,
      "rgba(255,235,220,0.2)",
      "rgba(90,35,25,0.3)"
    );
  }

  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = color ? PALETTE.roofDark : INK;
  ctx.beginPath();
  ctx.moveTo(w * 0.06, bodyTop + h * 0.02);
  ctx.lineTo(w * 0.5, h * 0.12);
  ctx.lineTo(w * 0.94, bodyTop + h * 0.02);
  ctx.stroke();

  ctx.strokeStyle = color ? PALETTE.wallDark : INK;
  ctx.beginPath();
  ctx.moveTo(w * 0.12, h * 0.96);
  ctx.lineTo(w * 0.12, bodyTop);
  ctx.lineTo(w * 0.88, bodyTop);
  ctx.lineTo(w * 0.88, h * 0.96);
  ctx.lineTo(w * 0.12, h * 0.96);
  ctx.stroke();

  // A little brick chimney.
  paperSilhouette(
    ctx,
    () => {
      ctx.beginPath();
      ctx.rect(w * 0.7, h * 0.2, w * 0.1, h * 0.16);
    },
    color ? PALETTE.roofDark : null
  );

  // Round door.
  paperSilhouette(
    ctx,
    () => {
      ctx.beginPath();
      ctx.moveTo(w * 0.37, h * 0.96);
      ctx.lineTo(w * 0.37, h * 0.74);
      ctx.arc(w * 0.5, h * 0.74, w * 0.13, Math.PI, 0);
      ctx.lineTo(w * 0.63, h * 0.96);
      ctx.closePath();
    },
    color ? PALETTE.door : null
  );
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.moveTo(w * 0.37, h * 0.96);
  ctx.lineTo(w * 0.37, h * 0.74);
  ctx.arc(w * 0.5, h * 0.74, w * 0.13, Math.PI, 0);
  ctx.lineTo(w * 0.63, h * 0.96);
  ctx.stroke();

  // Two little windows with warm panes.
  for (const wx of [0.28, 0.72]) {
    paperSilhouette(
      ctx,
      () => {
        ctx.beginPath();
        ctx.rect(w * wx - w * 0.06, h * 0.58, w * 0.12, h * 0.12);
      },
      color ? "#f6dd82" : null
    );
    ctx.strokeStyle = INK;
    ctx.strokeRect(w * wx - w * 0.06, h * 0.58, w * 0.12, h * 0.12);
    ctx.beginPath();
    ctx.moveTo(w * wx, h * 0.58);
    ctx.lineTo(w * wx, h * 0.7);
    ctx.moveTo(w * wx - w * 0.06, h * 0.64);
    ctx.lineTo(w * wx + w * 0.06, h * 0.64);
    ctx.stroke();
  }
}

/** A distant backdrop: a horizon of faint rolling hills for depth. */
export function drawBackdrop(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  paperSilhouette(ctx, () => {
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
  });

  ctx.strokeStyle = "rgba(33, 29, 24, 0.35)";
  for (let layer = 0; layer < 3; layer++) {
    const baseY = h * (0.55 + layer * 0.14);
    const amp = h * (0.12 - layer * 0.03);
    ctx.lineWidth = w * 0.002;
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    for (let x = 0; x <= w; x += w / 40) {
      const y = baseY - Math.sin((x / w) * Math.PI * (2 + layer)) * amp;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // A pale sun near the top.
  ctx.strokeStyle = "rgba(33, 29, 24, 0.3)";
  ctx.lineWidth = w * 0.002;
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.22, h * 0.09, 0, Math.PI * 2);
  ctx.stroke();
}

/** A low, rounded shrub built from a few overlapping leaf lobes. */
export function drawBush(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  // A mounded shrub built from scalloped leaf clumps with a shaded, rounded
  // body and a scatter of individual leaves catching the light.
  const clumps = [
    { x: w * 0.24, y: h * 0.68, r: h * 0.32, s: 0.4 },
    { x: w * 0.76, y: h * 0.66, r: h * 0.36, s: 1.7 },
    { x: w * 0.5, y: h * 0.46, r: h * 0.42, s: 3.1 },
    { x: w * 0.42, y: h * 0.72, r: h * 0.3, s: 4.6 },
    { x: w * 0.62, y: h * 0.74, r: h * 0.26, s: 5.9 }
  ];

  const base = color ? PALETTE.leaf : PAPER_CREAM;
  for (const c of clumps) leafClump(ctx, c.x, c.y, c.r, c.s, base);
  if (!color) {
    const pattern = paperFill(ctx);
    if (pattern) {
      for (const c of clumps) leafClump(ctx, c.x, c.y, c.r, c.s, pattern as unknown as string);
    }
  }

  if (color) {
    for (const c of clumps) {
      if (c.y > h * 0.6) leafClump(ctx, c.x, c.y + c.r * 0.15, c.r * 0.82, c.s + 2, PALETTE.leafDark);
    }
    leafClump(ctx, w * 0.44, h * 0.36, h * 0.2, 2.2, PALETTE.leafLight);
  }

  // Rounded volume shading over the whole mound.
  volumeShade(
    ctx,
    () => {
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.6, w * 0.5, h * 0.42, 0, 0, Math.PI * 2);
    },
    w * 0.5,
    h * 0.6,
    h * 0.5,
    "rgba(255,255,240,0.16)",
    color ? "rgba(25,55,18,0.34)" : "rgba(40,35,28,0.26)"
  );

  // Leafy top edges.
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = color ? PALETTE.leafDark : "rgba(33,29,24,0.7)";
  for (const c of clumps) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r * 0.9, Math.PI * 0.9, Math.PI * 2.1);
    ctx.stroke();
  }

  // A few little leaf blades for detail.
  ctx.lineWidth = w * 0.008;
  ctx.strokeStyle = color ? PALETTE.leafDark : INK;
  for (let i = 0; i < 14; i++) {
    const x = w * (0.18 + Math.random() * 0.64);
    const y = h * (0.3 + Math.random() * 0.44);
    sketchLine(ctx, x, y, x + w * 0.02, y - h * 0.05, 0.5);
  }
}

/** A slender flower stem with a pair of leaves — turns green once coloured. */
export function drawStem(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  // A gently curved stalk reads more like a growing stem than a ruled line.
  ctx.strokeStyle = color ? PALETTE.grassDark : INK;
  ctx.lineWidth = w * 0.14;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(cx, h);
  ctx.quadraticCurveTo(cx - w * 0.12, h * 0.5, cx, h * 0.06);
  ctx.stroke();

  // Two leaves as filled blades rather than thick strokes.
  const leaf = (dir: number, at: number, len: number): void => {
    const bx = cx;
    const by = h * at;
    const path = (): void => {
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(
        bx + dir * w * len * 0.7,
        by - h * 0.02,
        bx + dir * w * len,
        by - h * len * 0.5
      );
      ctx.quadraticCurveTo(bx + dir * w * len * 0.5, by + h * 0.02, bx, by + h * 0.01);
      ctx.closePath();
    };
    paperSilhouette(ctx, path, color ? PALETTE.grass : null);
    inkStroke(ctx, w * 0.02);
    ctx.strokeStyle = color ? PALETTE.grassDark : INK;
    path();
    ctx.stroke();
  };
  leaf(-1, 0.58, 0.42);
  leaf(1, 0.42, 0.4);
}

/** A flower blossom. Monochrome by default; `color` fills the petals in. */
export function drawBlossom(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const cy = h * 0.5;
  const petals = 8;
  const ring = Math.min(w, h) * 0.16;
  const petalLen = Math.min(w, h) * 0.34;
  const petalWid = Math.min(w, h) * 0.13;
  const paper = (): string | CanvasPattern => paperFill(ctx) ?? "#f3eede";

  // A shaded, teardrop petal pointing outward from the centre.
  const drawPetal = (a: number, scale: number, fill: string | CanvasPattern): void => {
    const bx = cx + Math.cos(a) * ring;
    const by = cy + Math.sin(a) * ring;
    const tx = cx + Math.cos(a) * (ring + petalLen * scale);
    const ty = cy + Math.sin(a) * (ring + petalLen * scale);
    const nx = Math.cos(a + Math.PI / 2);
    const ny = Math.sin(a + Math.PI / 2);
    const path = (): void => {
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(
        bx + nx * petalWid * scale + (tx - bx) * 0.5,
        by + ny * petalWid * scale + (ty - by) * 0.5,
        tx,
        ty
      );
      ctx.quadraticCurveTo(
        bx - nx * petalWid * scale + (tx - bx) * 0.5,
        by - ny * petalWid * scale + (ty - by) * 0.5,
        bx,
        by
      );
      ctx.closePath();
    };
    ctx.save();
    path();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.restore();
    // A soft tip-lit shade along the petal.
    if (color) {
      volumeShade(ctx, path, tx, ty, petalLen * 0.6, "rgba(255,255,255,0.35)", "rgba(0,0,0,0.14)");
    }
    inkStroke(ctx, w * 0.012);
    ctx.strokeStyle = color ? "rgba(90,50,20,0.35)" : INK;
    path();
    ctx.stroke();
  };

  // Back layer (slightly rotated, smaller) then front layer for fullness.
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2 + Math.PI / petals;
    drawPetal(a, 0.82, color ? shade(color, -0.12) : paper());
  }
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    drawPetal(a, 1, color ?? paper());
  }

  // Domed centre with stamen speckle.
  const centre = (): void => {
    ctx.beginPath();
    ctx.arc(cx, cy, ring * 1.15, 0, Math.PI * 2);
  };
  ctx.save();
  centre();
  ctx.fillStyle = color ? "#f5b731" : paper();
  ctx.fill();
  ctx.restore();
  if (color) {
    volumeShade(ctx, centre, cx, cy, ring * 1.15, "rgba(255,240,180,0.6)", "rgba(150,90,10,0.4)");
  }
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? "#a9781a" : INK;
  centre();
  ctx.stroke();
  ctx.fillStyle = color ? "#7c5510" : INK;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + time;
    const rr = ring * (0.3 + 0.55 * ((i * 7) % 5) / 5);
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, w * 0.013, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** A small faceted stone. */
export function drawRock(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const rockPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(w * 0.08, h);
    ctx.lineTo(w * 0.02, h * 0.6);
    ctx.lineTo(w * 0.32, h * 0.24);
    ctx.lineTo(w * 0.7, h * 0.32);
    ctx.lineTo(w * 0.96, h * 0.66);
    ctx.lineTo(w * 0.9, h);
    ctx.closePath();
  };
  paperSilhouette(ctx, rockPath, color ? PALETTE.stone : null);
  if (color) {
    // A shadowed facet on the right gives the stone some weight.
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.32);
    ctx.lineTo(w * 0.96, h * 0.66);
    ctx.lineTo(w * 0.9, h);
    ctx.lineTo(w * 0.4, h);
    ctx.closePath();
    ctx.fillStyle = PALETTE.stoneDark;
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.restore();
  }
  inkStroke(ctx, w * 0.02);
  ctx.strokeStyle = color ? PALETTE.stoneDark : INK;
  ctx.beginPath();
  ctx.moveTo(w * 0.02, h * 0.6);
  ctx.lineTo(w * 0.32, h * 0.24);
  ctx.lineTo(w * 0.7, h * 0.32);
  ctx.lineTo(w * 0.96, h * 0.66);
  ctx.stroke();
  // Facet creases.
  ctx.lineWidth = w * 0.012;
  sketchLine(ctx, w * 0.32, h * 0.24, w * 0.4, h * 0.7, 0.6);
  sketchLine(ctx, w * 0.7, h * 0.32, w * 0.62, h * 0.72, 0.6);
}

/** A tuft of grass blades. */
export function drawGrass(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  // Tapered, curved blades (filled, not ruled) fanning from a common tuft.
  const blades = 9;
  for (let i = 0; i < blades; i++) {
    const t = i / (blades - 1);
    const rootX = w * (0.34 + t * 0.32) + (Math.random() - 0.5) * w * 0.04;
    const dir = t < 0.5 ? -1 : 1;
    const spread = Math.abs(t - 0.5) * 2;
    const tipX = rootX + dir * w * (0.08 + spread * 0.32) + (Math.random() - 0.5) * w * 0.06;
    const tipY = h * (0.08 + Math.random() * 0.22);
    const wid = w * (0.05 - spread * 0.015);
    const path = (): void => {
      ctx.beginPath();
      ctx.moveTo(rootX - wid, h);
      ctx.quadraticCurveTo((rootX + tipX) / 2 - dir * w * 0.02, h * 0.5, tipX, tipY);
      ctx.quadraticCurveTo((rootX + tipX) / 2 + dir * w * 0.02, h * 0.55, rootX + wid, h);
      ctx.closePath();
    };
    const g = color ? (i % 2 === 0 ? PALETTE.grass : PALETTE.grassDark) : PAPER_CREAM;
    ctx.save();
    path();
    ctx.fillStyle = g;
    ctx.fill();
    ctx.restore();
    inkStroke(ctx, w * 0.008);
    ctx.strokeStyle = color ? PALETTE.grassDark : INK;
    // Central vein up the blade.
    ctx.beginPath();
    ctx.moveTo(rootX, h);
    ctx.quadraticCurveTo((rootX + tipX) / 2, h * 0.5, tipX, tipY);
    ctx.stroke();
  }
}

/** A toadstool: a rounded cap on a stubby stem. */
export function drawMushroom(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;

  // Stem: gently waisted with a rounded base (a bulb), like a real toadstool.
  const stemPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.15, h * 0.98);
    ctx.quadraticCurveTo(cx - w * 0.2, h * 0.9, cx - w * 0.13, h * 0.78);
    ctx.quadraticCurveTo(cx - w * 0.1, h * 0.62, cx - w * 0.12, h * 0.48);
    ctx.lineTo(cx + w * 0.12, h * 0.48);
    ctx.quadraticCurveTo(cx + w * 0.1, h * 0.62, cx + w * 0.13, h * 0.78);
    ctx.quadraticCurveTo(cx + w * 0.2, h * 0.9, cx + w * 0.15, h * 0.98);
    ctx.quadraticCurveTo(cx, h * 1.02, cx - w * 0.15, h * 0.98);
    ctx.closePath();
  };
  paperSilhouette(ctx, stemPath, color ? PALETTE.mushStem : null);
  volumeShade(
    ctx,
    stemPath,
    cx - w * 0.04,
    h * 0.72,
    w * 0.2,
    "rgba(255,255,250,0.4)",
    color ? "rgba(150,135,95,0.35)" : "rgba(40,35,28,0.22)"
  );
  inkStroke(ctx, w * 0.018);
  ctx.strokeStyle = color ? "#c2b699" : INK;
  stemPath();
  ctx.stroke();

  // A little skirt/ring under the cap.
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.14, h * 0.52);
  ctx.quadraticCurveTo(cx, h * 0.58, cx + w * 0.14, h * 0.52);
  ctx.stroke();

  // Cap: a domed bell rather than a half-ellipse.
  const capPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.44, h * 0.5);
    ctx.bezierCurveTo(cx - w * 0.46, h * 0.16, cx + w * 0.46, h * 0.16, cx + w * 0.44, h * 0.5);
    ctx.quadraticCurveTo(cx, h * 0.6, cx - w * 0.44, h * 0.5);
    ctx.closePath();
  };
  paperSilhouette(ctx, capPath, color ? PALETTE.mushCap : null);
  volumeShade(
    ctx,
    capPath,
    cx - w * 0.1,
    h * 0.32,
    w * 0.44,
    color ? "rgba(255,215,195,0.5)" : "rgba(255,250,240,0.0)",
    color ? "rgba(110,20,12,0.4)" : "rgba(40,35,28,0.28)"
  );
  inkStroke(ctx, w * 0.02);
  ctx.strokeStyle = color ? shade(PALETTE.mushCap, -0.18) : INK;
  capPath();
  ctx.stroke();

  // Pale spots that follow the dome.
  ctx.fillStyle = color ? "#fbf3e0" : "rgba(33,29,24,0.85)";
  for (const [sx, sy, sr] of [
    [0.33, 0.34, 0.06],
    [0.58, 0.27, 0.05],
    [0.5, 0.42, 0.055],
    [0.72, 0.4, 0.04],
    [0.42, 0.24, 0.035]
  ] as const) {
    ctx.beginPath();
    ctx.ellipse(w * sx, h * sy, w * sr, w * sr * 0.85, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * A cute sitting frog. Monochrome by default; `color` turns him green. He
 * breathes gently and blinks (uses `time`), so mark his element `animated`.
 */
export function drawFrog(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const paper = (): string | CanvasPattern => paperFill(ctx) ?? "#f3eede";
  const skin: string | CanvasPattern = color ?? paper();
  const belly: string | CanvasPattern = color ? "#e7efb0" : paper();
  const breathe = 1 + Math.sin(time * 3) * 0.03;

  const fillEllipse = (
    x: number,
    y: number,
    rx: number,
    ry: number,
    fill: string | CanvasPattern
  ): void => {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
  };
  const inkEllipse = (x: number, y: number, rx: number, ry: number, lw: number): void => {
    inkStroke(ctx, lw);
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();
  };

  // Back haunches.
  for (const s of [-1, 1]) {
    fillEllipse(cx + s * w * 0.33, h * 0.82, w * 0.2, h * 0.15, skin);
    inkEllipse(cx + s * w * 0.33, h * 0.82, w * 0.2, h * 0.15, w * 0.012);
    // Little webbed feet.
    inkStroke(ctx, w * 0.014);
    for (let i = -1; i <= 1; i++) {
      const fx = cx + s * w * 0.33 + i * w * 0.07;
      sketchLine(ctx, fx, h * 0.9, fx, h * 0.98, 0.5);
    }
  }

  // Body.
  const bodyY = h * 0.62;
  fillEllipse(cx, bodyY, w * 0.42, h * 0.34 * breathe, skin);
  // Rounded shading for a plump, top-lit body.
  volumeShade(
    ctx,
    () => {
      ctx.beginPath();
      ctx.ellipse(cx, bodyY, w * 0.42, h * 0.34 * breathe, 0, 0, Math.PI * 2);
    },
    cx - w * 0.1,
    bodyY - h * 0.06,
    w * 0.42,
    "rgba(255,255,235,0.35)",
    color ? "rgba(20,70,25,0.4)" : "rgba(40,35,28,0.22)"
  );
  fillEllipse(cx, h * 0.72, w * 0.24, h * 0.2, belly);
  inkEllipse(cx, bodyY, w * 0.42, h * 0.34 * breathe, w * 0.014);
  // Belly seam.
  inkStroke(ctx, w * 0.01);
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.72, w * 0.24, h * 0.2, 0, Math.PI * 0.15, Math.PI * 0.85);
  ctx.stroke();

  // Little spots when coloured.
  if (color) {
    ctx.fillStyle = "rgba(20,80,30,0.35)";
    for (const [sx, sy] of [[0.3, 0.55], [0.68, 0.5], [0.72, 0.68], [0.28, 0.7]] as const) {
      ctx.beginPath();
      ctx.ellipse(w * sx, h * sy, w * 0.035, h * 0.03, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Wide smile with a cheeky upturn.
  inkStroke(ctx, w * 0.016);
  ctx.beginPath();
  ctx.arc(cx, h * 0.56, w * 0.24, 0.12 * Math.PI, 0.88 * Math.PI);
  ctx.stroke();
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.arc(cx + s * w * 0.235, h * 0.575, w * 0.03, s < 0 ? Math.PI * 0.7 : Math.PI * 0.3, s < 0 ? Math.PI * 1.1 : -Math.PI * 0.1, s < 0);
    ctx.stroke();
  }

  // Eyes on top, set in raised bumps.
  const eyeY = h * 0.32;
  const eyeR = w * 0.17;
  const blink = time % 3 < 0.16;
  for (const s of [-1, 1]) {
    const ex = cx + s * w * 0.21;
    fillEllipse(ex, eyeY, eyeR, eyeR, skin);
    volumeShade(
      ctx,
      () => {
        ctx.beginPath();
        ctx.ellipse(ex, eyeY, eyeR, eyeR, 0, 0, Math.PI * 2);
      },
      ex - eyeR * 0.3,
      eyeY - eyeR * 0.3,
      eyeR,
      "rgba(255,255,235,0.4)",
      color ? "rgba(20,70,25,0.35)" : "rgba(40,35,28,0.2)"
    );
    inkEllipse(ex, eyeY, eyeR, eyeR, w * 0.012);
    if (blink) {
      inkStroke(ctx, w * 0.016);
      ctx.beginPath();
      ctx.moveTo(ex - eyeR * 0.6, eyeY);
      ctx.lineTo(ex + eyeR * 0.6, eyeY);
      ctx.stroke();
    } else {
      fillEllipse(ex, eyeY, eyeR * 0.6, eyeR * 0.6, "#f7f3e6");
      inkEllipse(ex, eyeY, eyeR * 0.6, eyeR * 0.6, w * 0.008);
      ctx.fillStyle = INK;
      ctx.beginPath();
      ctx.arc(ex, eyeY + eyeR * 0.06, eyeR * 0.24, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(ex - eyeR * 0.08, eyeY - eyeR * 0.02, eyeR * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Nostrils.
  ctx.fillStyle = INK;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.arc(cx + s * w * 0.05, h * 0.46, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** A flat lily pad with a notch and a couple of veins. */
export function drawLilyPad(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  const cy = h * 0.58;
  const r = Math.min(w, h) * 0.46;
  const notch = 0.35;

  const pad = (): void => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, notch, Math.PI * 2 - notch);
    ctx.lineTo(cx, cy);
    ctx.closePath();
  };
  paperSilhouette(ctx, pad, color ? PALETTE.leaf : null);
  volumeShade(ctx, pad, cx - r * 0.2, cy - r * 0.2, r, "rgba(255,255,235,0.3)", color ? "rgba(20,70,25,0.35)" : "rgba(40,35,28,0.2)");
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = color ? PALETTE.leafDark : INK;
  ctx.beginPath();
  ctx.arc(cx, cy, r, notch, Math.PI * 2 - notch);
  ctx.stroke();

  ctx.lineWidth = w * 0.005;
  ctx.strokeStyle = color ? "rgba(30,80,25,0.5)" : "rgba(33,29,24,0.5)";
  for (let i = 0; i < 6; i++) {
    const a = -Math.PI * 0.4 + (i / 5) * Math.PI * 1.6;
    sketchLine(ctx, cx, cy, cx + Math.cos(a) * r * 0.88, cy + Math.sin(a) * r * 0.88, 0.6);
  }
}

/** A tall reed with a cattail head. */
export function drawReed(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  // Stalk as a gently curved filled blade.
  const stalk = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.06, h);
    ctx.quadraticCurveTo(cx - w * 0.02, h * 0.5, cx - w * 0.05, h * 0.1);
    ctx.lineTo(cx + w * 0.05, h * 0.1);
    ctx.quadraticCurveTo(cx + w * 0.02, h * 0.5, cx + w * 0.06, h);
    ctx.closePath();
  };
  paperSilhouette(ctx, stalk, color ? PALETTE.grassDark : null);
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = color ? shade(PALETTE.grassDark, -0.1) : INK;
  stalk();
  ctx.stroke();

  // A couple of long leaf blades.
  for (const [dir, at] of [[-1, 0.55], [1, 0.68]] as const) {
    const blade = (): void => {
      ctx.beginPath();
      ctx.moveTo(cx, h * at);
      ctx.quadraticCurveTo(cx + dir * w * 0.5, h * (at - 0.2), cx + dir * w * 0.62, h * (at - 0.45));
      ctx.quadraticCurveTo(cx + dir * w * 0.36, h * (at - 0.12), cx, h * (at + 0.02));
      ctx.closePath();
    };
    paperSilhouette(ctx, blade, color ? PALETTE.grass : null);
    inkStroke(ctx, w * 0.01);
    ctx.strokeStyle = color ? PALETTE.grassDark : INK;
    blade();
    ctx.stroke();
  }

  // Cattail — a soft velvety brown sausage.
  const catPath = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, h * 0.2, w * 0.13, h * 0.17, 0, 0, Math.PI * 2);
  };
  paperSilhouette(ctx, catPath, color ? "#8a5a2b" : null);
  volumeShade(ctx, catPath, cx - w * 0.04, h * 0.14, w * 0.15, "rgba(255,230,190,0.35)", color ? "rgba(60,35,12,0.4)" : "rgba(40,35,28,0.22)");
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? "#5e3d1c" : INK;
  catPath();
  ctx.stroke();
  // Little spike at the top.
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.03);
  ctx.lineTo(cx, h * 0.1);
  ctx.stroke();
}

/** A pond outline with a few ripple lines — drawn flat on the page. */
export function drawPond(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  const cy = h / 2;

  const pondPath = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.46, h * 0.44, 0, 0, Math.PI * 2);
  };
  // A watery blue when coloured, with a soft light gradient for depth.
  ctx.save();
  pondPath();
  if (color) {
    const g = ctx.createRadialGradient(cx - w * 0.1, cy - h * 0.1, w * 0.05, cx, cy, w * 0.5);
    g.addColorStop(0, "#8fd0e6");
    g.addColorStop(1, "#3f8fc0");
    ctx.fillStyle = g;
  } else {
    ctx.fillStyle = PAPER_CREAM;
  }
  ctx.fill();
  if (!color) {
    const pattern = paperFill(ctx);
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fill();
    }
  }
  ctx.restore();

  inkStroke(ctx, w * 0.008);
  ctx.strokeStyle = color ? "#2f7ba8" : INK;
  pondPath();
  ctx.stroke();

  // Ripples + a couple of sparkles.
  ctx.lineWidth = w * 0.004;
  ctx.strokeStyle = color ? "rgba(255,255,255,0.5)" : "rgba(33, 29, 24, 0.4)";
  for (let i = 1; i <= 4; i++) {
    const rr = i / 5;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.46 * rr, h * 0.44 * rr, 0, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
  }
}

/**
 * A butterfly with flapping wings. Monochrome by default; `color` fills the
 * wings. Uses `time` to flap and gently bob, so mark its element `animated`.
 */
export function drawButterfly(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const cy = h * 0.5 + Math.sin(time * 2.5) * h * 0.06;
  const flap = 0.5 + 0.5 * Math.abs(Math.sin(time * 7)); // wing openness 0..1
  const wingFill: string | CanvasPattern = color ?? paperFill(ctx) ?? "#f3eede";

  const wing = (
    x: number,
    y: number,
    rx: number,
    ry: number,
    rot: number,
    spot: boolean
  ): void => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = wingFill;
    ctx.fill();
    // Soft shading + a lighter leading edge for a papery, veined wing.
    if (color) {
      const g = ctx.createLinearGradient(0, -ry, 0, ry);
      g.addColorStop(0, "rgba(255,255,255,0.35)");
      g.addColorStop(1, "rgba(0,0,0,0.18)");
      ctx.fillStyle = g;
      ctx.fill();
      // Wing-edge band.
      ctx.strokeStyle = "rgba(33,29,24,0.5)";
      ctx.lineWidth = w * 0.02;
      ctx.beginPath();
      ctx.ellipse(0, 0, rx * 0.72, ry * 0.72, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    inkStroke(ctx, w * 0.014);
    ctx.strokeStyle = INK;
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();
    if (spot) {
      ctx.fillStyle = color ? "rgba(255,250,235,0.85)" : "rgba(33, 29, 24, 0.4)";
      ctx.beginPath();
      ctx.ellipse(0, ry * 0.25, rx * 0.32, ry * 0.24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = color ? "rgba(33,29,24,0.5)" : "rgba(33, 29, 24, 0.6)";
      ctx.beginPath();
      ctx.ellipse(0, ry * 0.25, rx * 0.14, ry * 0.11, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  // Two wings per side; horizontal spread scales with the flap.
  for (const s of [-1, 1]) {
    wing(cx + s * (w * 0.04 + w * 0.24 * flap), cy - h * 0.08, w * 0.22 * flap, h * 0.2, s * 0.35, true);
    wing(cx + s * (w * 0.03 + w * 0.18 * flap), cy + h * 0.16, w * 0.16 * flap, h * 0.15, s * -0.3, false);
  }

  // Body.
  ctx.fillStyle = INK;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.035, h * 0.26, 0, 0, Math.PI * 2);
  ctx.fill();

  // Antennae.
  inkStroke(ctx, w * 0.01);
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - h * 0.24);
    ctx.quadraticCurveTo(cx + s * w * 0.1, cy - h * 0.36, cx + s * w * 0.14, cy - h * 0.34);
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.beginPath();
    ctx.arc(cx + s * w * 0.14, cy - h * 0.34, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** An apple. Monochrome by default; `color` fills it (and greens the leaf). */
export function drawApple(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const cx = w / 2;
  const cy = h * 0.6;
  const r = Math.min(w, h) * 0.36;
  const body = color ?? paperFill(ctx) ?? "#f3eede";

  // A rounded, slightly heart-shaped apple body with a top and bottom dimple.
  const applePath = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r * 0.75);
    ctx.bezierCurveTo(cx - r * 0.6, cy - r * 1.15, cx - r * 1.15, cy - r * 0.35, cx - r * 1.02, cy + r * 0.2);
    ctx.bezierCurveTo(cx - r * 0.95, cy + r * 0.9, cx - r * 0.4, cy + r * 1.15, cx, cy + r * 0.95);
    ctx.bezierCurveTo(cx + r * 0.4, cy + r * 1.15, cx + r * 0.95, cy + r * 0.9, cx + r * 1.02, cy + r * 0.2);
    ctx.bezierCurveTo(cx + r * 1.15, cy - r * 0.35, cx + r * 0.6, cy - r * 1.15, cx, cy - r * 0.75);
    ctx.closePath();
  };
  ctx.save();
  applePath();
  ctx.fillStyle = body;
  ctx.fill();
  ctx.restore();
  volumeShade(ctx, applePath, cx - r * 0.35, cy - r * 0.35, r * 1.1, "rgba(255,255,240,0.45)", color ? "rgba(110,10,15,0.4)" : "rgba(40,35,28,0.2)");
  inkStroke(ctx, w * 0.018);
  ctx.strokeStyle = color ? "#8f2e28" : INK;
  applePath();
  ctx.stroke();

  // Top dimple.
  ctx.lineWidth = w * 0.012;
  ctx.beginPath();
  ctx.arc(cx, cy - r * 0.7, r * 0.24, 0.2 * Math.PI, 0.8 * Math.PI);
  ctx.stroke();

  // Stem + leaf.
  ctx.strokeStyle = color ? PALETTE.barkDark : INK;
  ctx.lineWidth = w * 0.02;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 0.8);
  ctx.quadraticCurveTo(cx + w * 0.03, cy - r * 1.15, cx + w * 0.01, cy - r * 1.32);
  ctx.stroke();
  const leaf = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.11, cy - r * 1.08, w * 0.1, h * 0.05, -0.5, 0, Math.PI * 2);
  };
  ctx.save();
  leaf();
  ctx.fillStyle = color ? PALETTE.leaf : paperFill(ctx) ?? "#f3eede";
  ctx.fill();
  ctx.restore();
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = color ? PALETTE.leafDark : INK;
  leaf();
  ctx.stroke();

  // Shine when coloured.
  if (color) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = w * 0.03;
    ctx.beginPath();
    ctx.arc(cx - r * 0.38, cy - r * 0.2, r * 0.42, -0.95 * Math.PI, -0.4 * Math.PI);
    ctx.stroke();
  }
}

/** A sitting fox. Monochrome by default; `color` turns him orange. Blinks. */
export function drawFox(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const paper = (): string | CanvasPattern => paperFill(ctx) ?? "#f3eede";
  const fur: string | CanvasPattern = color ?? paper();
  const furDark = color ? shade(color, -0.16) : "rgba(40,35,28,0.25)";
  const white: string | CanvasPattern = color ? "#f7f3e6" : paper();
  const fill = (fillStyle: string | CanvasPattern, path: () => void): void => {
    path();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  };
  const outline = (lw: number, path: () => void): void => {
    inkStroke(ctx, lw);
    ctx.strokeStyle = color ? shade(color, -0.28) : INK;
    path();
    ctx.stroke();
  };

  // --- Bushy tail curling round the side, tipped white ---------------------
  const tailPath = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.14, h * 0.68);
    ctx.bezierCurveTo(cx + w * 0.5, h * 0.5, cx + w * 0.56, h * 0.9, cx + w * 0.34, h * 0.96);
    ctx.bezierCurveTo(cx + w * 0.2, h * 0.99, cx + w * 0.1, h * 0.88, cx + w * 0.14, h * 0.68);
    ctx.closePath();
  };
  fill(fur, tailPath);
  volumeShade(ctx, tailPath, cx + w * 0.28, h * 0.62, w * 0.28, "rgba(255,240,215,0.35)", color ? "rgba(120,55,10,0.4)" : "rgba(40,35,28,0.22)");
  // White tail tip.
  fill(white, () => {
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.4, h * 0.9, w * 0.1, h * 0.09, -0.7, 0, Math.PI * 2);
  });
  outline(w * 0.014, tailPath);

  // --- Body + front legs and paws ------------------------------------------
  const bodyPath = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx - w * 0.02, h * 0.76, w * 0.24, h * 0.2, 0, 0, Math.PI * 2);
  };
  fill(fur, bodyPath);
  volumeShade(ctx, bodyPath, cx - w * 0.1, h * 0.68, w * 0.24, "rgba(255,240,215,0.35)", color ? "rgba(120,55,10,0.38)" : "rgba(40,35,28,0.2)");
  outline(w * 0.014, bodyPath);
  // Front legs.
  for (const s of [-1, 1]) {
    const legPath = (): void => {
      ctx.beginPath();
      ctx.moveTo(cx + s * w * 0.13, h * 0.82);
      ctx.lineTo(cx + s * w * 0.16, h * 0.97);
      ctx.lineTo(cx + s * w * 0.05, h * 0.97);
      ctx.lineTo(cx + s * w * 0.03, h * 0.84);
      ctx.closePath();
    };
    fill(fur, legPath);
    outline(w * 0.012, legPath);
    // Dark sock + paw.
    ctx.fillStyle = furDark;
    ctx.beginPath();
    ctx.ellipse(cx + s * w * 0.1, h * 0.965, w * 0.06, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  // White chest bib.
  fill(white, () => {
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.02, h * 0.62);
    ctx.quadraticCurveTo(cx + w * 0.12, h * 0.78, cx - w * 0.02, h * 0.92);
    ctx.quadraticCurveTo(cx - w * 0.16, h * 0.78, cx - w * 0.02, h * 0.62);
    ctx.closePath();
  });

  // --- Head ----------------------------------------------------------------
  const hy = h * 0.42;
  const hr = w * 0.25;

  // Ears with dark inners.
  for (const s of [-1, 1]) {
    const ear = (): void => {
      ctx.beginPath();
      ctx.moveTo(cx + s * hr * 0.7, hy - hr * 0.35);
      ctx.lineTo(cx + s * hr * 1.15, hy - hr * 1.45);
      ctx.lineTo(cx + s * hr * 0.1, hy - hr * 0.75);
      ctx.closePath();
    };
    fill(fur, ear);
    outline(w * 0.012, ear);
    ctx.fillStyle = furDark;
    ctx.beginPath();
    ctx.moveTo(cx + s * hr * 0.62, hy - hr * 0.45);
    ctx.lineTo(cx + s * hr * 0.92, hy - hr * 1.2);
    ctx.lineTo(cx + s * hr * 0.28, hy - hr * 0.72);
    ctx.closePath();
    ctx.fill();
  }

  // Cheek ruffs give the face a foxy, pointed outline.
  const face = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx - hr, hy - hr * 0.35);
    ctx.lineTo(cx - hr * 1.08, hy + hr * 0.35);
    ctx.lineTo(cx - hr * 0.7, hy + hr * 0.55);
    ctx.quadraticCurveTo(cx - hr * 0.4, hy + hr * 1.05, cx, hy + hr * 1.2);
    ctx.quadraticCurveTo(cx + hr * 0.4, hy + hr * 1.05, cx + hr * 0.7, hy + hr * 0.55);
    ctx.lineTo(cx + hr * 1.08, hy + hr * 0.35);
    ctx.lineTo(cx + hr, hy - hr * 0.35);
    ctx.quadraticCurveTo(cx, hy - hr * 0.8, cx - hr, hy - hr * 0.35);
    ctx.closePath();
  };
  fill(fur, face);
  volumeShade(ctx, face, cx - hr * 0.3, hy - hr * 0.3, hr * 1.1, "rgba(255,240,215,0.4)", color ? "rgba(120,55,10,0.3)" : "rgba(40,35,28,0.18)");
  outline(w * 0.014, face);

  // White muzzle + cheeks.
  fill(white, () => {
    ctx.beginPath();
    ctx.moveTo(cx - hr * 0.5, hy + hr * 0.1);
    ctx.quadraticCurveTo(cx - hr * 0.2, hy + hr * 0.35, cx, hy + hr * 1.15);
    ctx.quadraticCurveTo(cx + hr * 0.2, hy + hr * 0.35, cx + hr * 0.5, hy + hr * 0.1);
    ctx.quadraticCurveTo(cx, hy + hr * 0.4, cx - hr * 0.5, hy + hr * 0.1);
    ctx.closePath();
  });

  // Eyes (amber, almond) + nose.
  const blink = time % 3.2 < 0.14;
  for (const s of [-1, 1]) {
    const ex = cx + s * hr * 0.44;
    const ey = hy;
    if (blink) {
      inkStroke(ctx, w * 0.014);
      ctx.strokeStyle = INK;
      ctx.beginPath();
      ctx.moveTo(ex - w * 0.035, ey);
      ctx.quadraticCurveTo(ex, ey + w * 0.02, ex + w * 0.035, ey);
      ctx.stroke();
    } else {
      // almond
      ctx.beginPath();
      ctx.ellipse(ex, ey, w * 0.05, w * 0.035, s * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = color ? "#e8a02a" : "#f7f3e6";
      ctx.fill();
      inkStroke(ctx, w * 0.01);
      ctx.strokeStyle = INK;
      ctx.stroke();
      ctx.fillStyle = INK;
      ctx.beginPath();
      ctx.arc(ex, ey, w * 0.022, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(ex - w * 0.008, ey - w * 0.008, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  // Nose.
  ctx.fillStyle = INK;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.04, hy + hr * 0.95);
  ctx.quadraticCurveTo(cx, hy + hr * 1.15, cx + w * 0.04, hy + hr * 0.95);
  ctx.quadraticCurveTo(cx, hy + hr * 1.02, cx - w * 0.04, hy + hr * 0.95);
  ctx.fill();
  // Muzzle line + mouth.
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.moveTo(cx, hy + hr * 1.1);
  ctx.lineTo(cx, hy + hr * 1.25);
  ctx.moveTo(cx, hy + hr * 1.25);
  ctx.quadraticCurveTo(cx - w * 0.06, hy + hr * 1.35, cx - w * 0.09, hy + hr * 1.22);
  ctx.moveTo(cx, hy + hr * 1.25);
  ctx.quadraticCurveTo(cx + w * 0.06, hy + hr * 1.35, cx + w * 0.09, hy + hr * 1.22);
  ctx.stroke();
}

/**
 * A plump little bird perched with a round belly, small wing and a tail. It
 * bobs gently (uses `time`), so mark its element `animated`. `color` tints the
 * body; the belly stays pale and it gets a warm breast.
 */
export function drawBird(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const bob = Math.sin(time * 2.2) * h * 0.02;
  const cy = h * 0.56 + bob;
  const bodyR = Math.min(w, h) * 0.3;
  const paper = (): string | CanvasPattern => paperFill(ctx) ?? "#f3eede";
  const feather = color ?? paper();
  const belly = color ? "#f6efdc" : paper();

  // Tail.
  const tail = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx + bodyR * 0.6, cy + bodyR * 0.1);
    ctx.lineTo(cx + bodyR * 1.7, cy - bodyR * 0.1);
    ctx.lineTo(cx + bodyR * 1.7, cy + bodyR * 0.5);
    ctx.closePath();
  };
  paperSilhouette(ctx, tail, color ? shade(color, -0.1) : null);
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = color ? shade(color, -0.3) : INK;
  tail();
  ctx.stroke();

  // Body.
  const body = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, bodyR * 0.95, bodyR, 0, 0, Math.PI * 2);
  };
  ctx.save();
  body();
  ctx.fillStyle = feather;
  ctx.fill();
  ctx.restore();
  volumeShade(ctx, body, cx - bodyR * 0.3, cy - bodyR * 0.35, bodyR, "rgba(255,255,240,0.4)", color ? "rgba(20,40,80,0.35)" : "rgba(40,35,28,0.2)");
  // Pale belly + warm breast.
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx - bodyR * 0.2, cy + bodyR * 0.25, bodyR * 0.6, bodyR * 0.62, 0, 0, Math.PI * 2);
  ctx.fillStyle = belly;
  ctx.fill();
  ctx.restore();
  if (color) {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx - bodyR * 0.28, cy - bodyR * 0.05, bodyR * 0.4, bodyR * 0.45, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#e2703a";
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.restore();
  }
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? shade(color, -0.3) : INK;
  body();
  ctx.stroke();

  // Wing.
  const wing = (): void => {
    ctx.beginPath();
    ctx.moveTo(cx + bodyR * 0.1, cy - bodyR * 0.2);
    ctx.quadraticCurveTo(cx + bodyR * 0.9, cy - bodyR * 0.1, cx + bodyR * 0.7, cy + bodyR * 0.55);
    ctx.quadraticCurveTo(cx + bodyR * 0.2, cy + bodyR * 0.4, cx + bodyR * 0.1, cy - bodyR * 0.2);
    ctx.closePath();
  };
  paperSilhouette(ctx, wing, color ? shade(color, -0.12) : null);
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = color ? shade(color, -0.3) : INK;
  wing();
  ctx.stroke();
  // A couple of feather lines.
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + bodyR * (0.25 + i * 0.15), cy + bodyR * 0.1);
    ctx.lineTo(cx + bodyR * (0.5 + i * 0.14), cy + bodyR * 0.42);
    ctx.stroke();
  }

  // Head.
  const headR = bodyR * 0.62;
  const headX = cx - bodyR * 0.55;
  const headY = cy - bodyR * 0.7;
  const head = (): void => {
    ctx.beginPath();
    ctx.arc(headX, headY, headR, 0, Math.PI * 2);
  };
  ctx.save();
  head();
  ctx.fillStyle = feather;
  ctx.fill();
  ctx.restore();
  volumeShade(ctx, head, headX - headR * 0.3, headY - headR * 0.3, headR, "rgba(255,255,240,0.45)", color ? "rgba(20,40,80,0.3)" : "rgba(40,35,28,0.18)");
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? shade(color, -0.3) : INK;
  head();
  ctx.stroke();

  // Beak.
  ctx.beginPath();
  ctx.moveTo(headX - headR * 0.9, headY + headR * 0.05);
  ctx.lineTo(headX - headR * 1.5, headY + headR * 0.22);
  ctx.lineTo(headX - headR * 0.85, headY + headR * 0.42);
  ctx.closePath();
  ctx.fillStyle = color ? "#f0a92e" : paper();
  ctx.fill();
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = INK;
  ctx.stroke();

  // Eye.
  const blink = time % 3 < 0.14;
  if (blink) {
    inkStroke(ctx, w * 0.012);
    ctx.beginPath();
    ctx.moveTo(headX - headR * 0.35, headY - headR * 0.05);
    ctx.lineTo(headX - headR * 0.05, headY - headR * 0.05);
    ctx.stroke();
  } else {
    ctx.fillStyle = INK;
    ctx.beginPath();
    ctx.arc(headX - headR * 0.2, headY - headR * 0.08, headR * 0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.beginPath();
    ctx.arc(headX - headR * 0.25, headY - headR * 0.13, headR * 0.05, 0, Math.PI * 2);
    ctx.fill();
  }

  // Legs on the perch.
  inkStroke(ctx, w * 0.012);
  ctx.strokeStyle = INK;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cx + s * bodyR * 0.15, cy + bodyR * 0.95);
    ctx.lineTo(cx + s * bodyR * 0.15, cy + bodyR * 1.25);
    ctx.moveTo(cx + s * bodyR * 0.15, cy + bodyR * 1.25);
    ctx.lineTo(cx + s * bodyR * 0.15 - w * 0.03, cy + bodyR * 1.32);
    ctx.moveTo(cx + s * bodyR * 0.15, cy + bodyR * 1.25);
    ctx.lineTo(cx + s * bodyR * 0.15 + w * 0.03, cy + bodyR * 1.32);
    ctx.stroke();
  }
}

/**
 * A shy little rabbit sitting up, with long ears that flick (uses `time`, so
 * mark its element `animated`). `color` gives it a soft coat; belly and inner
 * ears stay pale/pink.
 */
export function drawRabbit(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const paper = (): string | CanvasPattern => paperFill(ctx) ?? "#f3eede";
  const coat = color ?? paper();
  const flick = Math.sin(time * 1.6) * 0.12;

  // Long ears (behind the head).
  for (const s of [-1, 1]) {
    const earX = cx + s * w * 0.1;
    const ear = (): void => {
      ctx.save();
      ctx.translate(earX, h * 0.34);
      ctx.rotate(s * (0.12 + flick));
      ctx.beginPath();
      ctx.ellipse(0, -h * 0.16, w * 0.07, h * 0.2, 0, 0, Math.PI * 2);
      ctx.restore();
    };
    ctx.save();
    ear();
    ctx.fillStyle = coat;
    ctx.fill();
    ctx.restore();
    // Pink inner ear.
    ctx.save();
    ctx.translate(earX, h * 0.34);
    ctx.rotate(s * (0.12 + flick));
    ctx.beginPath();
    ctx.ellipse(0, -h * 0.16, w * 0.035, h * 0.13, 0, 0, Math.PI * 2);
    ctx.fillStyle = color ? "#e7a6a6" : (paperFill(ctx) ?? "#f3eede");
    ctx.fill();
    ctx.restore();
    inkStroke(ctx, w * 0.012);
    ctx.strokeStyle = color ? shade(color, -0.25) : INK;
    ear();
    ctx.stroke();
  }

  // Body.
  const bodyPath = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, h * 0.72, w * 0.24, h * 0.24, 0, 0, Math.PI * 2);
  };
  ctx.save();
  bodyPath();
  ctx.fillStyle = coat;
  ctx.fill();
  ctx.restore();
  volumeShade(ctx, bodyPath, cx - w * 0.08, h * 0.62, w * 0.26, "rgba(255,255,245,0.4)", color ? "rgba(90,70,45,0.32)" : "rgba(40,35,28,0.2)");
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? shade(color, -0.25) : INK;
  bodyPath();
  ctx.stroke();
  // Pale belly.
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.78, w * 0.13, h * 0.15, 0, 0, Math.PI * 2);
  ctx.fillStyle = color ? "#f4ecd9" : paper();
  ctx.fill();
  ctx.restore();

  // Front paws.
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(cx + s * w * 0.09, h * 0.9, w * 0.06, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fillStyle = color ? "#f4ecd9" : paper();
    ctx.fill();
    inkStroke(ctx, w * 0.01);
    ctx.strokeStyle = color ? shade(color, -0.25) : INK;
    ctx.stroke();
  }

  // Head.
  const headR = w * 0.17;
  const headY = h * 0.44;
  const head = (): void => {
    ctx.beginPath();
    ctx.ellipse(cx, headY, headR, headR * 1.05, 0, 0, Math.PI * 2);
  };
  ctx.save();
  head();
  ctx.fillStyle = coat;
  ctx.fill();
  ctx.restore();
  volumeShade(ctx, head, cx - headR * 0.3, headY - headR * 0.3, headR, "rgba(255,255,245,0.45)", color ? "rgba(90,70,45,0.28)" : "rgba(40,35,28,0.18)");
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = color ? shade(color, -0.25) : INK;
  head();
  ctx.stroke();

  // Cheeks.
  ctx.save();
  ctx.fillStyle = "rgba(230,150,140,0.3)";
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(cx + s * headR * 0.55, headY + headR * 0.35, headR * 0.22, headR * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // Eyes + nose + whiskers.
  const blink = time % 3.4 < 0.14;
  ctx.fillStyle = INK;
  for (const s of [-1, 1]) {
    const ex = cx + s * headR * 0.45;
    const ey = headY - headR * 0.1;
    if (blink) {
      inkStroke(ctx, w * 0.012);
      ctx.strokeStyle = INK;
      ctx.beginPath();
      ctx.moveTo(ex - w * 0.03, ey);
      ctx.quadraticCurveTo(ex, ey + w * 0.015, ex + w * 0.03, ey);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(ex, ey, headR * 0.16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(ex - headR * 0.05, ey - headR * 0.05, headR * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = INK;
    }
  }
  // Nose.
  ctx.fillStyle = color ? "#d98a8a" : INK;
  ctx.beginPath();
  ctx.moveTo(cx - headR * 0.1, headY + headR * 0.35);
  ctx.lineTo(cx + headR * 0.1, headY + headR * 0.35);
  ctx.lineTo(cx, headY + headR * 0.5);
  ctx.closePath();
  ctx.fill();
  inkStroke(ctx, w * 0.008);
  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.moveTo(cx, headY + headR * 0.5);
  ctx.lineTo(cx, headY + headR * 0.68);
  ctx.stroke();
  // Whiskers.
  for (const s of [-1, 1]) {
    for (const dy of [-0.04, 0.03]) {
      ctx.beginPath();
      ctx.moveTo(cx + s * headR * 0.15, headY + headR * 0.5);
      ctx.quadraticCurveTo(cx + s * headR * 0.9, headY + headR * (0.5 + dy) - w * 0.02, cx + s * headR * 1.5, headY + headR * (0.5 + dy * 3));
      ctx.stroke();
    }
  }
}

/** A friendly sun. Monochrome by default; `color` turns it golden. Rays turn. */
export function drawSun(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.28;

  ctx.strokeStyle = color ? "#f3a712" : INK;
  ctx.lineWidth = w * 0.022;
  ctx.lineCap = "round";
  const rays = 12;
  for (let i = 0; i < rays; i++) {
    const a = time * 0.4 + (i / rays) * Math.PI * 2;
    const wobble = 1 + Math.sin(time * 2 + i) * 0.06;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r * 1.28, cy + Math.sin(a) * r * 1.28);
    ctx.lineTo(cx + Math.cos(a) * r * 1.75 * wobble, cy + Math.sin(a) * r * 1.75 * wobble);
    ctx.stroke();
  }

  const disk = (): void => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
  };
  ctx.save();
  disk();
  if (color) {
    const g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
    g.addColorStop(0, "#ffe08a");
    g.addColorStop(1, "#f3a712");
    ctx.fillStyle = g;
  } else {
    ctx.fillStyle = paperFill(ctx) ?? "#f3eede";
  }
  ctx.fill();
  ctx.restore();
  inkStroke(ctx, w * 0.016);
  ctx.strokeStyle = color ? "#d68f0a" : INK;
  disk();
  ctx.stroke();

  ctx.fillStyle = INK;
  ctx.beginPath();
  ctx.arc(cx - r * 0.35, cy - r * 0.1, r * 0.09, 0, Math.PI * 2);
  ctx.arc(cx + r * 0.35, cy - r * 0.1, r * 0.09, 0, Math.PI * 2);
  ctx.fill();
  // Rosy cheeks + smile.
  ctx.save();
  ctx.fillStyle = "rgba(230,120,90,0.3)";
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.arc(cx + s * r * 0.5, cy + r * 0.12, r * 0.13, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  inkStroke(ctx, w * 0.014);
  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.arc(cx, cy + r * 0.12, r * 0.45, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
}

/** A fluffy cloud. Monochrome by default; `color` tints it. */
export function drawCloud(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  const fill = color ?? paperFill(ctx) ?? "#f3eede";
  const lobes: [number, number, number][] = [
    [0.26, 0.56, 0.18],
    [0.42, 0.44, 0.24],
    [0.6, 0.42, 0.22],
    [0.76, 0.56, 0.18],
    [0.5, 0.62, 0.26]
  ];
  // Body.
  for (const [lx, ly, lr] of lobes) {
    ctx.beginPath();
    ctx.arc(w * lx, h * ly, Math.min(w, h) * lr, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
  }
  // Soft underside shading gives the puff some volume.
  volumeShade(
    ctx,
    () => {
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.54, w * 0.4, h * 0.28, 0, 0, Math.PI * 2);
    },
    w * 0.42,
    h * 0.42,
    w * 0.4,
    "rgba(255,255,255,0.5)",
    color ? "rgba(120,140,170,0.3)" : "rgba(40,35,28,0.16)"
  );
  inkStroke(ctx, w * 0.01);
  ctx.strokeStyle = color ? "rgba(120,140,170,0.6)" : INK;
  for (const [lx, ly, lr] of lobes.slice(0, 4)) {
    ctx.beginPath();
    ctx.arc(w * lx, h * ly, Math.min(w, h) * lr, Math.PI, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(w * 0.14, h * 0.7);
  ctx.quadraticCurveTo(w * 0.5, h * 0.78, w * 0.86, h * 0.7);
  ctx.stroke();
}

/** A full-colour rainbow arc (the finale payoff — always coloured). */
export function drawRainbow(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const cx = w / 2;
  const cy = h * 0.98;
  const outer = Math.min(w * 0.48, h * 0.96);
  const bandW = outer * 0.085;
  for (let i = 0; i < HAIR_COLOURS.length; i++) {
    ctx.strokeStyle = HAIR_COLOURS[i];
    ctx.lineWidth = bandW * 0.95;
    ctx.beginPath();
    ctx.arc(cx, cy, outer - i * bandW - bandW / 2, Math.PI, 2 * Math.PI);
    ctx.stroke();
  }
}

