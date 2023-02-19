
let lifetime;
let lifeCounter;
let population;
let target;
let lifeP;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(windowWidth, 480);
  lifetime = 500;
  lifeCounter = 0;
  let mutationRate = 0.01;

  lifeP = createP();
  target = createVector(width/2, 75);
  population = new Population(mutationRate, 50, target);
}

function draw() {
  background(100);
    population.live();
    lifeP.html(lifeCounter);
    lifeCounter++;
 
  if (lifeCounter == lifetime) { 
    population.evaluate();
    population.selection();
    // population.reproduction();
    lifeCounter = 0;
  }
  
  ellipse(target.x, target.y, 16,16);
}