import { onSnake, expandSnake } from "./snake.js";

const EXPANSION_RATE = 1;
let food = { x: 10, y: 15 };

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 12 };
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
