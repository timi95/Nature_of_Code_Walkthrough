let vehicles=[];
let vehicleSystems=[];

function mousePressed(){
  vehicleSystems.push(new VehicleSystem(mouseX, mouseY))
}

function setup() { 
  createCanvas(windowWidth, 400);
}

function draw() {
  createCanvas(windowWidth, 400);
  
    vehicleSystems.forEach(vs=>{  
    vs.separate(vs.vehicles);
    vs.update();
    vs.display();
  });
}
