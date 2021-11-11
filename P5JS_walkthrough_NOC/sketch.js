let angle = 0; //Location
let aVelocity = 0; //Velocity
let aAcceleration = 0.001; //Acceleration
let largestSize = 20;
let movers = [];
let attractor;

function setup() { 
    for(let i=0; i< 10; i++) {
    movers.push (
      new Mover(
      random(0.1, largestSize), 
      createVector(random(1, windowWidth), random(1, windowHeight))
      ) );
  }
  createCanvas(400, 400);
  // angleMode(RADIANS);
  attractor = new Attractor();
}

function draw() {
  background(200,50);
  
  
  if(keyIsDown(LEFT_ARROW)){
    movers[0].angle -=0.1;
  } else if(keyIsDown(RIGHT_ARROW)){
    movers[0].angle +=0.1;
  }
  
  
   movers.forEach((mover,i)=>{ 
     
    // gravityBehaviour(mover);
    // followMouseBehaviour(mover);
    // attractionBehaviour(attractor, mover);
    attractor.display();
    // frictionBehaviour(mover);

     
//     mover.update();
//     mover.checkEdges();
//     mover.display();
   })
  
  //draw baton
//     stroke(10);
//     fill(175);
    
//     translate(width/2,height/2);
//     rotate(angle);
//     line(-50,0,50,0);
//     ellipse(50,0,16,16);
//     ellipse(-50,0,16,16);
//     angle += 0.01;
//     aVelocity += aAcceleration;
//     angle += aVelocity; 
  // Angular equivalent of location.add(velocity);

  
  push();
    translate(width/2,height/2);
    let r = 150
    stroke(255,0,200);
    strokeWeight(4);
    noFill();
    circle(0,0,r*2);
  
  
    strokeWeight(34);
    stroke(255,230,33);
    let x = r * cos(angle);
    let y = r * sin(angle);
    point(x,y);
    angle +=0.01;
  
  pop();
  
  
}
