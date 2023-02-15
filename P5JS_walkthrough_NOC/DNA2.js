class DNA2 {
  constructor({num = 5, lifetime = 500}={}) {
    this.maxforce = 0.1;
    this.genes = new Array(num);
    // generate
    for (let i = 0; i < lifetime; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].mult(random(0, this.maxforce));
    }
  }
  
  crossover(partner) {
    let child = new DNA2();
    let midpoint = random(this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }
  
  mutate() {
      for (let i = 0; i < this.genes.length; i++) { 
        // Looking at each gene in the array
      if (random(1) < this.mutationRate) {
        this.genes[i] = random(1)
        // Mutation, a new random character
      }
    }
  }
}
