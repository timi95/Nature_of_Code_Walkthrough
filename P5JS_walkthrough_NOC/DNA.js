class DNA {
  constructor(){
    this.target="to be or not to be";
    this.fitness=0;
    this.population = new Array(100);
    this.genes = new Array(18);//an array of chars
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
}