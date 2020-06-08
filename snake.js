export const SNAKE_SPEED = 2;
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 }
]; // starting position of snake in the grid

export function update() {
  // moving all but last body parts in the array up to mimic movement
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // for now manually assigning the new direction of head
  snakeBody[0].x += 1;
  snakeBody[0].y += 0;
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
