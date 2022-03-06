class VehicleSystem {
  constructor(x,y){
  this.location = createVector(x,y);
  this.vehicles = [];
  this.desiredSeparation = 20;
  this.setup();
  }
  
  setup() {
    for (let i = 0; i < 5; i++) {
    this.vehicles.push(new Vehicle(random(width),random(height)));
    }
  }
  
  separate(vehicles){
    
    let sum = createVector();
    let count = 0;
    for(let i=0; i < this.vehicles.length; i++){
      let desiredSeparation =  this.vehicles[i].r*2;
      for(let j=0; j < this.vehicles.length; j++){
        
          let d = p5.Vector.dist(
            this.vehicles[i].location, 
            this.vehicles[j].location);
        
        
          if ((d > 0) && (d < desiredSeparation)) {
            let diff = p5.Vector.sub(
              this.vehicles[i].location, 
              this.vehicles[j].location);
            
            diff.normalize();
            diff.div(d);
            sum.add(diff);
            count++;
          }
        
          if(count > 0){
            sum.div(count);
            sum.normalize();
            sum.mult(this.vehicles[j].maxspeed);
            
            let steer = p5.Vector.sub(sum, this.vehicles[i].velocity);
            steer.limit(this.vehicles[i].maxforce);
            this.vehicles[i].applyForce(steer);
            // this.vehicles[i].applyForce(
            //   this.vehicles[i].evade(this.vehicles[j]));
          }
        
      }
      
    }
    
  }
  
  update(){
    this.vehicles.forEach(v=>{
      v.update();
    });      

  for(let i = this.vehicles.length-1; i >=0; i--)
    if( this.vehicles[i].isDead() ) 
    { this.vehicles.splice(i,1); }
    
  }
  
  display(){
    this.vehicles.forEach(v=>{
      this.separate(this.vehicles);
      v.update();
      v.display();
    });    
  }
  

}