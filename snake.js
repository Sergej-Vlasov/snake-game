import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }]; // starting position of snake in the grid
let newParts = 0;

export function update() {
  addParts(); // adding new snake body parts if there are any

  const inputDirection = getInputDirection();

  // moving all but last body parts in the array up to mimic movement
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // assigning the new position of head according to input
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach(part => {
    const snakeBodyPart = document.createElement("div");
    // assigning body part position in the grid and it's class
    snakeBodyPart.style.gridRowStart = part.y;
    snakeBodyPart.style.gridColumnStart = part.x;
    snakeBodyPart.classList.add("snake");
    // appending div that represents 1 body part to the dom
    gameBoard.appendChild(snakeBodyPart);
  });
}

export function expandSnake(amount) {
  newParts += amount;
}

export function onSnake(position) {
  // checking if given position is matching with any of the snake body part position
  return snakeBody.some(part => matchingPositions(position, part));
}

export function onSnakeHead(position) {
  // checking if food piece's position matches to any of the body part position
  return matchingPositions(position, snakeBody[0]);
}

function matchingPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addParts() {
  for (let i = 0; i < newParts; i++) {
    // appending a duplicate of the last snake element to body array
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newParts = 0;
}
