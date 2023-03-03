class Neuron {
  constructor(x,y){
    this.location=createVector(x,y);
    this.sum=0;
    this.connections=[];
  }
  
  addConnection(c) { //Adding a connection to this neuron
    this.connections.push(c);
  }
  
  fire(){
    this.connections.forEach(c=>{
      c.feedForward(this.sum);
    })
  }
  
  feedForward(input){
    this.sum += input;
    if (this.sum > 1) { 
      this.fire();
      this.sum=0;
    }
  }
  
  display() {
    stroke(0);
    fill(0);
    ellipse(this.location.x, this.location.y, 16, 16);
    this.connections.forEach(c=>c.display())
  }
}