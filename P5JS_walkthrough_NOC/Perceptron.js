class Perceptron {
   constructor({n, _c=0.01}={}){
    this.weights = new Array(n);
     for (let i = 0; i < this.weights.length; i++){
       //The weights are picked randomly to start
       this.weights[i] = random(-1,1); 
     }
      this.c = _c; //learning constant
   }
  
  activate(sum) { //The activation function
      //Return a 1 if positive, -1 if negative.
      if (sum > 0) return 1; 
      else return -1; 
  }

  
  feedforward(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i]*this.weights[i];
    }
    return this.activate(sum);
  }
  
  //Step 1: Provide the inputs and known
  // answer. These are passed in as arguments
  // to train().
  train(inputs, desired) {
    //Step 2: Guess according to those inputs
    let guess = this.feedforward(inputs); 
    //Step 3: Compute the error (difference between answer and guess).
    let error = desired - guess;
    
    for (let i = 0; i < this.weights.length; i++) {
    //Step 4: Adjust all the weights according to
    // the error and learning constant.
      this.weights[i] += this.c * error * inputs[i];
    }
  }
  
}