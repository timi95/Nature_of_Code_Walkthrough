class Boid extends Vehicle {
  constructor(x,y){
    super(x,y)
  }
  
  
  separate(boids){
    let sum = createVector();
    let count = 0;
    let desiredSeparation =  50//this.boids[i].r*2;
    for(let i=0; i < this.boids.length; i++){
      for(let j=0; j < this.boids.length; j++){
        
          let d = p5.Vector.dist(
            this.boids[i].location, 
            this.boids[j].location);
        
        
          if ((d > 0) && (d < desiredSeparation)) {
            let diff = p5.Vector.sub(
              this.boids[i].location, 
              this.boids[j].location);
            
            diff.normalize();
            diff.div(d);
            sum.add(diff);
            count++;
          }
        
          if(count > 0){
            sum.div(count);
            sum.normalize();
            sum.mult(this.boids[j].maxspeed);
            
            let steer = p5.Vector.sub(sum, this.boids[i].velocity);
            steer.limit(this.boids[i].maxforce);
//             this.boids[i].applyForce(steer);
            // this.boids[i].applyForce();
            // this.boids[i].evade();
            return steer;
          }
        
      }
      
    }
    
  }
  
  /*
      for(let i=0; i < boids.length;i++){
      for(let j=0; j<boids.length;j++){
        let d = p5.Vector.dist(boids[i], boids[j]);
        if(d < 30){
          sum.add(boids[i].velocity);
        }
      }
    }*/
  
  align(boids){
    let sum = new createVector(0,0);
    let neighbordist = 50;
    let count = 0;
    boids.forEach( other =>{
      let d = PVector.dist(this.location,other.location);
      if ((d > 0) && (d < neighbordist)) {
      sum.add(other.velocity);
        count++; /*For an average, we need to keep track of
how many boids are within the distance.*/
      }
    });
    
    if(count >0) {
      sum.div(count);
      // We desire to go in that direction at
      // maximum speed.
      sum.setMag(this.maxspeed);

      /*Reynolds’s steering force formula*/
      let steer = p5.Vector.sub(sum, this.velocity); 
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0,0);
    }
    
  }
  
  cohere(boids){
    let sum = new createVector(0,0);
    let neighbordist = 50;
    let count = 0;
    boids.forEach( other =>{
      let d = PVector.dist(this.location,other.location);
      if ((d > 0) && (d < neighbordist)) {
      sum.add(other.location);
        count++; /*For an average, we need to keep track of
how many boids are within the distance.*/
      }
    });
    
    if(count >0) {
      sum.div(count);
      return this.seek(sum, true);
    } else {
      return createVector(0,0);
    }
  }
  
  flock(boids){
    let sep = separate(boids); //The three flocking rules
    let ali = align(boids);
    let coh = cohere(boids);
    // Arbitrary weights for these forces (Try
    // different ones!)
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    
    this.applyForce(sep); //Applying all the forces
    this.applyForce(ali);
    this.applyForce(coh);
  }
}