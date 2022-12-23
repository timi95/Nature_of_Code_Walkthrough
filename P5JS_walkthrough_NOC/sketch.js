let population=new Array(100);
let matingPool=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
    for (let i = 0; i < population.length; i++) {
      population[i] = new DNA(); 
      //Initializing each member of the population
    }

}


function draw() {  
  background(150);
  for (let i = 0; i < population.length; i++) {
    population[i].funFitness();
    // console.log(population[i].fitness)
  }
  
  matingPool=[];
  for (let i = 0; i < population.length; i++) {
    let n = int(population[i].fitness * 100);
    for (let j = 0; j < n; j++) {
      matingPool.push(population[i]);
    }
  }


  for (let i = 0; i < population.length; i++) {
    let a = int(random(matingPool.length));
    let b = int(random(matingPool.length));

    let parentA = matingPool[a];
    let parentB = matingPool[b];

    let child = parentA.crossover(parentB);
    child.mutate();
    population[i] = child;
  }
  
  for (let i = 0; i < population.length; i++) {
    
  console.log('gene phrase: '
              +population[i].getPhrase()+'\n');
  }
}
