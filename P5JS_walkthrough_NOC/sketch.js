function setup() { 
  createCanvas(windowWidth, 400);
   vehicle = new Vehicle(width/2, height/2);
}

function draw() {
  background(0,20);
  vehicle.update();
  vehicle.seek(createVector(mouseX, mouseY));
  vehicle.display();
}
