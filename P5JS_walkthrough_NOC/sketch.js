let population=new Array(100);
let matingPool=[];
let bestPhrase='';
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
    let n = (population[i].fitness * 100);
    bestPhrase = population[i].getPhrase();
    if (i+1 < population.length && population[i+1].fitness > population[i].fitness) {
      bestPhrase = population[i+1].getPhrase();
      textSize(17);
      text('Best phrase: '+bestPhrase+'\n\n',250, i*350);
      text('fitness: '+population[i+1].fitness,350,i*250);
    }
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
    textSize(12)
    text('gene phrase: '+population[i].getPhrase()+'\n\n',12,i*15);
  }
  

}
