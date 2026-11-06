/** Tiny paper props are drawn once into the shared surprise texture bank. */
export function drawAcorn(context: CanvasRenderingContext2D, width: number, height: number): void {
  context.save();
  context.scale(width, height);
  context.lineWidth = 0.024;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "#785a3c";
  context.beginPath();
  context.moveTo(0.23, 0.43);
  context.bezierCurveTo(0.2, 0.67, 0.32, 0.83, 0.5, 0.9);
  context.bezierCurveTo(0.68, 0.83, 0.8, 0.67, 0.77, 0.43);
  context.closePath();
  const nut = context.createLinearGradient(0.25, 0.4, 0.75, 0.8);
  nut.addColorStop(0, "#edca8a");
  nut.addColorStop(1, "#bf8d51");
  context.fillStyle = nut;
  context.fill();
  context.stroke();
  context.beginPath();
  context.moveTo(0.2, 0.45);
  context.quadraticCurveTo(0.18, 0.22, 0.5, 0.24);
  context.quadraticCurveTo(0.82, 0.22, 0.8, 0.45);
  context.quadraticCurveTo(0.5, 0.54, 0.2, 0.45);
  context.closePath();
  context.fillStyle = "#9d845d";
  context.fill();
  context.stroke();
  context.beginPath();
  context.moveTo(0.49, 0.25);
  context.quadraticCurveTo(0.47, 0.12, 0.58, 0.1);
  context.stroke();
  context.fillStyle = "rgba(255,249,215,0.5)";
  context.beginPath();
  context.ellipse(0.37, 0.62, 0.055, 0.12, -0.25, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

export function drawPaperStar(context: CanvasRenderingContext2D, width: number, height: number): void {
  context.beginPath();
  for (let point = 0; point < 10; point++) {
    const angle = -Math.PI / 2 + point * Math.PI / 5;
    const radius = Math.min(width, height) * (point % 2 === 0 ? 0.4 : 0.2);
    const x = width / 2 + Math.cos(angle) * radius;
    const y = height / 2 + Math.sin(angle) * radius;
    if (point === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.fillStyle = "#ffe3a0";
  context.fill();
  context.strokeStyle = "#c39b53";
  context.lineWidth = width * 0.025;
  context.stroke();
}

export function drawRipple(context: CanvasRenderingContext2D, width: number, height: number): void {
  context.strokeStyle = "rgba(111,164,180,0.58)";
  context.lineWidth = Math.min(width, height) * 0.023;
  context.beginPath();
  context.ellipse(width / 2, height / 2, width * 0.41, height * 0.41, 0, 0, Math.PI * 2);
  context.stroke();
}

export function drawWaterDrop(context: CanvasRenderingContext2D, width: number, height: number): void {
  context.beginPath();
  context.moveTo(width * 0.5, height * 0.1);
  context.bezierCurveTo(width * 0.2, height * 0.4, width * 0.1, height * 0.85, width * 0.5, height * 0.9);
  context.bezierCurveTo(width * 0.9, height * 0.85, width * 0.8, height * 0.4, width * 0.5, height * 0.1);
  context.fillStyle = "#9dcfdf";
  context.fill();
  context.strokeStyle = "#72aaba";
  context.lineWidth = width * 0.07;
  context.stroke();
}
