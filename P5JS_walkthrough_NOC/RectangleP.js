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
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        stroke(0,this.lifespan);
        fill(175, this.lifespan);
        rect(0, 0,this.r*2,this.r);
    pop(); 

  }
}