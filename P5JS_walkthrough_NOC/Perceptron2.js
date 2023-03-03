class Perceptron2{
   constructor({n, _c=0.01}={}){
    this.weights = new Array(n);
     for (let i = 0; i < this.weights.length; i++){
       this.weights[i] = random(-1,1); 
     }
      this.c = _c;
   }
  
  feedforward(forces) {
    // Sum is a PVector.
    let sum = createVector();
    for (let i = 0; i < this.weights.length; i++) {
      // Vector addition and multiplication
      forces[i].mult(this.weights[i]);
      sum.add(forces[i]);
    }
    // No activation function
    return sum;
  }
  
  train(forces, error) {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c*error.x*forces[i].x;
      this.weights[i] += this.c*error.y*forces[i].y;
    }
  }
}