class Population {
  
  constructor({_mutationRate=0.01, _popsize=10}){
    this.mutationRate=_mutationRate;
    this.population=[];
    this.matingPool=[];
    this.popsize=_popsize;
    
    for (var i = 0; i < this.popsize; i++) {
      this.population[i] = new Rocket();
    }

  }
  
    fitness(){
        //new Start with an empty mating pool.
      console.log(this.population)
      for (let i = 0; i < this.popsize; i++) {
        let n = floor(this.population[i].funfitness() * 100);
        for (let j = 0; j < n; j++) {
          this.matingPool.add(this.population[i]);
        }
      }
    }
    selection(){
      //crossover + mutation
    }
    reproduction(){}
  
  
  live () {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].run();
    }
  }
  
}