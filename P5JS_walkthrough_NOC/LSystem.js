class LSystem {
  constructor(){
    this.current = "A";
    this.next = "";
    this.count=0;
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
  update(){}
  draw(){
  }
}