const screenWidth = 700;
const screenHeight = 380;
let touchIsDown = false;
let touchCoolDown = 10;
let game;
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


function gameEndHandler() {
  console.log('starting new game')
  game = new Game(colorOptions, gameEndHandler)
}

function setup() {
  createCanvas(windowWidth > 800 ? 800 : windowWidth, windowHeight > 500 ? 500 : windowHeight);
  game = new Game(colorOptions, gameEndHandler);
}

function draw() {
  game.animate()
  touchCoolDown = touchIsDown ? touchCoolDown - 1 : touchCoolDown;
}

// function mousePressed() {
//   touchIsDown = true;
// }

// function mouseReleased() {
//   if (touchCoolDown > 0) {
//     game.incrementColors();
//   }
//   touchIsDown = false;
//   touchCoolDown = 10;
// }