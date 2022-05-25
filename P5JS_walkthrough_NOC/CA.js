class CA {
  constructor(ca_width){
    this.generation=0;
    this.w=5;
    this.cells = new Array(1050/this.w).fill(0);
    this.newcells = new Array(this.cells.length);
    this.ruleset = [0,1,0,1,1,0,1,0];// [1,1,0,1,1,1,1,0]//
    
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = 0;
    }
    this.cells[this.cells.length/2] = 1;

  }
  
  
  generate() {
    let nextgen = new Array(this.cells.length).fill(0);
    for (let i = 1; i < this.cells.length-1; i++) {
      let left = this.cells[i-1];
      let me = this.cells[i];
      let right = this.cells[i+1];
      nextgen[i] = this.rules(left, me, right);
    }
    this.cells = nextgen;
    this.generation++;
  }
  
  rules(a, b, c){
    let s = "" + a + b + c;
    let index = parseInt(s,2);
    return this.ruleset[index];
  }
  
  display(){
    for (let i = 0; i < this.cells.length; i++) { 
      if (this.cells[i] == 0) 
        fill(255);
      else fill(0); 
      stroke(0);
      rect(i*this.w, this.generation*this.w, 
           this.w,this.w);
    }
  }
}