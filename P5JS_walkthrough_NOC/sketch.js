// let cells = [1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0];
// let newcells = new Array(cells.length);

// let ruleset = [0,1,1,1,1,0,1,1];
let cA;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cA = new CA(1000);
}


function draw() {
  // createCanvas(windowWidth, 400);
  // background(150);
  
  cA.display();
  cA.generate();

  
}