const cells = [1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0];
function setup() {
  createCanvas(windowWidth, 400);
}

function draw() {
  createCanvas(windowWidth, 400);
  background(150);
  
  for (let i = 0; i < cells.length; i++) { //Loop through every cell.
    if (cells[i] == 0) fill(255);
    else fill(0); //Create a fill based on its state (0 or 1).
    stroke(0);
    rect(i*50,0,50,50);
  }
}