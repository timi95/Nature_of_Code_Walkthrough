class BloopDNA{
  constructor(_genes){
    if(_genes) 
    { this.genes=_genes; }
    else {
      this.genes=new Array(1);
      for (let i = 0; i < this.genes.length; i++) {
        this.genes[i]=random(0,1);
      }
    }
  }
  
  copy(){
    let newgenes = [...this.genes];
    return new BloopDNA(newgenes);
  }
  
  mutate(mutationChance){
    if(mutationChance <random(1)){      
      for (let i = 0; i < this.genes.length; i++) {
        this.genes[i]=random(0,1);
      }
    }
  }
}