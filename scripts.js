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
const objectColor = 'blue';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const ballRadius = 10;
let x;
let y;
let dx;
let dy;

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
const paddleXStart = (canvas.width - paddleWidth) / 2;
const paddleYStart = canvas.height - paddleHeight;

class Ball {
  constructor(x = 0, y = 0, dx = 2, dy = -1, radius = 10, color = 'blue') {
    this.y = x;
    this.x = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

class Brick {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.status = 1;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = objectColor;
    ctx.fill();
    ctx.closePath();
  }
}
class Bricks {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.init();
  }

  init() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        this.bricks[c][r] = new Brick(
          brickX,
          brickY,
          brickWidth,
          brickHeight,
          objectColor
        );
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (bricks.status == 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

const bricks = new Bricks(brickColumnCount, brickRowCount);
class Paddle {
  constructor(x, y, width, height, color = 'red') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const paddle = new Paddle(
  paddleXStart,
  paddleYStart,
  paddleWidth,
  paddleHeight,
  objectColor
);
class GameLabel {
  constructor(text, x, y, color, font = '16px Ariel') {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    this.value = 0;
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
  }
}

const scoreLabel = new GameLabel('Score: ', 8, 20);
const livesLabel = new GameLabel('Lives: ', canvas.width - 65, 20);
livesLabel.value = 3;
class Games {}

let ball = new Ball(0, 0, 2, -2, ballRadius, objectColor);
resetBallandPaddle();

initializeBricks();

function initializeBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r += 1) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r] = new Brick(
        brickX,
        brickY,
        brickWidth,
        brickHeight,
        objectColor
      );
    }
  }
}

// function collisionsWithCanvasAndPaddle() {
//   if (ball.y + ball.dy < ballRadius) {
//     ball.dy = -ball.dy;
//   } else if (ball.y + ball.dy > canvas.height - ballRadius) {
//     if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
//       ball.dy = -ball.dy;
//     } else {
//       lives--;
//       if (!lives) {
//         // eslint-disable-next-line no-alert
//         alert('GAME OVER');
//         document.location.reload();
//         // eslint-disable-next-line no-use-before-define
//       } else {
//         resetBallandPaddle();
//         paddle.x = (canvas.width - paddleWidth) / 2;
//       }
//     }
//   }

//   if (
//     ball.x + ball.dx > canvas.width - ballRadius ||
//     ball.x + ball.dx < ballRadius
//   ) {
//     ball.dx = -ball.dx;
//   }
//   requestAnimationFrame(draw);
// }

function collisionsWithCanvasAndPaddle() {
  if (
    ball.x + ball.dx > canvas.width - ballRadius ||
    ball.x + ball.dx < ballRadius
  ) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      livesLabel.value -= 1;
      if (livesLavel.value < 1) {
        alert('GAME OVER');
        ball.x = 200;
        ball.y = 200;
        document.location.reload();
      } else {
        resetBallandPaddle();
      }
    }
  }
}
// function movePaddle() {
//   if (rightPressed) {
//     paddle.x += 7;
//     if (paddleX + paddleWidth > canvas.width) {
//       paddle.x = canvas.width - paddleWidth;
//     }
//   } else if (leftPressed) {
//     paddleX -= 7;
//     if (paddleX < 0) {
//       paddleX = 0;
//     }
//   }
// }

function movePaddle() {
  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.moveBy(7, 0);
  } else if (leftPressed && paddle.x > 0) {
    paddle.moveBy(-7, 0);
  }
}

function resetBallandPaddle() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 2;
  ball.dy = -2;
  paddle.x = paddleXStart;
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

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

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
}

function collisionDetection() {
  for (let c = 0; c < bricks.col; c += 1) {
    for (let r = 0; r < bricks.rows; r += 1) {
      const brick = bricks.bricks[c][r];
      if (brick.status === 1) {
        if (
          ball.x > brick.x &&
          ball.x < brick.x + brickWidth &&
          ball.y > brick.y &&
          ball.y < brick.y + brickHeight
        ) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 1;

          scoreLabel.value += 1;

          if (scoreLabel.value == bricks.cols * bricks.rows) {
            alert('YOU WIN, CONGRATULATIONS!');
            alert(`You have collected ${score} points!`);
            document.location.reload();
          }
        }
      }
    }
  }
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.moveTo(relativeX - paddle.width / 2, paddleYStart);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.render(ctx);
  paddle.render(ctx);
  bricks.render(ctx);
  // eslint-disable-next-line no-use-before-define
  collisionDetection();
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line no-use-before-define
  scoreLabel.render(ctx);
  livesLabel.render(ctx);
  ball.move();
  movePaddle();
  collisionsWithCanvasAndPaddle();

  requestAnimationFrame(draw);
}

draw();
