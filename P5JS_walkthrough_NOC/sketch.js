let p;
function setup() { 
  createCanvas(windowWidth, 400)

  p = new Particle( createVector(width/2, 10));
}

function draw() {
  background(255);
  createCanvas(windowWidth, 400);
  
  p.run();
  if(p.isDead()){
    console.log("particle is Dead!");
  }
}
