// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');
// const ballRadius = 10;
// let x = canvas.width / 2;
// let y = canvas.height - 30;
// let dx = 3;
// let dy = -3;

// const paddleHeight = 10;
// const paddleWidth = 75;
// let paddleX = (canvas.width - paddleWidth) / 2;

// let rightPressed = false;
// let leftPressed = false;

// const brickRowCount = 3;
// const brickColumnCount = 5;
// const brickWidth = 75;
// const brickHeight = 20;
// const brickPadding = 10;
// const brickOffsetTop = 30;
// const brickOffsetLeft = 30;

// let lives = 3;

// let score = 0;

// const bricks = [];
// for (let c = 0; c < brickColumnCount; c++) {
//   bricks[c] = [];
//   for (let r = 0; r < brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0, status: 1 };
//   }
// }

// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       if (bricks[c][r].status == 1) {
//         const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = '#0095DD';
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }
// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = '#0095DD';
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = '#0095DD';
//   ctx.fill();
//   ctx.closePath();
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBall();
//   drawPaddle();
//   drawBricks();
//   // eslint-disable-next-line no-use-before-define
//   collisionDetection();
//   // eslint-disable-next-line no-use-before-define
//   drawScore();
//   // eslint-disable-next-line no-use-before-define
//   drawLives();
//   x += dx;
//   y += dy;

//   if (y + dy < ballRadius) {
//     dy = -dy;
//   } else if (y + dy > canvas.height - ballRadius) {
//     if (x > paddleX && x < paddleX + paddleWidth) {
//       dy = -dy;
//     } else {
//       lives--;
//       if (!lives) {
//         // eslint-disable-next-line no-alert
//         alert('GAME OVER');
//         document.location.reload();
//         // eslint-disable-next-line no-use-before-define
//       } else {
//         x = canvas.width / 2;
//         y = canvas.height - 30;
//         dx = 2;
//         dy = -2;
//         paddleX = (canvas.width - paddleWidth) / 2;
//       }
//     }
//   }

//   if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//     dx = -dx;
//   }

//   if (rightPressed) {
//     paddleX += 7;
//     if (paddleX + paddleWidth > canvas.width) {
//       paddleX = canvas.width - paddleWidth;
//     }
//   } else if (leftPressed) {
//     paddleX -= 7;
//     if (paddleX < 0) {
//       paddleX = 0;
//     }
//   }
//   requestAnimationFrame(draw);
// }

// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
// document.addEventListener('mousemove', mouseMoveHandler, false);

// function keyDownHandler(e) {
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   }
// }

// function collisionDetection() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       let b = bricks[c][r];
//       if (b.status == 1) {
//         if (
//           x > b.x &&
//           x < b.x + brickWidth &&
//           y > b.y &&
//           y < b.y + brickHeight
//         ) {
//           dy = -dy;
//           b.status = 0;
//           score++;
//           if (score == brickRowCount * brickColumnCount) {
//             alert('YOU WIN, CONGRATULATIONS!');
//             alert(`You have collected ${score} points!`);
//             document.location.reload();
//           }
//         }
//       }
//     }
//   }
// }
// function drawScore() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = '#0095DD';
//   ctx.fillText(`Score: ${score}`, 8, 20);
// }

// function mouseMoveHandler(e) {
//   let relativeX = e.clientX - canvas.offsetLeft;
//   if (relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth / 2;
//   }
// }

// function drawLives() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = '#0095DD';
//   ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
// }
// draw();

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

// class Sprite {
//   constructor(x, y) {
//     this.x = x;
//     this.y = x;
//   }

//   moveTo(x, y) {
//     this.x = x;
//     this.y = x;
//   }

//   moveBy(x, y) {
//     this.x += dx;
//     this.y += dy;
//   }
// }

// class Ball extends Sprite {
//   constructor(radius, x, y) {
//     // Must pass params to super when extending a class!
//     super(x, y);
//     this.radius = radius;
//   }

//   render() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = '#0095DD';
//     ctx.fill();
//     ctx.closePath();
//   }
// }

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
const PI2 = Math.PI * 2;
const objectColor = '#0095DD';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const ballRadius = 10;
let x;
let y;
let dx;
let dy;

class Ball {
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10) {
    this.y = x;
    this.x = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
}

let ball = new Ball();
resetBallandPaddle();

const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let lives = 3;

let score = 0;

const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function collisionsWithCanvasAndPaddle() {
  if (ball.y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      lives--;
      if (!lives) {
        // eslint-disable-next-line no-alert
        alert('GAME OVER');
        document.location.reload();
        // eslint-disable-next-line no-use-before-define
      } else {
        resetBallandPaddle();
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (
    ball.x + ball.dx > canvas.width - ballRadius ||
    ball.x + ball.dx < ballRadius
  ) {
    ball.dx = -ball.dx;
  }
  requestAnimationFrame(draw);
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = objectColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ballRadius, 0, PI2);
  ctx.fillStyle = objectColor;
  ctx.fill();
  ctx.closePath();
}

function movePaddle() {
  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = objectColor;
  ctx.fill();
  ctx.closePath();
}

function resetBallandPaddle() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 2;
  ball.dy = -2;
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  // eslint-disable-next-line no-use-before-define
  collisionDetection();
  // eslint-disable-next-line no-use-before-define
  drawScore();
  // eslint-disable-next-line no-use-before-define
  drawLives();
  moveBall();
  movePaddle();
  collisionsWithCanvasAndPaddle();
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (
          ball.x > b.x &&
          ball.x < b.x + brickWidth &&
          ball.y > b.y &&
          ball.y < b.y + brickHeight
        ) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            alert(`You have collected ${score} points!`);
            document.location.reload();
          }
        }
      }
    }
  }
}
function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = objectColor;
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = objectColor;
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
draw();
