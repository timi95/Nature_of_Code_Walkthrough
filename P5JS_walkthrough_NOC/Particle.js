class Particle {
  
  constructor(_location){
    this.location = _location? 
      _location: createVector();
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(0.5, 5));
    this.acceleration = random(-0.06,0.06)
    
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = random(-0.1,0.1);
    
    this.lifespan = 255;
    this.mass = random(0.01,0.1);
  }
  
  
  applyForce(force){
    //Making a copy of the PVector before using it!
     const f = p5.Vector.div(force, this.mass)/* Newton’s second law (with force accumulation and mass) */
    this.acceleration.add(force);
  }
   
  update(){
    // console.log("Acceleration to be added!" ,this.acceleration);    
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0
    
    // this.aAcceleration = this.acceleration.x;
    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;
    // this.acceleration.set(0,0);
  }
  
   run() {
    this.update();
    this.display();
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
    angleMode(DEGREES);
    // Since our life ranges from 255 to 0 we can use it for alpha
    push();
        rectMode(CENTER);
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        stroke(0,this.lifespan);
        fill(175, this.lifespan);
        rect(0, 0,70,10);
    pop(); 

  }
}