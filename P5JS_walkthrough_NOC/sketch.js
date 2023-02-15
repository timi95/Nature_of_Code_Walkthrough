let lifetime;
let lifeCounter;
let population;
let target;


function setup() {
  createCanvas(windowWidth, 480);
  lifetime = 500;
  lifeCounter = 0;
  let mutationRate = 0.01;

  population = new Population(mutationRate, 50);
  target = createVector(windowWidth/2, 5)
}

function draw() {
  background(100);
  if (lifeCounter < lifetime) { 
    population.live();
    lifeCounter++;
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }
  
  ellipse(target.x, target.y, 16,16);
}