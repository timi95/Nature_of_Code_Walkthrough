class Population {
  
  constructor({
    _mutationRate=0.01, _popsize=25, 
    _target=createVector(width/2, 0)}={}) {
    this.mutationRate=_mutationRate;
    this.rockets=[];
    this.matingPool=[];
    this.popsize=_popsize;
    this.target=_target;
    
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }

  }
  
    evaluate(){
      let maxfit=0;
      // Iterate through all rockets and calcultes their fitness
      for (let i = 0; i < this.popsize; i++) {
        // Calculates fitness
        this.rockets[i].calcFitness(this.target);
        // If current fitness is greater than max, then make max equal to current
        if(this.rockets[i].fitness > maxfit) { 
          maxfit = this.rockets[i].fitness; 
        }
      }
      
      // Normalises fitnesses
      for (let i = 0; i < this.popsize; i++) {
        this.rockets[i].fitness /= maxfit;
      }
      
      this.matingPool=[]
      // Take rockets fitness make in to scale of 1 to 100
      // A rocket with high fitness will highly likely will be in the mating pool
      for (let i = 0; i < this.rockets.length; i++) {
        let n = this.rockets[i].fitness*100;
        for (let j = 0; j < n; j++) {
          this.matingPool.push(this.rockets[i]);
        }
      }
    }
    
    selection(){
      var newRockets = [];
      for (var i = 0; i < this.rockets.length; i++) {
        // Picks random dna
        var parentA = random(this.matingPool).dna;
        var parentB = random(this.matingPool).dna;
        // Creates child by using crossover function
        var child = parentA.crossover(parentB);
        child.mutate();
        // Creates new rocket with child dna
        newRockets[i] = new Rocket(child);
      }
      this.rockets = newRockets;
    }  
  
    live () {
    for (let i = 0; i < this.rockets.length; i++) {
      this.rockets[i].run();
    }
  }
  
}