class ParticleSystem{
  constructor(_location, _size){
    this.size = _size;
    this.origin = _location? 
      _location: createVector(width/2, height/2);
    this.particles = [];
    
  }
  
  addParticle() {
  // The origin is passed to each Particle when
  // it is added.
    this.particles.push(new Particle(this.origin));
  }
  
  run(){
  this.particles.forEach(p=>{
    p.run();
    if( p.isDead() ) { this.particles.pop(p); }
    });
  }
}