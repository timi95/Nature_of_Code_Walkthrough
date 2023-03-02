class Trainer {
  constructor(x, y, a){
    this.inputs = new Array(3);
    this.inputs[0] = x;
    this.inputs[1] = y;
    // Note that the Trainer has the bias input built
    // into its array.
    this.inputs[2] = 1;
    this.answer = a;
  }
  

}