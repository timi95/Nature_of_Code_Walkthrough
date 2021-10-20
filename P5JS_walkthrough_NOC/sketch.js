let mover;
let balloon;
let wind_noise_t = 0;
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
  }
  westernWind(balloon);
  followMouseBehaviour(mover);
  floatUpBehaviour(balloon);
  
  mover.update();
  mover.checkEdges();
  mover.display();

  balloon.update();
  balloon.checkEdges();
  balloon.display();
}

function floatUpBehaviour(object){
  const floating = createVector(0,-0.01);
  object.applyForce(floating);
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
  wind_noise_t+=0.01;
  //a wind that pushes from left to right
  let noiseMap = map(noise(wind_noise_t),0,1,0,255);
  const wind = createVector(noiseMap, 0);
  object.applyForce(wind);
}