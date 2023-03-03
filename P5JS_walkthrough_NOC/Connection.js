class Connection {
  constructor(from, to, w) {
    this.weight = w;
    this.a = from;
    this.b = to;
    
    this.sending=false;
    this.sender=createVector();
    this.output=0;
  }
  
  feedForward(val) {
    this.sender=this.a.location
    this.output=val*this.weight;
    this.sending=true;
  }
  

  update(){
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.location.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.location.y, 0.1);
      //How far are we from neuron b?
      let d = p5.Vector.dist(this.sender, this.b.location); 
      
      //If we’re close enough (within one pixel) pass
      //on the output. Turn off sending.
      if (d < 1) {
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }
  
  display() { //A connection is drawn as a line.
    stroke(0);
    strokeWeight(this.weight*4);
    line(this.a.location.x, this.a.location.y, 
         this.b.location.x, this.b.location.y);
    
    if (this.sending) {
      fill(0);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }
}