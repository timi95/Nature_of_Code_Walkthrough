let angle;
let xoff;
function setup() { 
  createCanvas(windowWidth, 400);
  flowField = new FlowField(1);
  pursuer = new Vehicle(width/2, height/2);
  target = new Vehicle(random(width), random(height));
  angle = 0;
  xoff=0;
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
  
  
  // Perlin noise based wonderer
  xoff+=0.01;
  let r = 100;
  thetaX=noise(xoff)*10;
  let x = (r/2) * cos(thetaX);
  let y = (r/2) * sin(thetaX);
  
  //test
  //illustrative scaffolding
//   strokeWeight(5);
//   stroke(255);
//   noFill();
//   ellipse(target.location.x, target.location.y, r);
//   push();
//   strokeWeight(15);
//   stroke(255,5,5);
//     translate(target.location.x, target.location.y);
//     point(x,y);
//   pop();
  
  
  // target.update();
  // target.applyForce(
  // target.seek(createVector(target.location.x+x, target.location.y+y)));  
  // target.display();
  
  target.update();
  target.follow(flowField);  
  target.display();
}
