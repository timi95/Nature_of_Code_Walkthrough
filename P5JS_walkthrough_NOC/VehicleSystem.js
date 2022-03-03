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
    vehicles.forEach((v,i)=>{
      if((i+1) < this.vehicles.length){
        let d = p5.Vector.dist(v.location, this.vehicles[i+1].location);
        
        
        if ((d > 0) && (d < this.desiredSeparation)) {
          this.vehicles[i].applyForce(
            this.vehicles[i].evade( this.vehicles[i+1]) );
        }
        
      }
    });
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