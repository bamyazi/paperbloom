import { INK, paperFill } from "../Paper.ts";
import { drawFriendlyEye } from "./FriendlyEye.ts";

/** A round, friendly bee; all animation stays inside its cutout canvas. */
export function drawBee(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  const paper = paperFill(ctx) ?? "#f3eede";
  const body = color ?? paper;
  const wing = color ? "#dbeef4" : paper;
  const flutter = Math.sin(time * 13) * 0.025;

  ctx.save();
  ctx.scale(w, h);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 0.014;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Wings open and close gently behind the striped body.
  for (const [x, y, rotation] of [[0.52, 0.29, -0.5], [0.73, 0.34, 0.4]]) {
    ctx.beginPath();
    ctx.ellipse(x, y, 0.14, 0.18 + flutter, rotation, 0, Math.PI * 2);
    ctx.fillStyle = wing;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 0.05, y + 0.09);
    ctx.quadraticCurveTo(x + 0.02, y, x + 0.04, y - 0.09);
    ctx.stroke();
  }

  // A tiny blunt tail keeps the silhouette recognisably bee-shaped.
  ctx.beginPath();
  ctx.moveTo(0.83, 0.56);
  ctx.lineTo(0.95, 0.59);
  ctx.lineTo(0.84, 0.65);
  ctx.closePath();
  ctx.fillStyle = INK;
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0.58, 0.61, 0.29, 0.24, -0.08, 0, Math.PI * 2);
  ctx.fillStyle = body;
  ctx.fill();
  const bodyLight = ctx.createLinearGradient(0, 0.36, 0, 0.86);
  bodyLight.addColorStop(0, "rgba(255,255,236,0.6)");
  bodyLight.addColorStop(0.48, "rgba(255,255,236,0)");
  bodyLight.addColorStop(1, "rgba(93,57,28,0.19)");
  ctx.fillStyle = bodyLight;
  ctx.fill();
  ctx.stroke();

  // Clip the dark bands to the rounded paper body, including its lower edge.
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(0.58, 0.61, 0.29, 0.24, -0.08, 0, Math.PI * 2);
  ctx.clip();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 0.065;
  for (const x of [0.57, 0.73]) {
    ctx.beginPath();
    ctx.moveTo(x - 0.025, 0.36);
    ctx.quadraticCurveTo(x + 0.035, 0.59, x - 0.015, 0.87);
    ctx.stroke();
  }
  ctx.restore();

  for (const x of [0.48, 0.65, 0.76]) {
    ctx.beginPath();
    ctx.moveTo(x, 0.79);
    ctx.quadraticCurveTo(x - 0.01, 0.9, x - 0.065, 0.9);
    ctx.stroke();
  }

  // Antennae and a broad smile give the bee a gentle expression.
  for (const [startX, restX] of [[0.23, 0.15], [0.34, 0.39]]) {
    const tipX = restX + Math.sin(time * 1.9 + startX * 7) * 0.012;
    ctx.beginPath();
    ctx.moveTo(startX, 0.43);
    ctx.quadraticCurveTo(startX, 0.27, tipX, 0.24);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(tipX, 0.24, 0.022, 0, Math.PI * 2);
    ctx.fillStyle = INK;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.ellipse(0.29, 0.55, 0.17, 0.19, -0.1, 0, Math.PI * 2);
  ctx.fillStyle = body;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0.247, 0.452, 0.085, 0.065, -0.3, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,235,0.35)";
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0.29, 0.55, 0.17, 0.19, -0.1, 0, Math.PI * 2);
  ctx.stroke();

  for (const x of [0.23, 0.34]) {
    drawFriendlyEye(ctx, x, 0.515, 0.039, 0.052, time, 0.8, !!color);
  }
  if (color) {
    ctx.fillStyle = "rgba(239,128,124,0.52)";
    for (const x of [0.188, 0.385]) {
      ctx.beginPath();
      ctx.ellipse(x, 0.587, 0.025, 0.016, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.beginPath();
  ctx.arc(0.285, 0.585, color ? 0.07 : 0.055, 0.08, Math.PI - 0.08);
  if (color) {
    ctx.closePath();
    ctx.fillStyle = "#754b35";
    ctx.fill();
  }
  ctx.stroke();
  ctx.restore();
}
