class CATwoDim {
  constructor(ca_width){
    this.generation=0;
    this.w=5;
    this.cells = Array
      .from(Array(1050/this.w), 
            () => new Array(1050/this.w).fill(0));
    
    //initialise 2D array
    for (let x = 0; x < this.cells.length; x++) {
      for (let y = 0; y < this.cells.length; y++) {
        this.cells[x][y] = random([0,1]); 
          //Initialize each cell with a 0 or 1.
      }
    } 
  // console.log(this.cells);
  }
  
    generate() {
    let nextgen=Array
      .from(Array(this.cells.length),//rows
            () => new Array(this.cells.length))//collumns
    let neighbours=0;
    
    for (let x = 1; x < nextgen.length-1; x++) {
      for (let y = 1; y < nextgen.length-1; y++) {
        neighbours = this.sumNeighbourState(x,y, nextgen);
        neighbours -= this.cells[x][y];
        
        //rules of life!
        if ((this.cells[x][y] == 1) && (neighbours < 2)) nextgen[x][y] = 0;
        else if ((this.cells[x][y] == 1) && (neighbours > 3)) nextgen[x][y] = 0;
        else if ((this.cells[x][y] == 0) && (neighbours == 3)) nextgen[x][y] = 1;
        else nextgen[x][y] = this.cells[x][y];
      }
    }
    this.cells = nextgen;
  }
  
  
  sumNeighbourState(x,y, board){
    let neighbours=0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        neighbours += board[x+i][y+j];
        //Add up all the neighbours’ states.
      }
    }
    return neighbours;
  }
  
  display(){
    for ( let i = 0; i < this.cells.length;i++) {
      for ( let j = 0; j < this.cells.length;j++) {
        if ((this.cells[i][j] == 1)) fill(0); //Black when state = 1
        else fill(255); //White when state = 0
        stroke(0);
        rect(i*this.w, j*this.w, this.w, this.w);
      }
    }    
  }
  
}