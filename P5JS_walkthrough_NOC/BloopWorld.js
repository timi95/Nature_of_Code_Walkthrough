class BloopWorld {
  constructor(num) {
    this.food=[];
    this.bloops=[]; //A list of bloops
    for (let i = 0; i < num; i++) {
      let l = createVector(random(windowWidth),
                           random(windowHeight));
      let dna = new BloopDNA();
      this.bloops.push(new Bloop(l, dna)); 
      this.food.push(new BloopFood());
      //Making an initial population of bloops
    }
  }
  
  run(){
    // console.log('Bloops running: ', this.bloops)
    let trough=[...this.food]
        trough.forEach(f=> f.display());
    
    this.bloops.forEach(b=>{
      if(b.isDead()==false
        && trough.length > 0){ 
        b.live()
      }
    });
    let population = [...this.bloops]
        population.forEach(b=>{
          let child = b.reproduce();
          if (child != null) { this.bloops.push(child); }
        });
    population.forEach(b=> b.eat(this.food));
//     population.forEach((bloop,i) =>{
        
//         if (bloop.isDead() 
//             && (this.bloops.indexOf(i) !== -1)) {
//           this.bloops.splice(this.bloops.indexOf(i),1);
//           //spawn food where a bloop dies
//           this.food.push(new BloopFood(bloop.location));
//         }

        
//       });


  }
}