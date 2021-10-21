let mover;
let balloon;
let wind_noise_t = 0;
let wind_noise_t2 = 1000;

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
  floatUpBehaviour(balloon);
  
  mover.update();
  mover.checkEdges();
  mover.display();

  balloon.update();
  balloon.checkEdges();
  balloon.display();
}

function floatUpBehaviour(object){
  const floating = createVector(0,-0.1);
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
  //a wind that pushes from left to right
  let noiseMap = map(noise(wind_noise_t),0,1,-1,1);
  let noiseMap2 = map(noise(wind_noise_t2),0,1,-1,1);

  wind_noise_t+=0.01;
  wind_noise_t2+=0.02;
  
  let wind = createVector(noiseMap, noiseMap2);
  wind.mag(0.1)
  object.applyForce(wind);
}