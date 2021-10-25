class Mover{
  //2.2 goals implement applyForce(); implement forces like wind, and gravity
  
  constructor(mass,location){


    //start location in the center of the screen
    this.location = location;
    //initial velocity is zero
    this.velocity=createVector(0,0);//(random(-2,2),random(-2,2));
    this.acceleration=createVector(-0.001, 0.01);
    //2.4 incorporating mass
    this.mass = mass;

  }
  
  update(){

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed)
    this.location.add(this.velocity);

    //static function returns a p5 vector object
    //p5.Vector.add(this.velocity, this.acceleration);

    //2.3 The easiest way to implement clearing the acceleration for each frame is to multiply the
    //PVector by 0 at the end of update().
    this.acceleration.mult(0);
  }
  
  display(){
    stroke(10);
    fill(175);
    ellipse(
      this.location.x,this.location.y,
      1.6*this.mass, 1.6*this.mass);
  }

  //2.2 applyForce stub
  applyForce(force){
    //Making a copy of the PVector before using it!
     const f = p5.Vector.div(force, this.mass)/* Newton’s second law (with force accumulation and mass) */
    this.acceleration.add(f);
  }
  
  
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
      } else if (this.location.x < 0) {
        this.velocity.x *= -1;
        this.location.x = 0;
      }

    if (this.location.y > height) {
      this.velocity.y *= -1;
      this.location.y = height;
    }  else if (this.location.y < 0) {
      this.velocity.y *= -1;
      this.location.y = 0;
    }
  }
}