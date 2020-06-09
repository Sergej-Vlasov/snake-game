import { onSnakeHead, onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

const EXPANSION_RATE = 1;
let food = getRandomFoodPosition();

export function update() {
  if (onSnakeHead(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodPiece = document.createElement("div");
  // assigning food piece position in the grid and it's class
  foodPiece.style.gridRowStart = food.y;
  foodPiece.style.gridColumnStart = food.x;
  foodPiece.classList.add("food");
  // appending div that represents food piece to the dom
  gameBoard.appendChild(foodPiece);
}

function getRandomFoodPosition() {
  let newFoodPosition;

  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
