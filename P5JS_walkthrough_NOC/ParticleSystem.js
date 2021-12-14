class ParticleSystem{
  constructor(_location, _size){
    this.size = _size? _size: 10;
    this.origin = _location? 
      _location: createVector(width/2, height/2);
    this.particles = [];
    
  }
  
  addParticle() {
  // The origin is passed to each Particle when
  // it is added.
    this.particles.push(new Particle(this.origin));
  }
  
  setup(){
       for(let i =0; i<this.size; i++) {
         this.addParticle();  
       }
  }
  
  run(){
  this.particles.forEach((p, i)=>{
    // gravityBehaviour(p);
    p.run();
    if( p.isDead() ) { this.particles.pop(p); }
    });
  }
}