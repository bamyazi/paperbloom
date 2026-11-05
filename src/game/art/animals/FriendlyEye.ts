import { INK } from "../Paper.ts";

/** Large paper-white eyes stay readable on small screens without heavy effects. */
export function drawFriendlyEye(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radiusX: number,
  radiusY: number,
  time: number,
  blinkOffset = 0,
  joyful = false
): void {
  ctx.save();
  ctx.strokeStyle = INK;
  ctx.lineWidth = Math.min(radiusX, radiusY) * 0.18;
  ctx.lineCap = "round";
  if ((time + blinkOffset) % 4.8 > 4.62) {
    ctx.beginPath();
    ctx.moveTo(x - radiusX * 0.85, y);
    ctx.quadraticCurveTo(x, y + radiusY * (joyful ? -0.35 : 0.15), x + radiusX * 0.85, y);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#fffdf2";
    ctx.fill();
    ctx.stroke();
    const glance = Math.sin(time * 0.8 + blinkOffset) * radiusX * 0.12;
    ctx.beginPath();
    ctx.ellipse(x + glance, y + radiusY * 0.08, radiusX * 0.49, radiusY * (joyful ? 0.65 : 0.58), 0, 0, Math.PI * 2);
    ctx.fillStyle = INK;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + glance - radiusX * 0.17, y - radiusY * 0.19, radiusX * 0.2, radiusY * 0.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + glance + radiusX * 0.18, y + radiusY * 0.3, radiusX * 0.09, radiusY * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}
