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
        this.field[i][j] = p5.Vector.fromAngle(theta);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }
  
    lookup(lookup) {
    let column = floor(
      constrain(lookup.x/this.resolution,0,this.cols-1));
    let row = floor(
      constrain(lookup.y/this.resolution,0,this.rows-1));
      // console.log('lookup result: ', this.field[column][row] );
    return  this.field[column][row];
  }
  
  display(){
    let size = 5;
    for(let i=0; i<this.field.length;i++){
      for(let j =0; j< this.field[i].length; j++){
         this.drawVector(this.field[i][j],
                    i*this.resolution,
                    j*this.resolution,
                    this.resolution-2);
      }
    }

  }
  
  // Renders a vector object 'v' as an arrow and a position 'x,y'
   drawVector(v, x, y, scayl) {
    push();
      let arrowsize = 4;
      // Translate to position to render vector
      translate(x,y);
      stroke('purple');
      strokeWeight(2);
      // Call vector heading function to get direction (note that pointing to the right is a heading of 0) and rotate
      rotate(v.heading());
      // Calculate length of vector & scale it to be bigger or smaller if necessary
      let len = v.mag()*scayl;
      // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
      line(0,0,len,0);
      line(len,0,len-arrowsize,+arrowsize/2);
      line(len,0,len-arrowsize,-arrowsize/2);
    pop();
  }
}