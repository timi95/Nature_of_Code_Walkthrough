let particles=[];
let particleSystems=[];

function mousePressed(){
  particleSystems.push( new ParticleSystem(mouseX, mouseY))
}

function setup() { 
  createCanvas(windowWidth, 400);


//   particleSystems[0] = new ParticleSystem(width/2, 50);
   
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
  particleSystems.forEach(ps=>{  
    ps.emit(1);
    ps.update();
    ps.display();
  });
}
