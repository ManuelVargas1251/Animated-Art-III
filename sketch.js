// circle positions
let xPosOne = 90,
  xPosTwo = xPosOne + 60,
  xPosThree = xPosTwo + 60,
  // circle heights
  heightOne = 80,
  heightTwo = heightOne + 100,
  heightThree = heightTwo + 100,
  //circle diameters
  circleSize = 80,
  // colors
  lightGoldBorder = "#DDDF74",
  darkGoldBorder = "#D8DA90",
  lightBackgroundColor = "#CBDEF6", //light blue
  darkBackgroundColor = "#252525"; //light black

function setup() {
  createCanvas(666, 444);
  background(lightBackgroundColor);
  //noStroke();   // don't draw shape outlines pls

  diameter = width / 2;
  console.log(diameter);

  strokeWeight(13);

  stroke(darkGoldBorder); //dark yellow border

  // Big Circle 1 - Blue Teal
  fill("#B5F0EE"); //Circle Color - Light Blue
  circle(xPosThree * 2, heightThree, circleSize * 3);

  stroke(lightGoldBorder); //light yellow border

  // Big Circle 2 - Violet
  fill("#BE72E1"); //Circle Color - Light Blue
  circle(xPosThree, heightTwo, circleSize * 2);

  stroke(darkGoldBorder); //dark yellow border

  // Big Circle 3 - Pink
  fill("#F87EC2"); //Circle Color - Pink
  circle(xPosOne, heightOne, circleSize);
}

function draw() {
  //fill('#0096FF'); //object color blue
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
