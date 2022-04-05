// let cells = [1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0];
// let newcells = new Array(cells.length);

// let ruleset = [0,1,1,1,1,0,1,1];
let cA;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cA = new CA();
}

function rules(a, b, c){
  let s = "" + a + b + c;
  let index = parseInt(s,2);
  return ruleset[index];
}

function draw() {
  // createCanvas(windowWidth, 400);
  // background(150);
  
  cA.generate();
  cA.display();

  
//   for (let i = 1; i < cells.length-1; i++) { //Loop through every cell.
//     let left = cells[i-1]; //Look at the states from the current array.
//     let middle = cells[i];
//     let right = cells[i+1];
//     let newstate = rules(left,middle,right);
//     newcells[i] = newstate; 
//   }
//     cells = newcells;
  
//   for (let i = 0; i < cells.length; i++) { //Loop through every cell.
//     if (cells[i] == 0) fill(255);
//     else fill(0); //Create a fill based on its state (0 or 1).
//     stroke(0);
//     rect(i*50,0,50,50);
//   }
}