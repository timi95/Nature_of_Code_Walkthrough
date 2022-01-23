class FlowField{
  
  constructor(r){
    this.resolution = r;
    this.cols = width/this.resolution;
    this.rows = height/this.resolution;
    this.field = [];
    this.init();
  }
  
    init() {
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      this.field[i] = [];
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        let theta = map(noise(xoff,yoff),0,1,0,TWO_PI);
        this.field[i][j] = createVector(cos(theta),sin(theta));
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }
  
    lookup(lookup) {
    let column = floor(constrain(this.cols,0,this.cols-1));
    let row = floor(constrain(this.rows,0,this.rows-1));
      // console.log('lookup result: ', this.field[column][row] );
    return  this.field[column][row];
  }
  
  display(){
    for(let i=0; i<this.field.length;i++){
      for(let j =0; j< this.field[i].length; j++){
        
      }
    }
    fill(115);
    stroke(0);
    push();
    translate(this.location.x, this.location.y);
    rotate(theta);
    beginShape();
      vertex(0, -this.r*2);
      vertex(-this.r, this.r*2);
      vertex(this.r, this.r*2);
    endShape(CLOSE);
    pop();
  }
  
}