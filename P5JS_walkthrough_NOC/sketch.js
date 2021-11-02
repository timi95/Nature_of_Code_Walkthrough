let balls = Array(10);
let balloon;
let wind_noise_t = 0;
let wind_noise_t2 = 1000;
let topSpeed= 5;
let largestSize=20;

function setup() {
  for(let i=0; i< balls.length; i++) {
    balls[i] = new Mover(
                    random(0.1, largestSize), createVector(random(1, windowWidth), random(1, windowHeight)));
  }

  balloon = new Balloon();
  liquid = new Liquid(0, windowHeight/2, windowWidth, windowHeight/2, 0.1);
  createCanvas(400, 400);
}

function draw() {
  liquid.display();
  background(200,50);
  

  // click for wind
  if (mouseIsPressed) {
    westernWind(balloon);
  }
  floatUpBehaviour(balloon);
  
  balls.forEach(ball=>{
    gravityBehaviour(ball);
    
    if (liquid.submerges(ball)) {
      dragBehaviour(ball, liquid);
    }
    
    if (mouseIsPressed) {
      westernWind(ball);
    }
    followMouseBehaviour(ball);
    frictionBehaviour(ball);

    ball.update();
    ball.checkEdges();
    ball.display();
  });
  

  balloon.update();
  balloon.checkEdges();
  balloon.display();
}


function dragBehaviour(object, liquid) {
  let speed = object.velocity.mag();
  let dragMagnitude = liquid.c * speed * speed; //The force’s magnitude: Cd * v~2~
  let drag = object.velocity.copy();
  drag.mult(-1);
  drag.normalize(); /*The force's direction: -1 * velocity
  Finalize the force: magnitude and direction
  // together.*/
  drag.mult(dragMagnitude);
  object.applyForce(drag);
}

function gravityBehaviour(object){
  if(object.mass!==null||object.mass!==undefined&&object.mass){
    const gravity = createVector(0, 0.1*object.mass);
    object.applyForce(gravity);
  }
}

function frictionBehaviour(object){
  const c = 0.1; //the coefficient of friction
  const normal = 1;//normal force of friction
  const frictionMag = c*normal;
  
  let friction = object.velocity.copy();
  friction.mult(-1);
  friction.normalize();
  friction.mult(frictionMag);
  
  object.applyForce(friction);
}

function floatUpBehaviour(object){
  const floating = createVector(0,-0.1);
  object.applyForce(floating);
}

function followMouseBehaviour(object){
  //ball follows mouse
  // dir is a PVector that points from the ball’s location all the way to the mouse.
  const mouse = createVector(mouseX,mouseY);
  let dir = p5.Vector.sub(mouse,object.location);
  dir.normalize();
  dir.mult(0.4);
  object.applyForce(dir);
}

function westernWind(object){
  //a wind that pushes from left to right
  let noiseMap = map(noise(wind_noise_t),0,1,0,1);
  let noiseMap2 = map(noise(wind_noise_t2),0,1,-1,1);

  wind_noise_t+=0.01;
  wind_noise_t2+=0.02;
  
  let wind = createVector(noiseMap, noiseMap2);
  wind.mag(0.1)
  object.applyForce(wind);
}
