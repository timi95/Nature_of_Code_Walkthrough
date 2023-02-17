class DNA2 {
  constructor({num = 5, lifetime = 500, _genes=[]}={}) {
    this.maxforce = 0.5;
    this.genes = _genes;
    // generate
    if(!this.genes.length)
    for (let i = 0; i < lifetime; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].mult(random(0, this.maxforce));
    }
    this.color= {r:255, g:255, b:255};
  }
  
  initColor(){
  this.color = {r:random(255),
                  g:random(255),
                  b:random(255)}
  }
  
  crossover(partner) {
    let child = new DNA2();
    let midpoint = random(this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint){ 
        child.genes[i] = this.genes[i];
      }
      else {
        child.genes[i] = partner.genes[i];     
      }
    }
    child.color = this.color;
    return child;
  }
  
  mutate() {
      for (let i = 0; i < this.genes.length; i++) { 
        // Looking at each gene in the array
      if (random(1) < this.mutationRate) {
        this.genes[i] = p5.Vector.random2D();
        // Mutation, a new random Vec
      }
    }
  }
}
