let angle;
let xoff;
let followers=[]

function mousePressed(){
  // if(ceil(random(3))==2)
  path.addPoint(mouseX, mouseY);
}
function setup() { 
  createCanvas(windowWidth, 400);
  pursuer = new Vehicle(width/2, height/2);
  target = new Vehicle(random(width), random(height));
  path = new Path();
  angle = 0;
  xoff=0;
  createCanvas(windowWidth, 400);
  background(200,200);
  
  for(let i=0; i<3; i++)
  followers.push( new Vehicle( random(width), random(height)));
    
}

function draw() {
  createCanvas(windowWidth, 400);
  flowField = new FlowField(10);
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
//   xoff+=0.01;
//   let r = 100;
//   thetaX=noise(xoff)*10;
//   let x = (r/2) * cos(thetaX);
//   let y = (r/2) * sin(thetaX);
  
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
  // flowField.display();
  path.display();
  followers.forEach(follow=>{
    follow.update();
    follow.followPath(path);
    // follow.follow(flowField);
    // follow.display();
  });
  // target.update();
  // target.follow(flowField);  
  // target.display();
}
