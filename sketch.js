var angle = 0.0
function setup() {
  createCanvas(800, 800);
  background(224, 255, 255);
}

function draw() {
  fill(229, 51, 229);
  stroke(255, 153, 255);
  translate(mouseX, mouseY);
  var scalar = mouseX/ 60.0;
  scale(scalar);
  strokeWeight(1.0/scalar);
  rect(-15, -15, 30,30);
}