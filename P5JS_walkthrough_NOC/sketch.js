
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

function drawTriangle( x, y,length) {
  let x2 = x+length;
  let y2 = y+length+10;
  let x3 = x+length+20;
  let y3 = y+length+30;
  stroke(0);
  noFill();
  triangle(x,y,x2,y2,x3,y3);
  if(length > 3) {
    // drawTriangle(x, y, length/2);
    // drawTriangle(x - length/3, y, length/3);
    
    // drawTriangle(x, y + length/3, length/3);
  }
}
function draw() {
  
  createCanvas(windowWidth, windowHeight);
  background(150);
  drawTriangle(width/2,height/2,300);
  // drawCircle2(width/2,height/4,200);
  // drawCircle(width/2,height-100,200);
  
}