class Vehicle{
  constructor(x,y){
    this.location=createVector(0,0);
    this.velocity=createVector(0,0);
    this.acceleration=createVector(x,y);
    this.r=16.0; //Additional variable for size
    this.maxspeed=4;
    this.maxforce=1;
    this.mass=random(4, 10);
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.wrap()
  }
  
  wrap() {
        if (this.location.x > width) {
          this.location.x = 0;
        } else if (this.location.x < 0) {
          this.location.x = width;
        }
        if (this.location.y > height) {
          this.location.y = 0;

        } else if (this.location.y < 0) {
          this.location.y = height;
        }
      }
  
  applyForce(force){
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  
  flee(target){
    return this.seek(target).mult(-1);
  }
  
  seek(target){
    let force = p5.Vector.sub(target, this.location);
    force.setMag(this.maxspeed);
    force.sub(this.velocity);
    force.limit(this.maxforce);
   return force;
  }
  
  display(){
    let theta = this.velocity.heading() + PI/2;
    fill(175);
    stroke(0);
    push();
    translate(this.location.x, this.location.y);
    rotate(theta);
    beginShape();
      vertex(0, -this.r*2);
      vertex(-this.r, this.r*2);
      vertex(this.r, this.r*2);
    endShape(CLOSE);
    pop();
  }
  
  
}