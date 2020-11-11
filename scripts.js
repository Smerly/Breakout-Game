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

let x;
let y;
let dx;
let dy;

class Ball extends Sprite {
  constructor(x = 0, y = 0, dx = 2, dy = -1, radius = 10, color = 'blue') {
    super(x, y, radius * 2, radius * 2, color);

    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.PI2 = Math.PI * 2;
  }

  move() {
    this.moveBy(this.dx, this.dy);
  }
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.PI2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

class Sprite {
  constructor(x = 0, y = 0, width = 10, height = 10, color = 'red') {
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

class Brick extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.status = 1;
  }
}
class Bricks {
  constructor(options) {
    const {
      cols,
      rows,
      width,
      height,
      padding,
      offsetLeft,
      offsetTop,
      color,
    } = options;
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.init();
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetLeft = offsetLeft;
    this.offsetTop = offsetTop;
  }

  init() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = c * (this.width + this.padding) + this.offsetLeft;
        const brickY = r * (this.height + this.padding) + this.offsetTop;
        this.bricks[c][r] = new Brick(
          brickX,
          brickY,
          this.width,
          this.height,
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

class Paddle extends Sprite {
  constructor(x, y, width, height, color = 'red') {
    super(x, y, width, height, color);
  }
}

class GameLabel extends Sprite {
  constructor(text, x, y, color, font = '16px Ariel') {
    super(x, y, 0, 0, color);
    this.text = text;
    this.value = 0;
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
  }
}

// -----------------------

class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.ballRadius = 10;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.brickRowCount = 3;
    this.brickwidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;
    this.paddleYStart = this.canvas.height - this.paddleHeight;
    this.objectColor = '#0095DD';
    this.gameOverMessage = 'Game Over';

    // let paddleX = (this.canvas.width - this.paddle.width) / 2;
    // this.keyDownHandlerPI2 = Math.PI * 2;
    // this.objectColor = 'blue';
    // this.ballRadius = 10;

    // this.paddleHeight = 10;
    // this.paddleWidth = 75;

    // this.brickRowCount = 3;
    // this.brickColumnCount = 5;
    // this.brickWidth = 75;
    // this.brickHeight = 20;
    // this.brickPadding = 10;
    // this.brickOffsetTop = 30;
    // this.brickOffsetLeft = 30;
    // this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;
    // this.paddleYStart = this.canvas.height - this.paddleHeight;

    this.ball = new Ball(0, 0, 2, -2, this.ballRadius, this.objectColor);

    this.bricks = new Bricks({
      cols: this.brickColumnCount,
      rows: this.brickRowCount,
      width: this.brickWidth,
      height: this.brickHeight,
      padding: this.brickPadding,
      offsetLeft: this.brickOffsetLeft,
      offsetTop: this.brickOffsetTop,
      color: this.objectColor,
    });
    this.paddle = new Sprite(
      this.paddleXStart,
      this.paddleYStart,
      this.paddleWidth,
      this.paddleHeight,
      this.objectColor
    );
    this.scoreLabel = new GameLabel('Score: ', 8, 20, this.objectColor);
    this.livesLabel = new GameLabel(
      'Lives: ',
      this.objectColor,
      this.canvas.width - 65,
      20
    );

    this.rightPressed = false;
    this.leftPressed = false;

    this.setup();

    this.draw();
  }
  setup() {
    livesLabel.value = 3;
    resetBallandPaddle();

    document.addEventListener(
      'keydown',
      (e) => {
        this.keyDownHandler(e);
      },
      false
    );
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    document.addEventListener(
      'mousemove',
      this.mouseMoveHandler.bind(this),
      false
    );
  }

  resetBallandPaddle() {
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height - 30;
    this.ball.dx = 2;
    this.ball.dy = -2;
    this.paddle.x = this.paddleXStart;
  }

  collisionDetection() {
    for (let c = 0; c < this.bricks.col; c += 1) {
      for (let r = 0; r < this.bricks.rows; r += 1) {
        const brick = this.bricks.bricks[c][r];
        if (brick.status === 1) {
          if (
            this.ball.x > brick.x &&
            this.ball.x < brick.x + brickWidth &&
            this.ball.y > brick.y &&
            this.ball.y < brick.y + brickHeight
          ) {
            this.ball.dy = -this.ball.dy;
            brick.status = 0;

            this.scoreLabel.value += 1;

            if (this.scoreLabel.value == this.bricks.cols * this.bricks.rows) {
              alert('YOU WIN, CONGRATULATIONS!');
              alert(`You have collected ${score} points!`);
              document.location.reload();
            }
          }
        }
      }
    }
  }

  movePaddle() {
    if (
      this.rightPressed &&
      this.paddle.x < this.canvas.width - this.paddle.width
    ) {
      this.paddle.moveBy(7, 0);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveBy(-7, 0);
    }
  }

  collisionsWithCanvasAndPaddle() {
    if (
      this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius ||
      this.ball.x + this.ball.dx < this.ball.radius
    ) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      if (
        this.ball.x > this.paddle.x &&
        this.ball.x < this.paddle.x + this.paddle.width
      ) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.livesLabel.value -= 1;
        if (this.livesLavel.value < 1) {
          alert('GAME OVER');
          this.ball.x = 200;
          this.ball.y = 200;
          document.location.reload();
        } else {
          this.resetBallandPaddle();
        }
      }
    }
  }

  draw() {
    console.log('game.draw()');
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.render(this.ctx);
    // eslint-disable-next-line no-use-before-define
    this.collisionDetection();
    // eslint-disable-next-line no-use-before-define
    // eslint-disable-next-line no-use-before-define
    this.scoreLabel.render(this.ctx);
    this.livesLabel.render(this.ctx);
    this.ball.move();
    this.movePaddle();
    this.collisionsWithCanvasAndPaddle();

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  keyDownHandler(e) {
    if (e.keyCode === 39) {
      this.rightPressed = true;
    } else if (e.keyCode === 37) {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.keyCode === 39) {
      this.rightPressed = false;
    } else if (e.keyCode === 37) {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (this.relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.moveTo(relativeX - this.paddle.width / 2, this.paddleYStart);
    }
  }
} //

// initializeBricks();

// function initializeBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     bricks[c] = [];
//     for (let r = 0; r < brickRowCount; r += 1) {
//       const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//       const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//       bricks[c][r] = new Brick(
//         brickX,
//         brickY,
//         brickWidth,
//         brickHeight,
//         objectColor
//       );
//     }
//   }
// }

const game = new Game('myCanvas');

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
