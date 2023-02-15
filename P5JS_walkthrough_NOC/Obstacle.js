class Obstacle {
  constructor(){
    this.location = new p5.Vector();
    this.w; 
    this.h;
  }
  
   contains(v) {
      if (v.x > location.x 
          && v.x < location.x + w 
          && v.y > location.y 
          && v.y < location.y + h) {
        return true;
      } else {
        return false;
      }
    }
}