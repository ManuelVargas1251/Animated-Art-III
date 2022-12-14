let canvasWidth = 444
  canvasHeight = 666
  canvasCenter = canvasWidth/2

  // circle positions
  xPosOne = canvasCenter
  xPosTwo = canvasCenter
  xPosThree = canvasCenter
  xPosFour = canvasCenter

  // circle heights
  heightOne = canvasHeight/8
  heightTwo = heightOne + (heightOne * 1.8)
  heightThree = heightTwo * 2
  heightFour = canvasHeight/2

  // circle diameters
  circleSizeOne = canvasWidth/5.5
  circleSizeTwo = circleSizeOne * 2
  circleSizeThree = circleSizeOne * 3
  circleSizeFour = 0

  // colors
  lightGoldBorder = "#DDDF74"
  darkGoldBorder = "#D8DA90"
  lightBackgroundColor = "#8bb7eb"  //light blue
  darkBackgroundColor = "#252525"   //light black

  // borders
  rightBorder = canvasWidth - 76
  leftBorder = 86
  bottomBorder = 538
  radialBorder = 808

function setup() {
  console.info('windowWidth: ' + windowWidth)
  createCanvas(canvasWidth, canvasHeight)
  background(lightBackgroundColor)
  strokeWeight(5)
}

function draw() {
  updateValues()
  updateCanvas()
  updateLogs()
}

function updateValues(){
    //move top circle right until border
    if(xPosOne < rightBorder){
      xPosOne += 1
      console.log('xPosOne: ' + xPosOne)
    }
  
    //move middle circle left until border
    if(xPosTwo > leftBorder){
      xPosTwo -= 1
      console.log('xPosTwo: ' + xPosTwo)
    }
  
    //move bottom circle down until border only after top circle reaches border
    if(xPosOne >= rightBorder && heightThree < bottomBorder){
      heightThree += 1
      console.log('heightThree: ' + heightThree)
    }

    if(heightThree > bottomBorder && circleSizeFour <= radialBorder){
      circleSizeFour += 1
      console.log('circleSizeFour: ' + circleSizeFour)
    }
  
    // after last circle reaches the bottom border, stop draw() loop
    if(heightThree > bottomBorder && circleSizeFour > radialBorder){
      noLoop()
    }
}

function updateCanvas(){

  stroke(darkGoldBorder) //dark yellow border

  // Draw Circle 1 with new Y position - Teal
  fill("#B5F0EE")
  circle(xPosThree, heightThree, circleSizeThree)

  stroke(lightGoldBorder) //light yellow border

  // Draw Circle 2 with new X position - Violet
  fill("#BE72E1")
  circle(xPosTwo, heightTwo, circleSizeTwo)

  stroke(darkGoldBorder) //dark yellow border

  // Draw Circle 3 with new X position - Pink
  fill("#F87EC2") //Circle Color - Pink
  circle(xPosOne, heightOne, circleSizeOne)

  // Draw Circle 4
  noStroke()
  if(circleSizeFour > radialBorder){
    fill("#FFF")
  }else{
    fill(darkBackgroundColor)
  }
  circle(xPosFour, heightFour, circleSizeFour)
}

function updateLogs(){
  console.log('frameCount: ' + frameCount)
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
