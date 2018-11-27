
class Game {
    constructor(colors) {
        this.colors = colors;
        this.walls = [];
        this.speed = 2;
        this.player = new Player(30, 200, 500);
        this.numSpaces = 40;
        this.nextWallTimer = 100;
        this.spaceOptions = [10, 15, 20, 25];
        this.currentColorIndex = 0;
        this.nextColorIndex = 1;
        this.afterNextIndex = 2;
        this.gameIsOver = false;
    }

    getNextIndex(index, array) {
        return index + 1 >= array.length ? 0 : index + 1;
    }
    incrementColors() {
        this.currentColorIndex = this.getNextIndex(this.currentColorIndex, this.colors);
        this.nextColorIndex = this.getNextIndex(this.nextColorIndex, this.colors);
        this.afterNextIndex = this.getNextIndex(this.afterNextIndex, this.colors);
      }
      
    animate() {
        const backgroundColor = this.colors[this.currentColorIndex];
        const nextColor = this.colors[this.nextColorIndex];
        const afterNext = this.colors[this.afterNextIndex];
        background(backgroundColor);
        
        // generate walls
        if (this.nextWallTimer < 1) {
            const colorKeys = Object.keys(this.colors);
            const randomColorLeftIndex = [Math.floor(Math.random() * this.colors.length)];
            const randomColorLeft = colorKeys.splice(randomColorLeftIndex, 1);
            const randomColorRight = colorKeys[Math.floor(Math.random() * colorKeys.length)];
            this.walls.push(new Wall(this.colors[randomColorLeft], this.colors[randomColorRight], 10, 5));
            this.numSpaces = random(this.spaceOptions)
            this.nextWallTimer = this.numSpaces * 20;
        }
        
        // next color indicator
        fill(nextColor);
        ellipse(width/2, height, width * 1.2, 30)
        fill(afterNext);
        ellipse(width/2, height, width * 1.2, 10)

        
        
        this.walls.map((wall, index) => {
            wall.wallSegments.map((segment) => {
            if (segment.active) {
                segment.update(this.speed);
                segment.display();
                // pass in ball x, y, width, height as though it was rect()
                segment.detectCollisions(backgroundColor, this.player)
                segment.hasCollided && (this.player.hasDied = true);
            }
            })
        })
        
        // draw the player
        this.player.update()
        this.player.display()
        
        this.nextWallTimer -= this.speed;
        this.speed += 0.001;
        
    }
}