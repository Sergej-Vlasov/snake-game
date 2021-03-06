import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

// game loop function
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press OK to restart")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main); // re-initiating game loop function on every frame render
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // execute update() and draw() login only when we reach the threshold

  lastRenderTime = currentTime;

  update();

  draw();
}

// initiating game loop function for the first time
window.requestAnimationFrame(main);

// update() will contain all the logic for updating the state of the game
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

// draw() will visualise the state of the game
function draw() {
  gameBoard.innerHTML = ""; // clearing the board before each draw
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection(getSnakeHead());
}
