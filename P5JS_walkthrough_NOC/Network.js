class Network{
  constructor(x,y){
    this.location=createVector(x,y);  
    this.neurons=[];
  }
  
  addNeuron(n) { 
      // We can add an neuron to the network.
    this.neurons.push(n);
  }
  
  connect(a, b) {
    let c = new Connection(a, b,random(1));
    // But what do we do with the Connection object?
    a.addConnection(c);
  }
  
  feedforward(input) {
    let start = this.neurons[0];
    start.feedForward(input);
  }

  update(){
    /*
    The Network now has a new update()
    method that updates all of the Connection
    objects.*/
    this.neurons.forEach(n=>{
      n.connections.forEach(c=>c.update());
    })
  }
  
  display() { 
    //We can draw the entire network.
    push();
      translate(this.location.x, this.location.y);
      this.neurons.forEach(n=>{
        n.display(); 
      });
    pop();
  }
  
}