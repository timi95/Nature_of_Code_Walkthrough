class Turle {
  constructor() {
    this.diameter = 20
    this.position = createVector(windowWidth/2, 0)
  }
  
  render(){
    let x = this.position.x;
    let y = this.position.y;
    strokeWeight(4)
    circle(x, y, this.diameter);
  }
}