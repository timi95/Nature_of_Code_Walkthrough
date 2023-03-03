let network;
function setup(){
  createCanvas(windowWidth, windowHeight);
      network = new Network(width/2,height/2); //Make a Network.
      let a = new Neuron(-200,0); //Make the Neurons.
      let b = new Neuron(0,100);
      let c = new Neuron(0,-100);
      let d = new Neuron(200,0);
  
      network.connect(a,b); //Making connections between the neurons
      network.connect(a,c);
      network.connect(b,d);
      network.connect(c,d);
  
      network.addNeuron(a); //Add the Neurons to the network.
      network.addNeuron(b);
      network.addNeuron(c);
      network.addNeuron(d);
  
      network.feedforward(random(1));
}

function draw(){
  createCanvas(windowWidth, windowHeight);
  background(200);
  network.display();
  
  network.update();
  if (frameCount % 30 == 0) {
    // We are choosing to send in an input every
    // 30 frames.
    network.feedforward(random(1));
  }
}