let particles = [];
function setup() { 
  createCanvas(windowWidth, 400)

  for(let i =0; i<10; i++) {
    particles.push (
      new Particle( createVector(width/2, 10))
    );
  }
}

function draw() {
  background(255);
  createCanvas(windowWidth, 400);
  
  particles.forEach(p=>{
  p.run();
  if( p.isDead() ) { delete p; }
  });
}
