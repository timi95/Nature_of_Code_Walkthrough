class CA {
  
  constructor(){
    this.cells = [1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0];
    this.newcells = new Array(this.cells.length);

    this.ruleset = [0,1,1,1,1,0,1,1];
    
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = 0;
    }

      this.cells[this.cells.length/2] = 1;
  }
  
  
  generate() {
    let nextgen = new Array(this.cells.length);
    for (let i = 1; i < cells.length-1; i++) {
      let left = cells[i-1];
      let me = cells[i];
      let right = cells[i+1];
      nextgen[i] = rules(left, me, right);
    }
    cells = nextgen;
  }
  
  rules(a, b, c){
    let s = "" + a + b + c;
    let index = parseInt(s,2);
    return this.ruleset[index];
  }
}