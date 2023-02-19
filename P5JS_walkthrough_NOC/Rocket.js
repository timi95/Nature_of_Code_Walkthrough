
class Rocket {
  
  constructor(dna) {  
    // Gives a rocket dna
    if (dna) {
      this.dna = dna;
    } else {
      this.dna = new DNA2();
    }
    this.fitness = 0;
    this.completed = false;
    this.crashed = false;
    this.pos=createVector(width/2, height);
    this.velocity=createVector();
    this.acceleration=createVector();
    this.geneCounter = 0;
    this.dna.initColor();
    this.color = {r:this.dna.color.r,
                  g:this.dna.color.g,
                  b:this.dna.color.b};
  }
  
  
  calcFitness(target) {
    // Takes distance to target
    var d = dist(this.pos.x,this.pos.y, 
                  target.x, target.y);
        
    // Maps range of fitness
    this.fitness = map(d, 0, width, 0, width);
    // If rocket gets to target increase fitness of rocket
    if (this.completed) {
      this.fitness *= 10;
      console.log('Target reached by ', this);
    }
        // If rocket does not get to target decrease fitness
    if (this.crashed) {
      this.fitness /= 10;
    }
    /*console.log(`target: ${target}, 
                  \nd: ${d}, 
                  \nfitness: ${this.fitness}`)*/
  }
  
  applyForce(f) {
    this.acceleration.add(f);
  }
  
  update() { 
    let  d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if(d < 10){
      this.completed = true;
      this.pos = target.copy();
    }
    // Rocket hit the barrier
    // if (this.pos.x > rx 
    //     && this.pos.x < rx + rw 
    //     && this.pos.y > ry 
    //     && this.pos.y < ry + rh) {
    //   this.crashed = true;
    // }
    // Rocket has hit left or right of window
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    // Rocket has hit top or bottom of window
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }
    
      //Our simple physics model (Euler integration)
    this.velocity.add(this.acceleration); 
      //Velocity changes according to acceleration.
    this.pos.add(this.velocity); 
      //Location changes according to velocity.
    this.acceleration.mult(0);
  }
  
  run() {
    this.applyForce(this.dna.genes[this.geneCounter]);
    if (!this.completed && !this.crashed) {
      this.geneCounter++;
      this.update();
      this.acceleration.mult(0);
      this.velocity.limit(4);
    }
      this.display();
  }
  
  display(){
    push();
      noStroke();
      fill(this.color.r, this.color.g, this.color.b);
      translate(this.pos.x, this.pos.y);
      rotate(this.velocity.heading());
      rectMode(CENTER);
      rect(0,0,50,10);
    pop();
  }
}