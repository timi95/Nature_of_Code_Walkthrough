class Mover{
  //2.2 goals implement applyForce(); implement forces like wind, and gravity
  
  constructor(){
    //start location in the center of the screen
    this.location=createVector(width/2,height/2);//(random(width),random(height));
    //initial velocity is zero
    this.velocity=createVector(0,0)//(random(-2,2),random(-2,2));
    this.acceleration=createVector(-0.001, 0.01)

    this.topSpeed=10;
  }
  
  update(){

    // dir is a PVector that points from the mover’s location all the way to the mouse.
    let mouse = createVector(mouseX,mouseY);
    let dir = p5.Vector.sub(mouse,this.location);
    dir.normalize();
    dir.mult(0.4);
    this.acceleration.add(dir);

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
    ellipse(this.location.x,this.location.y,16,16);
  }

  //2.2 applyForce stub
  applyForce(force){
    this.acceleration.add(force)
  }
  
  
  checkEdges() {
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
}