class CATwoDim {
  constructor(ca_width){
    this.generation=0;
    this.w=5;
    this.cols=(ca_width/this.w);
    this.rows=(ca_width/this.w);
    this.cells = Array
      .from(Array(this.cols), 
            () => new Array(this.rows).fill(random([0,1])));
  }
  
    generate() {
    let nextgen=Array
      .from(Array(this.cols), 
            () => new Array(this.rows).fill(0));
    let neighbours=0;
    
    for (let x = 1; x < nextgen.length-1; x++) {
      for (let y = 1; y < nextgen.length-1; y++) {
        neighbours = this.sumNeighbourState(x,y,this.cells);      
        
         //rules of life!
        if ((this.cells[x][y] == 1) && (neighbours < 2)) 
        {nextgen[x][y] = 0;}
        else if ((this.cells[x][y] == 1) && (neighbours > 3))
        {nextgen[x][y] = 0; }
        else if ((this.cells[x][y] == 0) && (neighbours == 3))
        {nextgen[x][y] = 1;}
        else 
        {nextgen[x][y] = this.cells[x][y];}
      }
    }  
    this.cells = nextgen;
  }
  
  
  sumNeighbourState(x,y, board){
    let sum=0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        sum += board[x + i][y + j];
      }
    }
    sum -= board[x][y];
    return sum;
  }
  
  display(){
    for (let i=0; i < this.cells.length;i++) {
      for (let j=0; j < this.cells.length;j++) {
        if ((this.cells[i][j] == 1)) fill(255); //White when state = 1
        else fill(0); //Black when state = 0
        stroke(0);
        rect(i*this.w, j*this.w, this.w, this.w);
      }
    }    
  }
  
}