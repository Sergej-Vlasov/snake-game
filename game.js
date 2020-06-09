import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime;
const gameBoard = document.getElementById("game-board");

// game loop function
function main(currentTime) {
  window.requestAnimationFrame(main); // re-initiating game loop function on every frame render
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // execute update() and draw() login only when we reach the threshold

  lastRenderTime = currentTime;
  console.log("Render");

  update();

  draw();
}

// initiating game loop function for the first time
window.requestAnimationFrame(main);

// update() will contain all the logic for updating the state of the game
function update() {
  updateSnake();
  updateFood();
}

// draw() will visualise the state of the game
function draw() {
  gameBoard.innerHTML = ""; // clearing the board before each draw
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
