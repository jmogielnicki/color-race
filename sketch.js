const screenWidth = 700;
const screenHeight = 380;
let touchIsDown = false;
let touchCoolDown = 10;
let game;
const colorPalettes = {
  muted: [
    [236,208,120],
    [83,119,122],
    [84,36,55],
    [201,112,100],
    [100,176,126],
  ],
  candy: [
    [255, 224, 102],
    [242, 95, 92],
    [112, 193, 179],
    [80, 81, 79],
    [36, 123, 160],
  ],
  pastel: [
    [197,224,220],
    [236,229,206],
    [224,142,121],
    [179,180,146],
    [120,89,100],
  ],
}

const colors = colorPalettes.muted.splice(0,3);

function createNewGame() {
  game = new Game(colors, gameEndHandler)
}

function gameEndHandler() {
  console.log('starting new game')
  game.pause()
  window.setTimeout(createNewGame, 1000);
}

function setup() {
  createCanvas(windowWidth > 800 ? 800 : windowWidth, windowHeight > 500 ? 500 : windowHeight);
  game = new Game(colors, gameEndHandler);
}

function draw() {
  game.animate()
  touchCoolDown = touchIsDown ? touchCoolDown - 1 : touchCoolDown;
}