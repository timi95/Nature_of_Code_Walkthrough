class Boid extends Vehicle {
  constructor(x,y){
    super(x,y)
  }
  
  separate(boids){}
  
  align(boids){}
  
  cohere(boids){}
  
  flock(boids){
    let sep = separate(boids); //The three flocking rules
    let ali = align(boids);
    let coh = cohere(boids);
    // Arbitrary weights for these forces (Try
    // different ones!)
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    
    this.applyForce(sep); //Applying all the forces
    this.applyForce(ali);
    this.applyForce(coh);
  }
}