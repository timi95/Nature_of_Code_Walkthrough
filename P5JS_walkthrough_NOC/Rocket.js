
class Rocket {
  
  constructor({_heredity=new DNA2()}={}) {  
    this.dna = _heredity;
    this.fitness = 0;
    this.completed = false;
    this.location=createVector(width/2, height);
    this.velocity=createVector(0,0);//(random(-2,2),random(-2,2));
    this.acceleration=createVector(-0.001, 0.001);
    this.geneCounter = 0;
    this.dna.initColor();
    this.color = {r:this.dna.color.r,
                  g:this.dna.color.g,
                  b:this.dna.color.b};
  }
  
  
  funFitness(target) {
    // Takes distance to target
    var d =  dist(this.location.x,this.location.y, 
                  target.x, target.y);
    
    // Maps range of fitness
    this.fitness = map(d, 0, width, width, 0)*-1;
    // If rocket gets to target increase fitness of rocket
    if (this.completed) {
      console.log('Target reached by ', this,'!s')
      this.fitness *= 10;
    }
  }
  
  applyForce(f) {
    this.acceleration.add(f);
  }
  
  update() { 
    let  d = dist(this.location.x, this.location.y, target.x, target.y);
    if(d < 10){
      this.completed = true;
      this.location = target.copy();
    };
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