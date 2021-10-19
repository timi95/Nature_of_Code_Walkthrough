class Balloon{

    constructor(){
        //start location in the center of the screen
        this.location=createVector(width/2, 0);//(random(width),random(height));
        //initial velocity is zero
        this.velocity=createVector(0,0)//(random(-2,2),random(-2,2));
        this.acceleration=createVector(0, -0.01)
    
        this.topSpeed=4;
      }
  

      update(){

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed)
        this.location.add(this.velocity);
    

        this.acceleration.mult(0);
      }
      
      display(){
        stroke(10);
        fill(175,50,10);
        ellipse(this.location.x,this.location.y,20,40);
      }
}