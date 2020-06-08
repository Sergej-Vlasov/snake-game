const SNAKE_SPEED = 2;
let lastRenderTime;

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

function update() {}

function draw() {}
