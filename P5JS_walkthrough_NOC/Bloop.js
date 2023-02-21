class Bloop {
  constructor(_location, _dna){
    if(_location && _dna){
      this.dna=_dna;
      this.location=_location;
    } else {
      this.dna=new BloopDNA();
      this.location=createVector(
      random(windowWidth), random(windowHeight));
      
    }
    this.velocity=createVector();
    this.xoff=random(1000);
    this.yoff=random(3000);
    this.r=map(this.dna.genes[0], 0, 1, 0, 50);
    this.maxspeed=map(this.dna.genes[0], 0, 1, 15, 0);
    
    //Bloops die, and are born
    this.health=random(50,100);
    
  }
  
  isDead() {
    if (this.health < 0) {
      return true;
    } else {
      return false;
    }
  }
  
  reproduce() {
    if (random(1) < 0.005 
        && this.isDead()===false) {
      let childDNA = this.dna; //Make a copy of the DNA.
      childDNA.mutate(0.01); //1% mutation rate; 
        //Make a new bloop at the same location with the new DNA.
      return new Bloop(createVector(
      random(windowWidth), random(windowHeight)), childDNA);
    } else {
      return null; //If the bloop does not reproduce, return null.
    }
  }
  
  eat(food){
    let trough = [...food]
    trough.forEach( (f, i)=>{
      let foodLocation=trough[i].location;
      let d = dist(this.location.x, this.location.y, 
                   foodLocation.x, foodLocation.y);
      
      if (d < this.r/2) { 
        //Is the Bloop close to the food?
        this.health += 100; //If so, it gets 100 more health points. 
        //The food is no longer available for other
        //Bloops.
        food.splice(trough.indexOf(i),1);
      }
    });
  }
  
  update(){
    let vx = map(noise(this.xoff),0,1,-this.maxspeed,this.maxspeed);
    let vy = map(noise(this.yoff),0,1,-this.maxspeed,this.maxspeed);
    //A little Perlin noise algorithm to calculate a velocity
    this.velocity=createVector(vx,vy);
    this.xoff += 0.001;
    this.yoff += 0.001;
    this.location.add(this.velocity); //The bloop moves.
    this.health -= 1; //Death is always looming!
  }
  
    checkEdges() {
      if (this.location.x > width) {
        this.location.x = 0;
      } 
      else if (this.location.x < 0) {
        this.location.x = width;
      }
      if (this.location.y > height) {
        this.location.y = 0;

      } else if (this.location.y < 0) {
        this.location.y = height;

      }
    }  
  
  display(){
    this.checkEdges();
    push();
      fill('grey');
      strokeWeight(5);
      ellipse(this.location.x, this.location.y, this.r, this.r);
    pop();
  }
  
  live(){
    if(this.isDead()===false){
      this.update();
      this.display();
    }
  }
}