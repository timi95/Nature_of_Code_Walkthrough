let angles=[];
let angleV=[];
let angle=0; //Location
let aVelocity=0; //Velocity
let aAcceleration=0.001; //Acceleration
let largestSize=20;
let movers=[];
let oscillators=[];
let attractor;
let r=4//150;

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
  oscillator = new Oscillator();
  
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    angles[i]=map(i, 0, total, 0, TWO_PI);
    angleV[i]=0.01+i/1000;
  }
  // background(200,20);
  
}

function draw() {
  background(200,20);
  
  
  // if(keyIsDown(LEFT_ARROW)){
  //   movers[0].angle -=0.1;
  // } else if(keyIsDown(RIGHT_ARROW)){
  //   movers[0].angle +=0.1;
  // }
  
  
//    movers.forEach((mover,i)=>{ 
     
//     gravityBehaviour(mover);
//     followMouseBehaviour(mover);
//     attractionBehaviour(attractor, mover);
//     attractor.display();
//     frictionBehaviour(mover);

     
//     mover.update();
//     mover.checkEdges();
//     mover.display();
//    });
  
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

  
//   // 3.5 spiral
//   push();
//     translate(width/2,height/2);
//     stroke(255,0,200);
//     strokeWeight(4);
//     noFill();
//     circle(0,0,r*2);
  
  
//     strokeWeight(34);
//     stroke(255,230,33);
//     let x = r * cos(angle);
//     let y = r * sin(angle);
//     point(x,y);
//     angle +=0.01;
//     r -=  0.1;
//   pop();
  
  
  //// 3.6 Simple Harmonic Motion
//   let period = 120;
//   let amplitude = 100;
//   let x = amplitude * cos(angle); //amplitude * cos(TWO_PI * frameCount / period);
  
//   push();
//   angle += aVelocity;
//   aVelocity += 0.0001;
//     stroke(0);
//     fill(175);
//     translate(width/2,height/2);
//     line(0,0,x,0);
//     ellipse(x,0,20,20);
//   pop();
  
  angles.forEach( (wav,i)=>{
       let y = map(sin(angles[i]), -1, 1, 0, height);
    strokeWeight(4);
    let x = map(i, 0, angles.length, r, width);
        // line(x, 0, x, y);
    circle(x, y, r * 2);
    // vertex(x,y);
    angles[i] += 0.02;
    angles[i] += angleV[i];
  });
  
//   oscillator.oscillate();
//   oscillator.display();
  

}
