class Liquid {
  // The liquid object includes a variable defining
  // its coefficient of drag.
  
    constructor(x_, y_, w_, h_, c_) {
      this.x = x_;
      this.y = y_;
      this.w = w_;
      this.h = h_;
      this.c = c_;
    }
    
    display() {
      noStroke();
      fill(175);
      rect(this.x,this.y,this.w,this.h);
    }
    
    submerges(object) {
      if (object.location.x > this.x &&
          object.location.x < this.x+this.w &&
          object.location.y > this.y &&
          object.location.y < this.y+this.h) {        
        return true;
      } else {
        return false;
      }
      
    }
    
    
  }