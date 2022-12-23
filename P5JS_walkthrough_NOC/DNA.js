class DNA {
  constructor(){
    this.target="to be or not to be";
    this.fitness=0;
    this.population = new Array(100);
    this.genes = new Array(18);//an array of chars
    this.mutationRate = 0.01;
    // generate
    for (let i = 0; i < this.genes.length; i++) {
      this.genes[i] = String.
      fromCharCode(random(32,128));
    }
  }
  
  funFitness() { //Function to score fitness
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == this.target.charAt(i)) { 
        score++;
      }
    }
    this.fitness = (score)/this.target.length;
  }
  
  crossover(partner) {
    // The child is a new instance of DNA. Note
    // that the DNA is generated randomly in the
    // constructor, but we will overwrite it below
    // with DNA from parents.
    let child = new DNA();
    // Picking a random “midpoint” in the genes
    // array
    let midpoint = random(this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      // Before midpoint copy genes from one
      // parent, after midpoint copy genes from the
      // other parent
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;//Return the new child DNA
  }
  
  mutate() {
      for (let i = 0; i < this.genes.length; i++) { 
        // Looking at each gene in the array
      if (random(1) < this.mutationRate) {
        this.genes[i] = String.
        fromCharCode(random(32,128))
        // Mutation, a new random character
      }
    }
  }
  
  getPhrase(){
    return this.genes.join("");
  }
}