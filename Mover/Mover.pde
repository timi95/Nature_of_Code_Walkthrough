class Mover {
  PVector location;
  PVector velocity;
  
  void update() {
    location.add(velocity); //The Mover moves.
  }
  void display() {
    stroke(0);
    fill(175);
    
    ellipse(location.x,location.y,16,16); //The Mover is displayed.
  }
}
