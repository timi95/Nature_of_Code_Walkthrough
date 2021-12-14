let particles = [];
function setup() { 
  createCanvas(windowWidth, 400);

  for(let i =0; i<10; i++) {
    particles.push (
      new Particle( createVector(width/2, 50))
    );
  }
  
  // ps = new ParticleSystem(createVector(width/2, 50),3);
   
  // ps.setup();
}

function draw() {
  background(255);
  createCanvas(windowWidth, 400);
  
  // console.log(particles.length);
  particles.forEach(p=>{
  p.run();
  if( p.isDead() ) { particles.pop(p); }
  });
  // ps.run();
}
