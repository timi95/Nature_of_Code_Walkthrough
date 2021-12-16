let particles = [];
function setup() { 
  createCanvas(windowWidth, 400);


  ps = new ParticleSystem(width/2, 50);
   
}

function draw() {
  background(255);
  createCanvas(windowWidth, 400);
  
  //   for(let i =0; i<5; i++) {
  //   particles.push (
  //     new Particle( createVector(width/2, 50))
  //   );
  // }
  
  
  // console.log(particles.length);
//   particles.forEach(p=>{
//     p.run();
//   });
  
//   for(let i = particles.length-1; i >=0; i--)
//     if( particles[i].isDead() ) 
//     { particles.splice(i,1); }
  ps.emit(5);
  ps.update();
  ps.display();
}
