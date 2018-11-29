class Obstacle {
    constructor(color, shape) {
        // start above visible screen
        this.y = -50;
        this.x = width + 50;
        this.color = color;
        this.shape = shape;
        this.displayColor = this.color.map((colorValue) => {
            return colorValue - 5;
        });
    }

    detectCollisions(currentColor, player) {
        if (this.shape == 'rect') {
            // we pretend player (ball) is a square
            const playerLeftEdge = player.x - player.radius;
            const playerTopEdge = player.y - player.radius;
            if (currentColor != this.color &&
                this.x < playerLeftEdge + player.diameter &&
                this.x + this.width > playerLeftEdge &&
                this.y < playerTopEdge + player.diameter &&
                this.y + this.height > playerTopEdge) {
                    player.hasDied = true;
                }
        } else if (this.shape == 'circle') {
            if (!this.isCollected && dist(player.x, player.y, this.x, this.y) < this.height + player.radius) {
                this.isCollected = true;
                player.score += 1;
            }
        }
    }
}