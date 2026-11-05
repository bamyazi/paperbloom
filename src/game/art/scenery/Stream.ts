import { INK, paperFill } from "../Paper.ts";

/** A flat paper stream whose water joins the chapter's scenery colour wash. */
export function drawStream(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color?: string | null
): void {
  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const paper = paperFill(ctx) ?? "#f3eede";

  ctx.beginPath();
  ctx.moveTo(w * 0.045, h * 0.52);
  ctx.bezierCurveTo(w * 0.06, h * 0.28, w * 0.25, h * 0.13, w * 0.48, h * 0.17);
  ctx.bezierCurveTo(w * 0.7, h * 0.08, w * 0.91, h * 0.23, w * 0.955, h * 0.47);
  ctx.bezierCurveTo(w * 0.95, h * 0.71, w * 0.81, h * 0.88, w * 0.55, h * 0.84);
  ctx.bezierCurveTo(w * 0.32, h * 0.95, w * 0.12, h * 0.82, w * 0.045, h * 0.52);
  ctx.closePath();
  ctx.fillStyle = color ?? paper;
  ctx.fill();

  if (color) {
    // Keep the restored blue soft and textured, like paint soaking into paper.
    ctx.save();
    ctx.clip();
    const reflection = ctx.createLinearGradient(0, h * 0.2, 0, h * 0.85);
    reflection.addColorStop(0, "rgba(255,255,240,0.4)");
    reflection.addColorStop(0.6, "rgba(255,255,240,0)");
    reflection.addColorStop(1, "rgba(45,88,113,0.12)");
    ctx.fillStyle = reflection;
    ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  ctx.strokeStyle = INK;
  ctx.lineWidth = Math.min(w, h) * 0.009;
  ctx.stroke();

  ctx.strokeStyle = color ? "rgba(54,96,116,0.6)" : "rgba(33,29,24,0.4)";
  ctx.lineWidth = Math.min(w, h) * 0.005;
  for (const [x, y, radius] of [
    [0.27, 0.36, 0.08],
    [0.62, 0.3, 0.1],
    [0.8, 0.49, 0.06],
    [0.38, 0.54, 0.12],
    [0.2, 0.64, 0.06],
    [0.66, 0.71, 0.1]
  ]) {
    ctx.beginPath();
    ctx.moveTo(w * (x - radius), h * y);
    ctx.bezierCurveTo(
      w * (x - radius * 0.4), h * (y + 0.025),
      w * (x + radius * 0.4), h * (y - 0.025),
      w * (x + radius), h * y
    );
    ctx.stroke();
  }
  ctx.restore();
}
