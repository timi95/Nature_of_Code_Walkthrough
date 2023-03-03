class PerceptronVehicle{
  
  constructor({n, x, y, ptron = new Perceptron2(n,0.001)}={}) {
    this.brain = ptron;
    this.acceleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.location = createVector(x,y);
    this.maxspeed = 4;
    this.maxforce = 0.1;
  }
  
  update() { 
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  display(){
    push();
      noStroke();
      fill('turquoise');
      translate(this.location.x, this.location.y);
      rotate(this.velocity.heading());
      rectMode(CENTER);
      rect(0,0,50,10);
    pop();
  }
  
  applyForce(force) { 
    this.acceleration.add(force);
  }
  
  steer(targets) {
    let forces=new Array(targets.length);
    for (let i = 0; i < forces.length; i++) {
      forces[i] = this.seek(targets[i]);
    }
    
    //All the steering forces are inputs.
    let result = this.brain.feedforward(forces); 
    //The result is applied.
    this.applyForce(result);
    
    let desired = createVector(width/2,height/2);
    let error = p5.Vector.sub(desired, this.location);
    this.brain.train(forces, error);
  }
  
  
  seek(target) { 
    // Same old seek() function
    let desired = p5.Vector.sub(target, this.location);
    desired.normalize();
    desired.mult(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  }
}