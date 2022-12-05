let canvasWidth = 444,
    canvasCenter = canvasWidth/2
// circle positions
  xPosOne = canvasCenter,
  xPosTwo = canvasCenter,
  xPosThree = canvasCenter,

  // circle heights
  heightOne = 80,
  heightTwo = heightOne + 150,
  heightThree = heightTwo + 250,

  //circle diameters
  circleSize = 80,

  // colors
  lightGoldBorder = "#DDDF74",
  darkGoldBorder = "#D8DA90",
  lightBackgroundColor = "#8bb7eb", //light blue
  darkBackgroundColor = "#252525"; //light black

function setup() {
  createCanvas(canvasWidth, 666);
  background(lightBackgroundColor);
  //noStroke();   // don't draw shape outlines pls

  diameter = width / 2;
  console.log(diameter);

  strokeWeight(5);

  //stroke(darkGoldBorder); //dark yellow border

  // Big Circle 1 - Blue Teal
  //fill("#B5F0EE"); //Circle Color - Light Blue
  //circle(xPosThree, heightThree, circleSize * 3);

  //stroke(lightGoldBorder); //light yellow border

  // Big Circle 2 - Violet
  //fill("#BE72E1"); //Circle Color - Light Blue
  //circle(xPosTwo, heightTwo, circleSize * 2);

  //stroke(darkGoldBorder); //dark yellow border

  // Big Circle 3 - Pink
  //fill("#F87EC2"); //Circle Color - Pink
  //circle(xPosThree, heightOne, circleSize);
}

function draw() {

  //move top circle right until border
  if(xPosThree < 368){
    xPosThree += 1;
  }

  //move middle left circle until border
  if(xPosTwo > 86){
    xPosTwo -= 1;
  }

  if(xPosThree == 368 && heightThree < 538){
    heightThree += 1
  }

  if(heightThree == 538){
    noLoop()  // stop draw() once complete
  }

  stroke(darkGoldBorder); //dark yellow border

  // Draw Circle 1 with new Y position - Blue Teal
  fill("#B5F0EE"); //Circle Color - Light Blue
  circle(xPosOne, heightThree, circleSize * 3);

  stroke(lightGoldBorder); //light yellow border


  // Draw Circle 2 with new X position - Violet
  fill("#BE72E1"); //Circle Color - Light Blue
  circle(xPosTwo, heightTwo, circleSize * 2);

  stroke(darkGoldBorder); //dark yellow border
  
  // Draw Circle 3 with new X position - Pink
  fill("#F87EC2"); //Circle Color - Pink
  circle(xPosThree, heightOne, circleSize);


  console.log('xPosOne: ' + xPosOne)
  console.log('xPosTwo: ' + xPosTwo)
  console.log('xPosThree: ' + xPosThree)


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
