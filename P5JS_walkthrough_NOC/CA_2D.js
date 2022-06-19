class CA_2D {
  constructor(ca_width){
    this.generation=0;
    this.w=5;
    this.cells = new Array(1050/this.w).fill(0);
    this.newcells = new Array(this.cells.length);
    this.ruleset = [0,0,0,0,0,0,0,0]
     

    this.color = {
      r:random(255),
      g:random(255),
      b:random(255)
    }
    
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = 0;
    }
    this.cells[this.cells.length/2] = 1;

  }
}