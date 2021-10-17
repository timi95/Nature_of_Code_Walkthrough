let mover;
function setup() {
  mover = new Mover();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  if (mouseIsPressed) {
    const wind = createVector(0.5, 0)
    mover.applyForce(wind);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
}