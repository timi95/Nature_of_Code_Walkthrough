class Particle {
  
  constructor(_location){
    this.location = _location? _location: createVector();
    this.velocity = createVector();
    this.acceleration = createVector(0,0.05);
    this.lifespan = 255;
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0
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
    // Since our life ranges from 255 to 0 we can use it for alpha
    stroke(0,this.lifespan);
    fill(175, this.lifespan);
    ellipse(this.location.x, this.location.y,10,10);
  }
}