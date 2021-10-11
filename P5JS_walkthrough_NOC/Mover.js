class Mover{
  
  constructor(){
    //start location in the center of the screen
    this.location=createVector(width/2,height/2);//(random(width),random(height));
    //initial velocity is zero
    this.velocity=createVector(0,0)//(random(-2,2),random(-2,2));
    this.acceleration=createVector(-0.001, 0.01)

    this.topSpeed=10;
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed)
    this.location.add(this.velocity);
        //static function returns a p5 vector object
    //p5.Vector.add(this.velocity, this.acceleration);
  }
  
  display(){
    stroke(10);
    fill(175);
    ellipse(this.location.x,this.location.y,16,16);
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