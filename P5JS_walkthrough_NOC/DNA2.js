class DNA2 {
  constructor(genes, color) {
    this.maxforce = 0.2;
    this.mutationRate = 0.1;
    this.lifetime=500;
    if(color){
      this.color = color;
    }
    if (genes) {      
      this.genes = genes;
    } else {      
      // generate
      this.genes = [];
      for (let i = 0; i < this.lifetime; i++) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(this.maxforce);
      }
      this.color = this.initColor();
    }
  }
  
  initColor(){
  return {r:random(255),
                  g:random(255),
                  b:random(255)}
  }
  
  crossover(partner) {
    let newgenes = [];
    // Picks random midpoint
    let mid = floor(random(this.genes.length));
    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid){ 
        newgenes[i] = this.genes[i];
      }
      else {
        newgenes[i] = partner.genes[i];     
      }
    }
    let newColor = partner.color
    if(random(1)<0.5) newColor = this.color
    // if(this.color) child.color = this.color;
    return new DNA2(newgenes, newColor);
  }
  
  mutate() {
      for (let i = 0; i < this.genes.length; i++) { 
        // Looking at each gene in the array
      if (random(1) < this.mutationRate) {        
        this.genes[i] = p5.Vector.random2D();
        // Mutate, a new random Vec
        
        this.color = this.initColor();
      }
    }
  }
}
