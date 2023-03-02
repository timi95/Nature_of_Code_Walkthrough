let world;
function setup(){
  createCanvas(windowWidth, windowHeight);
  world = new BloopWorld(20);
}


function draw(){
  createCanvas(windowWidth, windowHeight);
  background(100);
  world.run();
}