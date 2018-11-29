
class Game {
    constructor(colors, gameEndHandler) {
        this.colors = colors;
        this.walls = [];
        this.coins = [];
        this.speed = 2;
        this.gameEndHandler = gameEndHandler;
        this.player = new Player(30, width/4, height/2, this.gameEndHandler);
        this.controls = new Controls(this.colors, this.setColor.bind(this));
        this.numSpaces = 40;
        this.nextWallTimer = 100;
        this.spaceOptions = [10, 15, 20, 25];
        // this.currentColorIndex = 0;
        // this.nextColorIndex = 1;
        // this.afterNextColorIndex = 2;
        this.currentColor = this.colors[0];
        this.gameScore = 0;
    }

    getNextIndex(index, array) {
        return index + 1 >= array.length ? 0 : index + 1;
    }

    getRandomColor(colorsToExclude) {
        const colors = colorsToExclude ? this.colors.filter((color) => {return colorsToExclude != color}) : this.colors;
        return colors[Math.floor(Math.random() * colors.length)]
    }

    // incrementColors() {
    //     this.currentColorIndex = this.getNextIndex(this.currentColorIndex, this.colors);
    //     this.nextColorIndex = this.getNextIndex(this.nextColorIndex, this.colors);
    //     this.afterNextColorIndex = this.getNextIndex(this.afterNextColorIndex, this.colors);
    // }

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

    
      
    animate() {
        // const backgroundColor = this.colors[this.currentColorIndex];
        const backgroundColor = this.currentColor;
        // console.log(backgroundColor)
        // console.log(this.currentColor);

        // const nextColor = this.colors[this.nextColorIndex];
        // const afterNextColor = this.colors[this.afterNextColorIndex];
        background(backgroundColor);

        this.gameScore = this.gameScore < this.player.score * 10 ? this.gameScore += 1 : this.gameScore;
        textSize(24);
        text(this.gameScore, width - 30, 30);
        
        // generate walls
        if (this.nextWallTimer < 1) {
            this.createNewWall()

            this.numSpaces = random(this.spaceOptions)
            this.nextWallTimer = this.numSpaces * 20;
            // TODO - figure out if we should pass in method for pickupcoin and endGame to obstacles or not
            // this.coins.push(new Coin(random(width), this.getRandomColor(), 20, this.pickUpCoin()))
        }

        
        // next color indicator
        // fill(nextColor);
        // ellipse(width/2, height, width * 1.2, 30)
        // fill(afterNextColor);
        // ellipse(width/2, height, width * 1.2, 10)
        
        
        
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
        
        // draw the player
        this.player.update()
        this.player.display()

        this.controls.display()
        
        this.nextWallTimer -= this.speed;
        this.speed += 0.001;
        
    }
}