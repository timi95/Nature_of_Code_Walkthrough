class Oscillator {

    constructor(velocity) {
      this.angle = new createVector();
      
      this.velocity = velocity? velocity: new createVector(
        random(-0.05,0.05),random(-0.05,0.05));
      
      this.amplitude = new createVector(
        random(width/2),random(height/2));
    }
  
    oscillate() {
      this.angle.add(this.velocity);
    }
  
    display() {
      //Random velocities and amplitudes
      let x = cos(this.angle.x)*this.amplitude.x; //Oscillating on the x-axis
      let y = sin(this.angle.y)*this.amplitude.y; //Oscillating on the y-axis
      push();
      translate(width/2,height/2);
      stroke(0);
      fill(175);
      // The Nature of Code (v1.0)
      // 121
      // Drawing the Oscillator as a line connecting
      // a circle
      line(0,0,x,y);
      ellipse(x,y,16,16);
      pop();
    }
  }