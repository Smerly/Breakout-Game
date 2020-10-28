const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 1.5;
let dy = -1.5;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
}

setInterval(draw, 10);
