function setup() { 
  createCanvas(windowWidth, 400);
   vehicle = new Vehicle(width/2, height/2);
}

function draw() {
  background(200,20);
  vehicle.update();
  vehicle.applyForce(
    vehicle.seek(
      createVector(mouseX, mouseY)));
  vehicle.display();
}
