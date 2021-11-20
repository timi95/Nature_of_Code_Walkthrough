class Pendulum {
  
  constructor(origin_, r_){
    this.r=15; //Length of arm
    this.angle=0; //Pendulum arm angle
    this.aVelocity=0; //Angular velocity
    this.aAcceleration = 0.001; //Angular acceleration
    this.location = createVector();
    
    this.damping = 0.995;
    
    this.origin = origin_? origin_: createVector(100,10);
    this.r = r_? r_: 125;
  }
  
  update() {
    let gravity = 0.4; /*Arbitrary constant
    Calculate acceleration according to our
    formula.*/
    let force = gravity * sin(this.angle);
    
    this.aAcceleration = (-1 * force) /this.r;
    this.aVelocity += this.aAcceleration; //Increment velocity.
    this.angle += this.aVelocity; //Increment angle.
    this.aVelocity *= this.damping;
    
  }
  
  display(){
    this.location.set(
      this.r*sin(this.angle)+this.origin.x, 
      this.r*cos(this.angle)+this.origin.y,0);
    this.location.add(this.origin);
    
    stroke(0);
    fill(175);
    line(this.origin.x, this.origin.y, this.location.x, this.location.y);
    ellipse(this.location.x, this.location.y,16,16);
  }

}