class Particle {
  
  constructor(_location){
    this.location = _location? 
      _location: createVector();
    this.velocity = createVector();
    this.acceleration = createVector(0,0.05);
    
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.001;
    
    this.lifespan = 255;
    this.mass = 1
  }
  
  
  applyForce(force){
    //Making a copy of the PVector before using it!
     const f = p5.Vector.div(force, this.mass)/* Newton’s second law (with force accumulation and mass) */
    this.acceleration.add(f);
  }
   
  spin(){
      rotate(this.angle);
      this.aVelocity += this.aAcceleration;
      this.angle += this.aVelocity
   }
  
  
  update(){
    push();
      // rectMode(CENTER);
      // translate(this.location.x, this.location.y);
      this.spin();
      this.display();
    pop();  
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0
  }
  
   run() {
    this.update();

  }
  
  isDead() {
    if (this.lifespan < 0.0) { 
      //Is the particle still alive?
      return true;
    } else {
      return false;
    }
  }
  
  
  display(){
    // Since our life ranges from 255 to 0 we can use it for alpha
    stroke(0,this.lifespan);
    fill(175, this.lifespan);
    rect(this.location.x, this.location.y,70,10);
  }
}