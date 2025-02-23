const init = () => {
  // console.log("Init fn");
  draw();
};

player.locX = Math.floor(500 * Math.random() + 10);
player.locY = Math.floor(500 * Math.random() + 10);

context.beginPath();
context.fillStyle = "rgb(255,0,0)";
context.arc(player.locX, player.locY, 10, 0, Math.PI * 2); // draw an arc/circle
// arg1 and arg2 are center x and center of the arc
// arg3 = radius of the the circle
// arg4 = where to start drawing in the radians - 0 = 3:00
// arg 5 = where to stop drawing in the radians - Pi = 90deg
context.fill();
context.lineWidth = 3; // how wide to draw a line in pixels
context.strokeStyle = "rgb(0,255,0)"; // draw a green line
context.stroke();

// =========================
// ============DRAW=========
// =========================
const draw = () => {
  // clear out the canvas so we can draw on a clean canvas next frame/draw()
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.setTranslate(1, 0, 0, 1, 0, 0);

  // clamp the screen/view port to the players location(x,y)
  const camX = -player.locX + canvas.width / 2;
  const camY = -player.locY + canvas.height / 2;
  // translate moves the canvas/context to where the player is at.
  context.translate(camX, camY);

  context.beginPath();
  context.fillStyle = "rgb(255,0,0)";
  context.arc(player.locX, player.locY, 10, 0, Math.PI * 2); // draw an arc/circle
  // arg1 and arg2 are center x and center of the arc
  // arg3 = radius of the the circle
  // arg4 = where to start drawing in the radians - 0 = 3:00
  // arg 5 = where to stop drawing in the radians - Pi = 90deg
  context.fill();
  context.lineWidth = 3; // how wide to draw a line in pixels
  context.strokeStyle = "rgb(0,255,0)"; // draw a green line
  context.stroke();
  // requestAnimationFrame is like a controlled loop.
  // It runs recursively
  requestAnimationFrame(draw);
};

canvas.addEventListener("mousemove", (event) => {
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
  const angleDeg =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
    console.log("Mouse is in the lower right quadrant");
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
    console.log("Mouse is in the lower left quadrant");
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
    console.log("Mouse is in the top left quadrant");
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
    console.log("Mouse is in the top right quadrant");
  }

  speed = 10;
  xV = xVector;
  yV = yVector;

  if ((player.locX < 5 && xV < 0) || (player.locX > 500 && xV > 0)) {
    player.locY -= speed * yV;
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV;
  } else {
    player.locX += speed * xV;
    player.locY -= speed * yV;
  }
});
