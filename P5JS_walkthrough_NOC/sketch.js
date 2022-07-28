
function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function drawCircle( x,  y,  radius) {
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if(radius > 2) {
    //drawCircle() calls itself twice, creating a
    //branching effect. For every circle, a
    //smaller circle is drawn to the left and the
    //right.
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
  }
}

function drawCircle2( x,  y,  radius) {
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if(radius > 8) {
    drawCircle2(x + radius/2, y, radius/2);
    drawCircle2(x - radius/2, y, radius/2);
    
    drawCircle2(x, y + radius/2, radius/2);
    drawCircle2(x, y - radius/2, radius/2);
  }
}

function draw() {
  
  createCanvas(windowWidth, windowHeight);
  background(150);
  drawCircle2(width/2,height/2,width/2);
  
}