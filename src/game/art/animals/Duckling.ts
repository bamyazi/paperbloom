import { INK, paperFill } from "../Paper.ts";
import { drawFriendlyEye } from "./FriendlyEye.ts";

/** A smiling duckling with a little head bob and an occasional blink. */
export function drawDuckling(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const paper = paperFill(ctx) ?? "#f3eede";
  const feathers = color ?? paper;
  const beak = color ? "#ef9238" : paper;

  ctx.save();
  ctx.scale(w, h);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 0.014;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // Broad webbed feet sit inside the canvas even at the bottom of the bob.
  for (const x of [0.35, 0.59]) {
    ctx.beginPath();
    ctx.moveTo(x - 0.025, 0.81);
    ctx.lineTo(x - 0.07, 0.91);
    ctx.lineTo(x - 0.015, 0.9);
    ctx.lineTo(x + 0.035, 0.93);
    ctx.lineTo(x + 0.08, 0.89);
    ctx.lineTo(x + 0.025, 0.81);
    ctx.closePath();
    ctx.fillStyle = beak;
    ctx.fill();
    ctx.stroke();
  }

  // The tail tip rises into the plump body rather than protruding off-canvas.
  ctx.beginPath();
  ctx.moveTo(0.25, 0.58);
  ctx.quadraticCurveTo(0.11, 0.57, 0.1, 0.47);
  ctx.quadraticCurveTo(0.08, 0.68, 0.25, 0.77);
  ctx.closePath();
  ctx.fillStyle = feathers;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(0.44, 0.66, 0.3, 0.23, -0.12, 0, Math.PI * 2);
  ctx.fillStyle = feathers;
  ctx.fill();
  const featherLight = ctx.createLinearGradient(0, 0.43, 0, 0.9);
  featherLight.addColorStop(0, "rgba(255,255,238,0.55)");
  featherLight.addColorStop(0.5, "rgba(255,255,238,0)");
  featherLight.addColorStop(1, "rgba(134,80,23,0.2)");
  ctx.fillStyle = featherLight;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(0.41, 0.67, 0.16, 0.13, -0.25, 0, Math.PI * 2);
  ctx.fillStyle = color ? "#ffe9a8" : paper;
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0.29, 0.67);
  ctx.quadraticCurveTo(0.36, 0.76, 0.48, 0.72);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0.63, 0.37, 0.205, 0, Math.PI * 2);
  ctx.fillStyle = feathers;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0.565, 0.275, 0.085, 0.066, -0.4, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,238,0.4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0.63, 0.37, 0.205, 0, Math.PI * 2);
  ctx.stroke();

  // A soft little tuft, drawn within the top margin.
  ctx.beginPath();
  ctx.moveTo(0.56, 0.18);
  ctx.quadraticCurveTo(0.55, 0.09, 0.6 + Math.sin(time * 1.4) * 0.007, 0.13);
  ctx.quadraticCurveTo(0.62, 0.08, 0.65, 0.17);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0.79, 0.39);
  ctx.quadraticCurveTo(0.96, 0.39, 0.94, 0.46);
  ctx.quadraticCurveTo(0.88, 0.5, 0.78, 0.46);
  ctx.closePath();
  ctx.fillStyle = beak;
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0.81, 0.443);
  ctx.quadraticCurveTo(0.87, 0.455, 0.92, 0.44);
  ctx.stroke();

  drawFriendlyEye(ctx, 0.685, 0.337, 0.048, 0.061, time, 1.8, !!color);
  if (color) {
    ctx.beginPath();
    ctx.ellipse(0.659, 0.429, 0.035, 0.022, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(239,146,125,0.5)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0.706, 0.424);
    ctx.quadraticCurveTo(0.74, 0.46, 0.766, 0.423);
    ctx.stroke();
  }
  ctx.restore();
}
