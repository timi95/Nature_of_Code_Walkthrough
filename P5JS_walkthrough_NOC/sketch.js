let mover;
let balloon;
function setup() {
  mover = new Mover();
  balloon = new Balloon();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // click for wind
  if (mouseIsPressed) {
    westernWind(mover);
    westernWind(balloon);

  }
  followMouseBehaviour(mover);

  mover.update();
  mover.checkEdges();
  mover.display();

  balloon.update();
  balloon.display();
}



function followMouseBehaviour(object){
  //ball follows mouse
  // dir is a PVector that points from the mover’s location all the way to the mouse.
  const mouse = createVector(mouseX,mouseY);
  let dir = p5.Vector.sub(mouse,object.location);
  dir.normalize();
  dir.mult(0.4);
  object.applyForce(dir);
}

function westernWind(object){
  //a wind that pushes from left to right
  const wind = createVector(0.5, 0)
  object.applyForce(wind);
}