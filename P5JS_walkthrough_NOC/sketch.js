function setup() { 
  createCanvas(windowWidth, 400);
  pursuer = new Vehicle(width/2, height/2);
  target = new Vehicle(random(width), random(height));
}

function draw() {
  createCanvas(windowWidth, 400);
  background(200,20);
  pursuer.update();
    pursuer.applyForce(
    pursuer.pursue(
      target));
  // pursuer.applyForce(
  //   pursuer.seek(
  //     target.location));
  pursuer.display();

  target.update();
  // target.applyForce(
  // target.flee(
  //  pursuer.location));
  target.applyForce(
  target.evade(
   pursuer));  
  target.display();
}
