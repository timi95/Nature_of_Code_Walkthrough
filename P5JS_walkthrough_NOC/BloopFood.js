class BloopFood{
  constructor(_location){
    if(_location){
      this.location=_location
    } else{
      this.location=
        createVector(random(windowWidth), random(windowHeight));
    }
    // p5.Vector.random2D();
    this.color = color(random(255), random(255), random(255));
  }
  
  display(){
    push();
      fill(this.color);
      rect(this.location.x, this.location.y,15, 15);
    pop();
  }
}