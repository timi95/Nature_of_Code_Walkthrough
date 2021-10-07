let mover;
function setup() {
  mover = new Mover();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  mover.update();
  mover.checkEdges();
  mover.display();
}