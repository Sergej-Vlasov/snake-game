let food = { x: 0, y: 0 };

export function update() {}

export function draw(gameBoard) {
  const foodPiece = document.createElement("div");
  // assigning food piece position in the grid and it's class
  foodPiece.style.gridRowStart = food.y;
  foodPiece.style.gridColumnStart = food.x;
  foodPiece.classList.add("food");
  // appending div that represents food piece to the dom
  gameBoard.appendChild(foodPiece);
}
