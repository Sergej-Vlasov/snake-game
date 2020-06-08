export const SNAKE_SPEED = 2;
const snakeBody = [{ x: 11, y: 11 }]; // starting position of snake in the grid

export function update() {
  console.log("update snake");
}

export function draw(gameBoard) {
  snakeBody.forEach(part => {
    const snakeBodyPart = document.createElement("div");
    // assigning body part position in the grid and it's class
    snakeBodyPart.style.gridRowStart = part.x;
    snakeBodyPart.style.gridColumnStart = part.y;
    snakeBodyPart.classList.add("snake");
    // appending div that represents 1 body part to the dom
    gameBoard.appendChild(snakeBodyPart);
  });
}
