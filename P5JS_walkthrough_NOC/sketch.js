let angle = 60;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(200,50);
  
 
  
  //draw baton
    stroke(10);
    fill(175);
    
    translate(width/2,height/2);
    rotate(angle);
    line(0,0, 
         0-50,0-50);
    ellipse( 0,0, 16, 16);
    ellipse( 0-50,0-50, 16, 16);
    angle += 1;

  
}
