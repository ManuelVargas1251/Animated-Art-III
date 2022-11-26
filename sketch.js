let xPosOne = 90,
    xPosTwo = xPosOne + 60,
    xPosThree = xPosTwo + 60
let heightOne = 80,
    heightTwo = heightOne + 100
    heightThree = heightTwo + 100
let circleSize = 80;
let myBlue = '#87CEFA';
let myWhite = '558, 583, 233'
let bug,
diameter
let gc1 = '252525',
    gc2 = '#215BD0'
//let inter = map(i, y, y + h, 0, 1);

function setup() {
  createCanvas(666, 666);   //square box
  background('#F0FFFF');    //light bg color
  background('#1C1C1C');    //black bg color
  background('#252525');    //black bg color
  noStroke();   // don't draw shape outlines pls
  //bg gradient
  diameter = width / 2;
  console.log(diameter);

  //lerpColor(gc1, gc2, inter)

  bug = new Jitter();
  
 /* 
//1
  fill(myWhite); //white
  circle(xPosOne, heightOne, circleSize);
  
  fill(myBlue);
  circle(xPosTwo, heightOne, circleSize);
  
  fill(myWhite); //white
  circle(xPosThree, heightOne, circleSize);

//2
  fill(myWhite); 
  circle(xPosOne, heightTwo, circleSize);
  
  fill('#9FE2BF'); //green
  circle(xPosTwo, heightTwo, circleSize);
  
  fill(myWhite); 
  circle(xPosThree, heightTwo, circleSize);

//3
  fill(myWhite); //white
  circle(xPosOne, heightThree, circleSize);
  
  fill(myBlue);
  circle(xPosTwo, heightThree, circleSize);
  
  fill(myWhite); //white
  circle(xPosThree, heightThree, circleSize);

*/

// Big Circle
  fill('#CCCCFF'); //white
  circle(xPosThree*2, heightThree, circleSize*3);
}

function draw() {
  fill('#0096FF');
  bug.move();
  bug.display();
}

//radial gradient class
function drawGradient(x, y) {
    let radius = dim / 2;
    //let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
      fill(90, 90, 90);
      ellipse(x, y, r, r);
      h = (h + 1) % 360;
    }
  }

// Jitter class
class Jitter {
  constructor() {
    this.x = 121;
    this.y = 444;
    this.diameter = random(25, 40);
    this.speed = 2;
  }
  move() {
    this.x += random(-this.speed, this.speed+1);
    this.y += random(-this.speed, this.speed);
    //console.log(this.x);
    if(this.x >=658){
      this.x =0;
    }
  }
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}