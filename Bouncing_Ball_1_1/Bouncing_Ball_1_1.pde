float x = 100; //Variables for location and speed of ball.
float y = 100;
float xspeed = 1;
float yspeed = 3.3;

void setup() {
  size(600,150);
  background(255);
}

void draw() {
  background(255);
  x = x + xspeed; //Move the ball according to its speed.
  y = y + yspeed;
  
  if ((x > width) || (x < 0)) { //Check for bouncing.
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
  
  stroke(0);
  fill(175);
  ellipse(x,y,16,16);
}
