class RectangleP extends Particle {
  constructor(x,y){
    super(x,y);
    this.r = 10
  }
  
  update(){
    super.update();
  }

  
  display(){
    angleMode(DEGREES);
    push();
        rectMode(CENTER);
        translate(super.location.x, super.location.y);
        rotate(super.angle);
        stroke(0,super.lifespan);
        fill(175, super.lifespan);
        rect(0, 0,super.r*2,super.r);
    pop(); 

  }
}