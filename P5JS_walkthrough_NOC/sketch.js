let mover;
function setup() {
  mover = new Mover();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // click for wind
  if (mouseIsPressed) {
    const wind = createVector(0.5, 0)
    mover.applyForce(wind);
  }
  //ball follows mouse
  // dir is a PVector that points from the mover’s location all the way to the mouse.
  const mouse = createVector(mouseX,mouseY);
  let dir = p5.Vector.sub(mouse,mover.location);
  dir.normalize();
  dir.mult(0.4);
  mover.applyForce(dir);


  mover.update();
  mover.checkEdges();
  mover.display();
}