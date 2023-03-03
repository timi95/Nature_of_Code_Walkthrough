
let vehicle;
let vehicleLocation;
let targets=[];
function setup(){
  createCanvas(windowWidth, windowHeight);
  vehicleLocation = createVector(random(windowWidth), random(windowHeight));
  for(let i=0; i<7;i++){
    targets.push(createVector(random(width), random(height)));
  }
  ptron = new Perceptron2(targets.length, 0.01);
  ptronVehicle = new PerceptronVehicle(targets.length, 
                                  vehicleLocation.x, vehicleLocation.y);
}

function draw(){
  background(200);
  createCanvas(windowWidth, windowHeight);
  
  ptronVehicle.update();
  ptronVehicle.display();
  ptronVehicle.steer(targets);
  targets.forEach(t=>{
    
    push();
      translate(t.x, t.y);
      fill('dodgerblue');
      ellipse(0,0,15,15);
    pop();
  });
  
}