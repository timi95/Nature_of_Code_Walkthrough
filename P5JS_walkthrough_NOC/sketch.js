let ptron;
let _point;
let result;
let count=0;
let training=new Array(2000);
let x,y;

function f(x) {
  return 2*x+1;
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  ptron = new Perceptron(3);
  _point = [50,-12,1];
  result = ptron.feedforward(_point);
  
  
  
  for (let i = 0; i < training.length; i++) {
    x = random(-width/2,width/2);
    y = random(-height/2,height/2);
    let answer = 1;
    if (y < f(x)) answer = -1;
    training[i] = new Trainer(x, y, answer);
  }
}


function draw(){
  createCanvas(windowWidth, windowHeight);
  background(200);
  translate(width/2,height/2);
  line(-width/2,-height/2,
       width/2,height/2);
  
  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;
  
  for (let i = 0; i < count; i++) {
    stroke(0);
    let guess = ptron.feedforward(training[i].inputs);
    if (guess > 0) noFill();
    else fill(0);
    
    ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
  }
}