class LSystem {
  constructor(axiom, ruleset){
    this.current = axiom?axiom:"A";
    this.next = ruleset;
    this.count=0;
    this.len = windowHeight/2;
    this.theta = radians(20);
    this.treeAngle = -90

  }
  
  generateFromAxiom(){
    let i = 0;
    if (i < this.current.length) {
      let c = this.current.charAt(i);
      if(c === 'G'){
        this.next += "FF+[+F-F-F]-[-F+F+F]+FG";
      }
      this.current = this.next;
    }
    i+=1;
  }
  
  getSentence(){
    return this.current;
  }
  
  generate(){
    for (let i = 0; i < this.current.length; i++) {
      let c = this.current.charAt(i);
      if (c === 'A') { 
        //Production rule A --> AB
        this.next += "AB";
      } else if (c === 'B') { 
        //Production rule B --> A
        this.next += "A";
      }
    }    
      this.current = this.next;
      this.count++;
            console.log(
        "Generation #" + this.count + ", "+
        // "next: [" + this.next + "], "+
        "current: " + this.current);
  }
  
  turtleDraw(){
    rotate(radians(this.treeAngle))
      for (let i = 0; i < this.current.length; i++) {
        let c = this.current.charAt(i);
        if (c == 'F') {
          strokeWeight(4);
          line(0,0,this.len,0);
          translate(this.len,0);
        } else if (c == 'G') {
          translate(this.len,0);
        } else if (c == '+') {
          rotate(this.theta);
        } else if (c == '-') {
          rotate(-this.theta);
        } else if (c == '[') {
          push();
        } else if (c == ']') {
          pop();
        }
      }
      this.len *= 0.7;
    // i+=1;
  }
  update(){}
  draw(){
  }
}