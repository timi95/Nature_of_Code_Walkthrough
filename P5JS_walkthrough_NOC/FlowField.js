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
        this.field[i][j] = new createVector(cos(theta),sin(theta));
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }
  
    lookup(lookup) {
    let column = int(constrain(lookup.x/this.resolution,0,this.cols-1));
    let row = int(constrain(lookup.y/this.resolution,0,this.rows-1));
    return this.field[column][row].get();
  }
  
}