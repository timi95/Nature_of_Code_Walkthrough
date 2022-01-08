function setup() { 
  createCanvas(windowWidth, 400);
  pursuer = new Vehicle(width/2, height/2);
  target = new Vehicle(random(width), random(height));
}

function draw() {
  createCanvas(windowWidth, 400);
  background(200,20);
  
   let distance = p5.Vector.dist(pursuer.location, target.location);
  if (distance < pursuer.r + target.r) {
    target = new Vehicle(random(width), random(height));
    pursuer.location.set(width / 2, height / 2);
  }
  pursuer.update();
    pursuer.applyForce(
    pursuer.seek(
      createVector(mouseX, mouseY), true));  
    // pursuer.applyForce(
    // pursuer.pursue(
    //   target));
  // pursuer.applyForce(
  //   pursuer.seek(
  //     target.location));
  pursuer.display();

//   target.update();
//   // target.applyForce(
//   // target.flee(
//   //  pursuer.location));
//   target.applyForce(
//   target.evade(
//    pursuer));  
//   target.display();
}
