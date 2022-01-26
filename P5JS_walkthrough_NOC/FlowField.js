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
    let size = 5;
    for(let i=0; i<this.field.length;i++){
      for(let j =0; j< this.field[i].length; j++){
        push();
        stroke(0);
        strokeWeight(2);
        fill(115,10,10);
        translate(width*this.field[i][j].x, height*this.field[i][j].y);
        rotate(this.field[i][j].heading());
        beginShape();
          vertex(0, -size*2);
          vertex(-size, size*2);
          vertex(size, size*2);
        endShape(CLOSE);
        pop();
      }
    }

  }
  
}