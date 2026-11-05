import { INK, paperFill } from "../Paper.ts";
import { drawFriendlyEye } from "./FriendlyEye.ts";

/** A smiling paper snail whose shell receives the child's chosen colour. */
export function drawSnail(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.min(w, h) * 0.014;
  ctx.strokeStyle = INK;
  const paper = paperFill(ctx) ?? "#f3eede";

  // A single soft silhouette joins the little tail, broad foot and raised head.
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.8);
  ctx.bezierCurveTo(w * 0.2, h * 0.92, w * 0.67, h * 0.93, w * 0.86, h * 0.84);
  ctx.bezierCurveTo(w * 0.95, h * 0.8, w * 0.94, h * 0.7, w * 0.9, h * 0.61);
  ctx.bezierCurveTo(w * 0.86, h * 0.49, w * 0.77, h * 0.49, w * 0.72, h * 0.58);
  ctx.bezierCurveTo(w * 0.68, h * 0.65, w * 0.7, h * 0.71, w * 0.62, h * 0.75);
  ctx.bezierCurveTo(w * 0.4, h * 0.77, w * 0.19, h * 0.7, w * 0.08, h * 0.8);
  ctx.closePath();
  ctx.fillStyle = color ? "#eeddb9" : paper;
  ctx.fill();
  const bodyShade = ctx.createLinearGradient(0, h * 0.5, 0, h * 0.94);
  bodyShade.addColorStop(0, "rgba(255,255,237,0.45)");
  bodyShade.addColorStop(0.55, "rgba(255,255,237,0)");
  bodyShade.addColorStop(1, "rgba(113,78,40,0.17)");
  ctx.fillStyle = bodyShade;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.84);
  ctx.bezierCurveTo(w * 0.43, h * 0.9, w * 0.7, h * 0.88, w * 0.84, h * 0.8);
  ctx.strokeStyle = "rgba(55,45,31,0.35)";
  ctx.lineWidth = Math.min(w, h) * 0.008;
  ctx.stroke();

  const shellX = w * 0.41;
  const shellY = h * 0.54;
  const shellWidth = w * 0.3;
  const shellHeight = h * 0.31;
  ctx.beginPath();
  ctx.ellipse(shellX, shellY, shellWidth, shellHeight, -0.08, 0, Math.PI * 2);
  ctx.fillStyle = color ?? paper;
  ctx.fill();

  // A restrained wash gives the coloured shell the same rounded paper finish.
  const shade = ctx.createRadialGradient(
    shellX - shellWidth * 0.4,
    shellY - shellHeight * 0.5,
    shellWidth * 0.06,
    shellX,
    shellY,
    Math.max(shellWidth, shellHeight) * 1.05
  );
  shade.addColorStop(0, "rgba(255,255,235,0.5)");
  shade.addColorStop(0.5, "rgba(255,255,235,0)");
  shade.addColorStop(1, "rgba(48,32,44,0.2)");
  ctx.fillStyle = shade;
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = Math.min(w, h) * 0.017;
  ctx.stroke();

  ctx.beginPath();
  for (let step = 0; step <= 96; step++) {
    const progress = step / 96;
    const angle = 0.35 + progress * Math.PI * 4.6;
    const radius = 0.89 * (1 - progress) + 0.035;
    const x = shellX + Math.cos(angle) * shellWidth * radius;
    const y = shellY + Math.sin(angle) * shellHeight * radius;
    if (step === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.lineWidth = Math.min(w, h) * 0.012;
  ctx.stroke();

  if (color) {
    // Three little cream freckles make the shell feel hand-painted.
    ctx.fillStyle = "rgba(255,249,216,0.68)";
    for (const [x, y, radius] of [[0.26, 0.37, 0.02], [0.33, 0.31, 0.015], [0.42, 0.3, 0.011]]) {
      ctx.beginPath();
      ctx.ellipse(w * x, h * y, w * radius, h * radius, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Eye stalks wiggle independently; all extremes remain inside the cutout.
  for (const side of [-1, 1]) {
    const eyeX = w * (0.82 + side * 0.065 + Math.sin(time * 2.1 + side) * 0.012);
    const eyeY = h * (0.32 + Math.sin(time * 1.7 + side) * 0.018);
    ctx.beginPath();
    ctx.moveTo(w * (0.82 + side * 0.035), h * 0.57);
    ctx.quadraticCurveTo(eyeX, h * 0.48, eyeX, eyeY);
    ctx.stroke();
    drawFriendlyEye(ctx, eyeX, eyeY, w * 0.044, h * 0.063, time, 2.5, !!color);
  }

  ctx.beginPath();
  ctx.moveTo(w * 0.79, h * 0.65);
  ctx.quadraticCurveTo(w * 0.85, h * (color ? 0.75 : 0.715), w * 0.9, h * 0.65);
  if (color) {
    ctx.closePath();
    ctx.fillStyle = "#795441";
    ctx.fill();
  }
  ctx.strokeStyle = INK;
  ctx.stroke();
  if (color) {
    ctx.beginPath();
    ctx.ellipse(w * 0.9, h * 0.625, w * 0.024, h * 0.021, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(228,137,146,0.5)";
    ctx.fill();
  }
  ctx.restore();
}
