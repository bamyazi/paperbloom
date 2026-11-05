import { INK, paperFill } from "../Paper.ts";
import { drawFriendlyEye } from "./FriendlyEye.ts";

/** A friendly lantern beetle: cream paper at rest, a golden glow when coloured. */
export function drawFirefly(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null,
  time = 0
): void {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.min(w, h) * 0.013;
  ctx.strokeStyle = INK;
  const paper = paperFill(ctx) ?? "#f3eede";
  const flutter = Math.sin(time * 8) * 0.035;
  const lanternY = h * 0.7;

  // The halo belongs only to the restored colour; it never leaves the canvas.
  if (color) {
    const glowRadius = Math.min(w * 0.43, h * 0.29);
    const glow = ctx.createRadialGradient(w * 0.5, lanternY, 0, w * 0.5, lanternY, glowRadius);
    const brightness = 0.61 + Math.sin(time * 2) * 0.07;
    glow.addColorStop(0, `rgba(255,244,130,${brightness})`);
    glow.addColorStop(0.45, "rgba(255,230,97,0.25)");
    glow.addColorStop(1, "rgba(255,230,97,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(w * 0.5, lanternY, glowRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Six tiny legs and two translucent paper wings frame the central body.
  for (const side of [-1, 1]) {
    for (let leg = 0; leg < 3; leg++) {
      const y = h * (0.47 + leg * 0.09);
      ctx.beginPath();
      ctx.moveTo(w * (0.5 + side * 0.1), y);
      ctx.lineTo(w * (0.5 + side * 0.22), y + h * 0.025);
      ctx.lineTo(w * (0.5 + side * 0.25), y + h * 0.085);
      ctx.stroke();
    }

    const wingX = w * (0.5 + side * 0.21);
    const wingY = h * 0.45;
    ctx.beginPath();
    ctx.ellipse(wingX, wingY, w * (0.17 + flutter), h * 0.22, side * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = color ? "#eff2da" : paper;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.6);
    ctx.quadraticCurveTo(wingX, h * 0.46, wingX + side * w * 0.075, h * 0.31);
    ctx.lineWidth = Math.min(w, h) * 0.007;
    ctx.strokeStyle = "rgba(50,48,36,0.35)";
    ctx.stroke();
    ctx.lineWidth = Math.min(w, h) * 0.013;
    ctx.strokeStyle = INK;
  }

  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.59, w * 0.145, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fillStyle = color ? "#72a65b" : paper;
  ctx.fill();
  ctx.stroke();

  // A plump pale lantern is part of the silhouette even before it can glow.
  ctx.beginPath();
  ctx.ellipse(w * 0.5, lanternY, w * 0.15, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fillStyle = color ? "#f7d85a" : paper;
  ctx.fill();
  if (color) {
    const light = ctx.createLinearGradient(w * 0.5, h * 0.55, w * 0.5, h * 0.87);
    light.addColorStop(0, "rgba(255,250,174,0.75)");
    light.addColorStop(1, "rgba(255,230,97,0.15)");
    ctx.fillStyle = light;
    ctx.fill();
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.395, h * 0.76);
  ctx.quadraticCurveTo(w * 0.5, h * 0.79, w * 0.605, h * 0.76);
  ctx.strokeStyle = "rgba(50,48,36,0.35)";
  ctx.lineWidth = Math.min(w, h) * 0.007;
  ctx.stroke();
  ctx.strokeStyle = INK;
  ctx.lineWidth = Math.min(w, h) * 0.013;

  if (color) {
    ctx.beginPath();
    ctx.ellipse(w * 0.462, h * 0.642, w * 0.033, h * 0.047, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,235,0.75)";
    ctx.fill();
  }

  for (const side of [-1, 1]) {
    const antennaX = w * (0.5 + side * 0.15);
    const antennaY = h * (0.14 + Math.sin(time * 2 + side) * 0.012);
    ctx.beginPath();
    ctx.moveTo(w * (0.5 + side * 0.06), h * 0.29);
    ctx.quadraticCurveTo(antennaX, h * 0.19, antennaX, antennaY);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(antennaX, antennaY, w * 0.018, h * 0.018, 0, 0, Math.PI * 2);
    ctx.fillStyle = color ? "#72a65b" : paper;
    ctx.fill();
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.32, w * 0.19, h * 0.145, 0, 0, Math.PI * 2);
  ctx.fillStyle = color ? "#83b66b" : paper;
  ctx.fill();
  const faceLight = ctx.createLinearGradient(0, h * 0.175, 0, h * 0.465);
  faceLight.addColorStop(0, "rgba(255,255,234,0.48)");
  faceLight.addColorStop(0.6, "rgba(255,255,234,0)");
  faceLight.addColorStop(1, "rgba(30,65,33,0.15)");
  ctx.fillStyle = faceLight;
  ctx.fill();
  ctx.stroke();
  for (const side of [-1, 1]) {
    drawFriendlyEye(ctx, w * (0.5 + side * 0.075), h * 0.303, w * 0.04, h * 0.049, time, 0.3, !!color);
  }
  ctx.beginPath();
  ctx.moveTo(w * 0.443, h * 0.37);
  ctx.quadraticCurveTo(w * 0.5, h * (color ? 0.44 : 0.414), w * 0.557, h * 0.37);
  if (color) {
    ctx.closePath();
    ctx.fillStyle = "#4d6340";
    ctx.fill();
  }
  ctx.strokeStyle = INK;
  ctx.stroke();
  if (color) {
    for (const side of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(w * (0.5 + side * 0.13), h * 0.36, w * 0.026, h * 0.016, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(237,163,133,0.55)";
      ctx.fill();
    }
  }
  ctx.restore();
}
