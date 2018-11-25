
const colorOptionsAll = {
  primary: [
    [200, 50, 40],
    [40, 100, 200],
    [247,182,10],
  ],
  muted: [
    [236,208,120],
    [83,119,122],
    [84,36,55],
  ],
  pastel: [
    [197,224,220],
    [236,229,206],
    [224,142,121],
  ],
  wine: [
    [140,35,24],
    [242,196,90],
    [94,140,106],
  ]
}


const colorOptions = colorOptionsAll.muted;

const screenWidth = 380;
const screenHeight = 600;
let speed = 3;
let currentColorIndex = 0;
let leftColorIndex = 1;
let rightColorIndex = 2;
const playerHeight = 120;
const ballRadius = 15;
const switchOffset = 10;
const switchWidth = 10;
const switchHeight = 100;
const leftSwitchPosition = switchOffset;
const rightSwitchPotition = screenWidth - switchOffset;
const wallHeight = 10;
let isInLeftZone = false;
let isInRightZone = false;
let canSwitch = true;
let numSpaces = 40;
let nextWallTimer = 100;
let gameHasEnded = false;
let touchCoolDown = 10;
let touchIsDown = false;

const walls = [];

function incrementColors() {
  currentColorIndex = currentColorIndex + 1 >= colorOptions.length ? 0 : currentColorIndex + 1;
  leftColorIndex = leftColorIndex + 1 >= colorOptions.length ? 0 : leftColorIndex + 1;
  rightColorIndex = rightColorIndex + 1 >= colorOptions.length ? 0 : rightColorIndex + 1;
}

function setup() {
  createCanvas(screenWidth, screenHeight);
}

function draw() {
  backgroundColor = colorOptions[currentColorIndex];
  leftColor = colorOptions[leftColorIndex];
  rightColor = colorOptions[rightColorIndex];
  background(backgroundColor);
  if (nextWallTimer < 1) {
    const colorKeys = Object.keys(colorOptions);
    const randomColorLeftIndex = [Math.floor(Math.random() * colorKeys.length)];
    const randomColorLeft = colorKeys.splice(randomColorLeftIndex, 1)
    const randomColorRight = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    walls.push(new Wall(colorOptions[randomColorLeft], colorOptions[randomColorRight], wallHeight));
    numSpaces = Math.floor(random() * 10) + 40;
    nextWallTimer = numSpaces * wallHeight;
  }

  walls.map((wall) => {
    
    gameHasEnded ? null : wall.update(speed);
    wall.display();
    // pass in ball x, y, width, height as though it was rect()
    wall.detectCollisions(backgroundColor, mouseX - ballRadius, height - playerHeight - ballRadius, ballRadius * 2, ballRadius * 2)
    wall.hasCollided ? gameHasEnded = true : null;
  })

  // draw the circle
  fill(255);
  noStroke();
  ellipse(mouseX, height - playerHeight, ballRadius*2, ballRadius*2);

  //draw the side switches and detect if hit
  // fill(leftColor);
  // rect(0, height, switchWidth, 0 - switchHeight);
  // fill(rightColor);
  // rect(width - switchWidth, height, switchWidth, 0 - switchHeight);
  // isInLeftZone = mouseX != 0 && mouseX < leftSwitchPosition + ballRadius;
  // isInRightZone = mouseX != 0 && mouseX > rightSwitchPotition - ballRadius;
  // if (canSwitch && isInLeftZone) {
  //   const oldBackgroundColor = backgroundColor
  //   backgroundColor = leftColor;
  //   leftColor = oldBackgroundColor;
  //   canSwitch = false;
  // } else if (canSwitch && isInRightZone) {
  //   const oldBackgroundColor = backgroundColor
  //   backgroundColor = rightColor;
  //   rightColor = oldBackgroundColor;
  //   canSwitch = false;
  // }
  // if (!isInLeftZone && !isInRightZone) {
  //   canSwitch = true;
  // }

  fill(0);
  rect(0, height - 60, width, 60)


  nextWallTimer -= speed;
  random() > 0.999 ? speed += 0.5 : null;

  touchCoolDown = touchIsDown ? touchCoolDown - 1 : touchCoolDown;
  console.log(touchIsDown)
}


function mousePressed() {
  touchIsDown = true;
}

function mouseReleased() {
  if (touchCoolDown > 0) {
    incrementColors();
  }
  touchIsDown = false;
  touchCoolDown = 10;
}