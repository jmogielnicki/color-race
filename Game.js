
class Game {
    constructor(colors, gameEndHandler) {
        this.colors = colors;
        this.walls = [];
        this.coins = [];
        this.speed = 2;
        this.gameEndHandler = gameEndHandler;
        this.controlsWidth = width/6;
        this.player = new Player(30, width/4, height/2, this.gameEndHandler, this.controlsWidth);
        this.controls = new Controls(this.colors, this.setColor.bind(this), this.controlsWidth);
        this.numSpaces = 40;
        this.nextWallTimer = 100;
        this.spaceOptions = [10, 15, 20, 25];
        this.currentColor = this.colors[0];
        this.gameScore = 0;
        this.isPaused = false;
    }

    getNextIndex(index, array) {
        return index + 1 >= array.length ? 0 : index + 1;
    }

    getRandomColor(colorsToExclude) {
        const colors = colorsToExclude ? this.colors.filter((color) => {return colorsToExclude != color}) : this.colors;
        return colors[Math.floor(Math.random() * colors.length)]
    }

    setColor(color) {
        console.log('setColor: ' , color)
        this.currentColor = color;
        // console.log(this.currentColor)
    }

    killPlayer() {
        debugger;
        this.player.hasDied = true
    }

    pickUpCoin() {

    }
    
    createNewWall() {
        const randomColorLeft = this.getRandomColor()
        const randomColorRight = this.getRandomColor(randomColorLeft)
        this.walls.push(new Wall(randomColorLeft, randomColorRight, 10, 5, this.killPlayer));
    }

    unPause() {
        this.isPaused = false;
    }

    pause() {
        this.isPaused = true;
    }

    animate() {
        if (this.isPaused) {
            return
        }
        const backgroundColor = this.currentColor;
        background(backgroundColor);
        
        // generate walls
        if (this.nextWallTimer < 1) {
            this.createNewWall()

            this.numSpaces = random(this.spaceOptions)
            this.nextWallTimer = this.numSpaces * 20;
        }
        
        
        this.walls.map((wall, index) => {
            wall.wallSegments.map((segment) => {
                if (segment.active) {
                    segment.update(this.speed);
                    segment.display();
                    segment.detectCollisions(backgroundColor, this.player)
                }
            })
        })
        
        this.coins.map((coin) => {
            coin.update()
            coin.display()
            coin.detectCollisions(backgroundColor, this.player)
        })

        this.controls.display()
        
        // draw the player
        this.player.update()
        this.player.display()

        
        this.nextWallTimer -= this.speed;
        this.speed += 0.001;
        this.gameScore += 1;
        
        // display game score
        fill(0);
        textSize(24);
        textAlign(RIGHT, CENTER);
        text(this.gameScore, width - 30, 30);
    }
}