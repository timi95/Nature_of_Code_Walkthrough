class Cell {
  constructor(){
    this.w=0
    this.x=0;
    this.y=0;
    this.state=0;
    this.previous=0;
  }
  
  display(){
    if (this.previous == 0 
        && this.state == 1){ fill(0,0,255); }
    else if (this.state == 1) { fill(0); }
    else if (this.previous == 1 
             && this.state == 0) { fill(255,0,0); }
    else { fill(255); }
    rect(this.x, this.y, this.w, this.w);
  }
}