let population=new Array(100);
let matingPool=[]
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
    for (let i = 0; i < population.length; i++) {
      population[i] = new DNA(); 
      //Initializing each member of the population
    }

  console.log(population)
}


function draw() {  
  background(150);
  
  for (let i = 0; i < population.length; i++) {
    population[i].funFitness();
    // console.log(population[i].fitness)
  }
  
  for (let i = 0; i < population.length; i++) {
    let n = int(population[i].fitness * 100);
    for (let j = 0; j < n; j++) {
      matingPool.push(population[i]);
    }
  }
}