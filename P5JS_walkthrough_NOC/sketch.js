let balls = Array(10);
let balloon;
let wind_noise_t = 0;
let wind_noise_t2 = 1000;
let topSpeed= 5;
let largestSize=20;

function setup() {
  for(let i=0; i< balls.length; i++) {
    balls[i] = new Mover(
                    random(0.1, topSpeed), createVector(random(1, width), random(1, height)));
    console.log(balls[i]);
  }

  balloon = new Balloon();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // click for wind
  if (mouseIsPressed) {
    westernWind(balloon);
  }
  floatUpBehaviour(balloon);
  
  balls.forEach(ball=>{
    if (mouseIsPressed) {
      westernWind(ball);
    }
    followMouseBehaviour(ball);
    
    ball.update();
    ball.checkEdges();
    ball.display();
  });
  

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
  // dir is a PVector that points from the ball’s location all the way to the mouse.
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