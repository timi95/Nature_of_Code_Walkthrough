let cA;
let ca2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // ca = new CA(1000); 
  ca2 = new CATwoDim(1000); 
  //Game of Life - 2D Array setup
  
}


function draw() {
  
  createCanvas(windowWidth, 400);
  background(150);
  // ca.display();
  // ca.generate();
  
  ca2.display();
  ca2.generate();  

  
}