function setup() { 

   vehicle = new Vehicle(width/2, height/2);
}

function draw() {
  
  vehicle.update();
  vehicle.seek();
  vehicle.display();
}
