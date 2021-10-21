class Balloon{

    constructor(){
        //start location in the center of the screen
        this.location=createVector(width/2, 200);//(random(width),random(height));
        this.velocity=createVector(0,0)
        this.acceleration=createVector(0, 0)
        this.bounce=createVector(0, 400)
    
        this.topSpeed=10;
      }
  

      update(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed)
        this.location.add(this.velocity);
        this.acceleration.mult(0);

        // console.log(`Velocity: ${this.velocity}\n`)
      }
      
      display(){
        stroke(10);
        fill(175,50,10);
        ellipse(this.location.x,this.location.y,20,40);
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
          // this.location.add(this.bounce);

        } else if (this.location.y < 0) {
          // this.location.y = height;
          this.applyForce(this.bounce);

        }
      }
}