class CATwoDim {
  constructor(ca_width){
    this.generation=0;
    this.w=5;
    this.cells = [];
    //Construct 2D array
    for(let i=0; i<(1050/this.w);i++){
      this.cells.push(new Array(1050/this.w).fill(0));
    } 
    
    //initialise 2D array
    for (let x = 0; x < this.cells.length; x++) {
      for (let y = 0; y < this.cells.length; y++) {
        this.cells[x][y] = random([0,1]); 
          //Initialize each cell with a 0 or 1.
      }
    } 
//     this.newcells = new Array(this.cells.length);
//     this.ruleset = [0,0,0,0,0,0,0,0]
     

//     this.color = {
//       r:random(255),
//       g:random(255),
//       b:random(255)
//     }
    
//     for (let i = 0; i < this.cells.length; i++) {
//       this.cells[i] = 0;
//     }
//     this.cells[this.cells.length/2] = 1;

  }
}