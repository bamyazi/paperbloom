import { drawBird, drawFox, drawFrog, drawGirl, drawRabbit } from "../art/Figures.ts";
import { drawBee } from "../art/animals/Bee.ts";
import { drawDuckling } from "../art/animals/Duckling.ts";
import type { CanvasDraw } from "../../engine/Cutout.ts";

/** A single, static illustration; it shares the book's authored paper characters. */
export function addBookCover(titleCard: HTMLElement): void {
  if (titleCard.querySelector(".book-cover-art")) return;
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 520;
  canvas.className = "book-cover-art";
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "Mabli and her rainbow hair, surrounded by smiling woodland friends in a little paper garden.");
  const context = canvas.getContext("2d");
  if (!context) return;
  // Draw once at 2× density. CSS only changes the illustration's displayed size.
  context.scale(2, 2);
  drawPaperStage(context);
  drawSun(context, 476, 49);
  drawCloud(context, 118, 69, 62);
  drawCloud(context, 387, 35, 45);

  paintFigure(context, drawBee, 153, 49, 73, 61, "#edc955");
  paintFigure(context, drawBird, 373, 59, 64, 62, "#70b4c3");
  paintFigure(context, drawGirl, 235, 12, 130, 225, "#79a899");
  paintFigure(context, drawFox, 347, 136, 121, 108, "#dc935c");
  paintFigure(context, drawRabbit, 443, 128, 83, 115, "#c6af91");
  paintFigure(context, drawFrog, 102, 168, 94, 77, "#80ad75");
  paintFigure(context, drawDuckling, 184, 159, 79, 87, "#f4cc63");

  for (const [x, y, color] of [
    [73, 221, "#df9fb2"], [91, 228, "#e9bf6a"],
    [521, 225, "#dca5bf"], [541, 218, "#e7bf6a"]
  ] as const) drawFlower(context, x, y, color);
  for (const [x, y, radius] of [[67, 101, 7], [232, 48, 5], [429, 99, 5], [542, 108, 8], [360, 21, 4]]) {
    drawStar(context, x, y, radius);
  }
  titleCard.classList.add("has-book-cover");
  titleCard.prepend(canvas);
}

function paintFigure(
  context: CanvasRenderingContext2D,
  draw: CanvasDraw,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string
): void {
  context.save();
  context.translate(x, y);
  draw(context, width, height, color, 0.8);
  context.restore();
}

function drawPaperStage(context: CanvasRenderingContext2D): void {
  const glow = context.createRadialGradient(300, 122, 25, 300, 133, 275);
  glow.addColorStop(0, "rgba(222,235,222,0.72)");
  glow.addColorStop(0.65, "rgba(231,238,221,0.48)");
  glow.addColorStop(1, "rgba(246,239,220,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, 600, 260);
  context.fillStyle = "rgba(100,83,49,0.12)";
  context.beginPath();
  context.ellipse(300, 245, 248, 10, 0, 0, Math.PI * 2);
  context.fill();

  // A warm folded page beneath two different, softly rounded hill layers.
  context.beginPath();
  context.moveTo(43, 206);
  context.quadraticCurveTo(294, 185, 558, 206);
  context.lineTo(543, 240);
  context.quadraticCurveTo(300, 260, 57, 240);
  context.closePath();
  context.fillStyle = "#f5e8c8";
  context.fill();
  context.strokeStyle = "#c9b88f";
  context.lineWidth = 1.3;
  context.stroke();
  context.beginPath();
  context.moveTo(61, 236);
  context.quadraticCurveTo(302, 251, 540, 236);
  context.strokeStyle = "rgba(170,142,93,0.45)";
  context.stroke();

  context.beginPath();
  context.moveTo(50, 217);
  context.bezierCurveTo(71, 155, 142, 137, 205, 171);
  context.bezierCurveTo(270, 113, 355, 137, 410, 170);
  context.bezierCurveTo(475, 137, 536, 168, 551, 217);
  context.closePath();
  context.fillStyle = "#b9d3c8";
  context.fill();

  context.beginPath();
  context.moveTo(46, 219);
  context.bezierCurveTo(124, 180, 199, 198, 292, 213);
  context.bezierCurveTo(378, 175, 485, 185, 557, 219);
  context.quadraticCurveTo(302, 251, 46, 219);
  context.closePath();
  const grass = context.createLinearGradient(0, 185, 0, 245);
  grass.addColorStop(0, "#dce1b1");
  grass.addColorStop(1, "#aec68f");
  context.fillStyle = grass;
  context.fill();
  context.strokeStyle = "rgba(101,127,81,0.5)";
  context.lineWidth = 1.2;
  context.stroke();
}

function drawSun(context: CanvasRenderingContext2D, x: number, y: number): void {
  context.save();
  context.translate(x, y);
  context.strokeStyle = "#d4ad65";
  context.lineWidth = 2;
  context.lineCap = "round";
  for (let ray = 0; ray < 10; ray++) {
    const angle = ray / 10 * Math.PI * 2;
    context.beginPath();
    context.moveTo(Math.cos(angle) * 29, Math.sin(angle) * 29);
    context.lineTo(Math.cos(angle) * 35, Math.sin(angle) * 35);
    context.stroke();
  }
  context.beginPath();
  context.arc(0, 0, 23, 0, Math.PI * 2);
  context.fillStyle = "#f5da8a";
  context.fill();
  context.stroke();
  context.fillStyle = "#8b754b";
  for (const eyeX of [-7, 7]) {
    context.beginPath();
    context.arc(eyeX, -2, 1.7, 0, Math.PI * 2);
    context.fill();
  }
  context.beginPath();
  context.arc(0, 2, 8, 0.15 * Math.PI, 0.85 * Math.PI);
  context.stroke();
  context.restore();
}

function drawCloud(context: CanvasRenderingContext2D, x: number, y: number, width: number): void {
  context.save();
  context.translate(x, y);
  context.fillStyle = "rgba(255,253,241,0.92)";
  context.strokeStyle = "rgba(155,173,158,0.4)";
  context.lineWidth = 1.1;
  context.beginPath();
  context.ellipse(0, 0, width * 0.5, width * 0.17, 0, 0, Math.PI * 2);
  context.ellipse(-width * 0.13, -width * 0.12, width * 0.19, width * 0.2, 0, 0, Math.PI * 2);
  context.ellipse(width * 0.15, -width * 0.09, width * 0.22, width * 0.18, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.restore();
}

function drawFlower(context: CanvasRenderingContext2D, x: number, y: number, color: string): void {
  context.strokeStyle = "#7f9a6c";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x, y);
  context.quadraticCurveTo(x - 4, y - 11, x, y - 20);
  context.stroke();
  context.fillStyle = color;
  for (let petal = 0; petal < 5; petal++) {
    const angle = petal / 5 * Math.PI * 2;
    context.beginPath();
    context.ellipse(x + Math.cos(angle) * 5, y - 20 + Math.sin(angle) * 5, 4, 5, angle, 0, Math.PI * 2);
    context.fill();
  }
  context.beginPath();
  context.arc(x, y - 20, 3.3, 0, Math.PI * 2);
  context.fillStyle = "#f8df93";
  context.fill();
}

function drawStar(context: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
  context.beginPath();
  for (let point = 0; point < 8; point++) {
    const angle = -Math.PI / 2 + point / 8 * Math.PI * 2;
    const length = point % 2 === 0 ? radius : radius * 0.3;
    const px = x + Math.cos(angle) * length;
    const py = y + Math.sin(angle) * length;
    if (point === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.closePath();
  context.fillStyle = "#d7b56b";
  context.fill();
}
