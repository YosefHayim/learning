const init = () => {
  // console.log("Init fn");
  draw();
};

// =========================
// ============DRAW=========
// =========================

let randomX = Math.floor(500 * Math.random() + 10);
let randomY = Math.floor(500 * Math.random() + 10);
context.beginPath();
context.fillStyle = "rgb(255,0,0)";
context.arc(randomX, randomY, 10, 0, Math.PI * 2); // draw an arc/circle
// arg1 and arg2 are center x and center of the arc
// arg3 = radius of the the circle
// arg4 = where to start drawing in the radians - 0 = 3:00
// arg 5 = where to stop drawing in the radians - Pi = 90deg
context.fill();
context.lineWidth = 3; // how wide to draw a line in pixels
context.strokeStyle = "rgb(0,255,0)"; // draw a green line
context.stroke();

const draw = () => {};
