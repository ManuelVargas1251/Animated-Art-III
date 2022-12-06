let canvasWidth = 444
  canvasHeight = 666
  canvasCenter = canvasWidth/2

  // circle positions
  xPosOne = canvasCenter
  xPosTwo = canvasCenter
  xPosThree = canvasCenter

  // circle heights
  heightOne = canvasHeight/8
  heightTwo = heightOne + (heightOne * 1.8)
  heightThree = heightTwo * 2

  // circle diameters
  circleSizeOne = canvasWidth/5.5
  circleSizeTwo = circleSizeOne * 2
  circleSizeThree = circleSizeOne * 3

  // colors
  lightGoldBorder = "#DDDF74"
  darkGoldBorder = "#D8DA90"
  lightBackgroundColor = "#8bb7eb"  //light blue
  darkBackgroundColor = "#252525"   //light black

  // borders
  rightBorder = canvasWidth - 76
  leftBorder = 86
  bottomBorder = 538

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background(lightBackgroundColor)
  strokeWeight(5)
  //noStroke()  // don't draw shape outlines pls  
}

function draw() {

  //move top circle right until border
  if(xPosThree < rightBorder){
    xPosThree += 1
  }

  //move middle circle left until border
  if(xPosTwo > leftBorder){
    xPosTwo -= 1
  }

  //move bottom circle down until border only after top circle reaches border
  if(xPosThree >= rightBorder && heightThree < bottomBorder){
    heightThree += 1
  }

  // after last circle reaches the bottom border, stop draw() loop
  if(heightThree > bottomBorder){
    noLoop()  
  }

  stroke(darkGoldBorder) //dark yellow border

  // Draw Circle 1 with new Y position - Blue Teal
  fill("#B5F0EE") //Circle Color - Light Blue
  circle(xPosOne, heightThree, circleSizeThree)

  stroke(lightGoldBorder) //light yellow border

  // Draw Circle 2 with new X position - Violet
  fill("#BE72E1"); //Circle Color - Light Blue
  circle(xPosTwo, heightTwo, circleSizeTwo)

  stroke(darkGoldBorder); //dark yellow border
  
  // Draw Circle 3 with new X position - Pink
  fill("#F87EC2"); //Circle Color - Pink
  circle(xPosThree, heightOne, circleSizeOne)

  console.log('xPosOne: ' + xPosOne)
  console.log('xPosTwo: ' + xPosTwo)
  console.log('xPosThree: ' + xPosThree)
}

//radial gradient class
function drawGradient(x, y) {
  let radius = dim / 2
  //let h = random(0, 360)
  for (let r = radius; r > 0; --r) {
    fill(90, 90, 90)
    ellipse(x, y, r, r)
    h = (h + 1) % 360
  }
}
