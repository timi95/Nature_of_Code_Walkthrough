class Population {
  
  constructor({
    _mutationRate=0.01, _popsize=10, 
    _target=createVector(width/2, 0)}={}) {
    this.mutationRate=_mutationRate;
    this.population=[];
    this.matingPool=[];
    this.popsize=_popsize;
    this.target=_target;
    
    for (var i = 0; i < this.popsize; i++) {
      this.population[i] = new Rocket();
    }

  }
  
    evaluate(){
      let maxfit=0;
      // Iterate through all rockets and calcultes their fitness
      for (let i = 0; i < this.population.length; i++) {
        // Calculates fitness
        this.population[i].funFitness(this.target);
        // If current fitness is greater than max, then make max equal to current
        if(this.population[i].fitness > maxfit) { 
          maxfit = this.population[i].fitness; 
        }
      }
      
      // Normalises fitnesses
      for (let i = 0; i < this.population.length; i++) {
        this.population[i].fitness /= maxfit;
      }
      
      this.matingPool=[]
      // Take rockets fitness make in to scale of 1 to 100
      // A rocket with high fitness will highly likely will be in the mating pool
      for (let i = 0; i < this.population.length; i++) {
        let n = this.population[i].fitness * 100;
        for (var j = 0; j < n; j++) {
          this.matingPool.push(this.population[i]);
        }
      }
      // console.log('content of Mating Pool: ', this.matingPool)
      // console.log('highest fitness in population: ', maxfit, this.population)
    }
    
    selection(){
      var newPopulation = [];
      for (var i = 0; i < this.population.length; i++) {
        // Picks random dna
        var parentA = random(this.matingPool).dna;
        var parentB = random(this.matingPool).dna;
        // Creates child by using crossover function
        var child = parentA.crossover(parentB);
        child.mutate();
        // Creates new rocket with child dna
        newPopulation[i] = new Rocket(child);
      }
      this.population = newPopulation;
    }  
  
    live () {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].run();
    }
  }
  
}