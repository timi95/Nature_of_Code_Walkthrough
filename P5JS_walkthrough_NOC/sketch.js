let lSys;
let turtle;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);

  lSys = new LSystem("F", "FF+[+F-F-F]-[-F+F+F]");
  // turtle = new Turtle(lsys.getSentence(),width/4,radians(25));
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

function mousePressed(){
  // lSys.generate();

  lSys.generateFromAxiom();
  lSys.turtleDraw();
  // turtle.setToDo(lsys.getSentence());
  // turtle.changeLen(0.5); 
}

function draw() {  
  // createCanvas(windowWidth, windowHeight);
  // drawCircle2(width/2,height/4,200);
  // drawCircle(width/2,height-100,200);
  translate(windowWidth/2, windowHeight+100); //Start at the bottom of the window and draw.
  // turtle.render();
  
}