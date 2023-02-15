class Rocket {
  
  constructor() {  
    this.dna = new DNA2();
    this.fitness;
    this.location=createVector(windowWidth/2, windowHeight);
    this.velocity=createVector(0,0);//(random(-2,2),random(-2,2));
    this.acceleration=createVector(-0.001, 0.001);
    this.geneCounter = 0;
    this.color = {r:random(255),
                  g:random(255),
                  b:random(255)}
  }
  
  
  funFitness() {
    let d = p5.Vector.dist(this.location, this.target);
    //How close did we get?
    this.fitness = pow(1/d,2); 
    //Fitness is inversely proportional to distance.
  }
  
  applyForce(f) {
    this.acceleration.add(f);
  }
  
  update() { 
      //Our simple physics model (Euler integration)
    this.velocity.add(this.acceleration); 
      //Velocity changes according to acceleration.
    this.location.add(this.velocity); 
      //Location changes according to velocity.
    this.acceleration.mult(0);
  }
  
  run() {
    this.applyForce(this.dna.genes[this.geneCounter]);
    this.geneCounter++;
    this.update();
    this.display();
  }
  
  display(){
    push();
      noStroke();
      fill(this.color.r, this.color.g, this.color.b);
      translate(this.location.x, this.location.y);
      rotate(this.velocity.heading());
      rectMode(CENTER);
      rect(0,0,50,10);
    pop();
  }
}