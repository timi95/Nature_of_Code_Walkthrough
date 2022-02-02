class Vehicle{
  constructor(x,y){
    this.traits = {
      r:random(255),
      g:random(255),
      b:random(255),
      size:15,//random(16),
      speed:random(10),
      force:random(1)
    }
    this.location=createVector(x,y);
    this.velocity=createVector(0,0);
    this.acceleration=createVector(x,y);
    this.r=this.traits.size; //Additional variable for size
    this.maxspeed=10//this.traits.speed;
    this.maxforce=0.4//this.traits.force;
    this.mass=this.traits.size;
    
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.set(0,0);
    this.wrap();
    // if(this.maxspeed <5
    //   ||this.velocity.mag() <5){ this.wrap() }
    // else{ this.edgeGuard() }
  }
  
  edgeGuard(){

      if (this.location.x > width) {
        this.applyForce(createVector(-10, 0));        
      } else if (this.location.x < 0) {
        this.applyForce(createVector(10, 0));
      }
      if (this.location.y > height) {
        this.applyForce(createVector(0, -10)); 
      } else if (this.location.y < 0) {
        this.applyForce(createVector(0, 10));   
      }    
  }
  wrap() {
//       if (this.location.x > width) {
//         this.location.x = 0;
//       } else if (this.location.x < 0) {
//         this.location.x = width;
//       }
//       if (this.location.y > height) {
//         this.location.y = 0;

//       } else if (this.location.y < 0) {
//         this.location.y = height;
//       }
    
    if (this.location.x < -this.r) this.location.x = width+this.r;
    if (this.location.y < -this.r) this.location.y = height+this.r;
    if (this.location.x > width+this.r) this.location.x = -this.r;
    if (this.location.y > height+this.r) this.location.y = -this.r;
    }
  
  applyForce(force){
    // const f = p5.Vector.div(force, this.mass);
    // this.acceleration.add(f);
    this.acceleration.add(force);
    
  }
  
  follow(flow) {
// What is the vector at that spot in the flow field?
    let desired = flow.lookup(this.location).copy();
    desired.mult(this.maxspeed);
 
// Steering is desired minus velocity
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }
  
  wander(){
    // let xoff =1000;
    // let angle = noise(xoff) * TWO_PI * 2;
    // let steer = p5.Vector.fromAngle(angle);
    // steer.setMag(this.maxforce);
    // this.applyForce(steer);
    // this.xoff += 0.9;
    // return steer;
    return p5.Vector.random2D();

  }
  
  evade(vehicle){
    let pursuit = this.pursue(vehicle);
    return pursuit.mult(-1);
  }
  
  flee(target){
    return this.seek(target).mult(-1);
  }
  
  pursue(vehicle){
    let target = vehicle.location.copy();
    let prediction = vehicle.velocity.copy().mult(10);
    target.add(prediction);
    return this.seek(target);
  }
  
  seek(target, arrival = false) {
    let force = p5.Vector.sub(target, this.location);
    let desiredSpeed = this.maxspeed;
    if (arrival) {
      let slowRadius = 100;
      let distance = force.mag();
      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxspeed);
      }
    }
    force.setMag(desiredSpeed);
    force.sub(this.velocity);
    force.limit(this.maxforce);
    return force;
  }
  
  display(){
    let theta = this.velocity.heading() + PI/2;
    fill(this.traits.r, 
         this.traits.g, 
         this.traits.b);
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