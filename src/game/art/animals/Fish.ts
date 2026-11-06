import { INK, paperFill } from "../Paper.ts";
import { drawFriendlyEye } from "./FriendlyEye.ts";

/** A plump, smiling goldfish with soft fan fins, framed inside its paper cutout. */
export function drawFish(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  color?: string | null,
  time = 0
): void {
  context.save();
  context.scale(width, height);
  context.lineWidth = 0.012;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.strokeStyle = INK;
  const paper = paperFill(context) ?? "#f3eede";
  const fin = color ? "#f3bb67" : paper;
  const wiggle = Math.sin(time * 3) * 0.018;

  // Broad, rounded fan tail: friendly paper lobes instead of a pointed barb.
  context.beginPath();
  context.moveTo(0.32, 0.49);
  context.bezierCurveTo(0.17, 0.32, 0.07, 0.3 + wiggle, 0.1, 0.43);
  context.quadraticCurveTo(0.03, 0.54, 0.11, 0.59);
  context.bezierCurveTo(0.07, 0.76, 0.22, 0.68, 0.34, 0.59);
  context.closePath();
  context.fillStyle = fin;
  context.fill();
  context.stroke();
  for (const y of [0.4, 0.53, 0.66]) {
    context.beginPath();
    context.moveTo(0.29, 0.54);
    context.quadraticCurveTo(0.2, 0.52, 0.12, y);
    context.strokeStyle = color ? "rgba(164,111,50,0.45)" : INK;
    context.stroke();
  }
  context.strokeStyle = INK;

  context.beginPath();
  context.moveTo(0.4, 0.35);
  context.quadraticCurveTo(0.47, 0.14, 0.62, 0.24);
  context.quadraticCurveTo(0.63, 0.31, 0.67, 0.37);
  context.closePath();
  context.fillStyle = fin;
  context.fill();
  context.stroke();

  context.beginPath();
  context.ellipse(0.56, 0.53, 0.3, 0.27, -0.06, 0, Math.PI * 2);
  const body = context.createLinearGradient(0.4, 0.27, 0.55, 0.81);
  body.addColorStop(0, color ? "#ffe8a1" : "#fff9e8");
  body.addColorStop(0.45, color ?? "#f3eede");
  body.addColorStop(1, color ? "#eaa052" : "#e2d6b8");
  context.fillStyle = body;
  context.fill();
  context.stroke();

  // A little translucent side fin and two gentle gill curves.
  context.beginPath();
  context.moveTo(0.51, 0.54);
  context.quadraticCurveTo(0.36, 0.55, 0.39, 0.71);
  context.quadraticCurveTo(0.54, 0.71, 0.57, 0.58);
  context.closePath();
  context.fillStyle = fin;
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(0.64, 0.57, 0.075, Math.PI * 0.62, Math.PI * 1.3);
  context.strokeStyle = "rgba(102,72,37,0.48)";
  context.stroke();
  drawFriendlyEye(context, 0.724, 0.435, 0.052, 0.073, time, 1.5, true);
  context.beginPath();
  context.ellipse(0.755, 0.58, 0.04, 0.032, -0.2, 0, Math.PI * 2);
  context.fillStyle = color ? "rgba(229,127,113,0.45)" : "rgba(191,166,131,0.25)";
  context.fill();
  context.beginPath();
  context.moveTo(0.782, 0.53);
  context.quadraticCurveTo(0.835, 0.565, 0.843, 0.51);
  context.strokeStyle = INK;
  context.stroke();
  context.restore();
}
