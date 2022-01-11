let angle;
let xoff;
let yoff;
function setup() { 
  createCanvas(windowWidth, 400);
  pursuer = new Vehicle(width/2, height/2);
  target = new Vehicle(random(width), random(height));
  angle = 0;
  xoff=0;
  yoff=1000;
}

function draw() {
  createCanvas(windowWidth, 400);
  background(200,200);
  
//   pursuer.update();
//     pursuer.applyForce(
//     pursuer.seek(
//      target.location, true));  
  
    // pursuer.applyForce(
    // pursuer.pursue(
    //   target));
  // pursuer.applyForce(
  //   pursuer.seek(
  //     target.location));
  // pursuer.display();

//   target.update();
//   // target.applyForce(
//   // target.flee(
//   //  pursuer.location));
//   target.applyForce(
//   target.evade(
//    pursuer));  
//   target.display();
  
  xoff+=random(-1,0.01);
  // yoff+=0.01;
  thetaX=noise(xoff);
  // thetaY=noise(yoff);
  angle+=noise(xoff);
  let r = 100;
  let x = (r/2) * cos(angle);
  let y = (r/2) * sin(angle);
  
  strokeWeight(5);
  stroke(255);
  noFill();
  ellipse(target.location.x, target.location.y, r);
  strokeWeight(15);
  stroke(255,5,5);
  push();
    translate(target.location.x, target.location.y);
    point(x,y);
  pop();
  
  
  target.update();
  target.applyForce(
  target.wander());  
  target.display();
}
