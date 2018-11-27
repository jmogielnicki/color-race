class WallSegment extends Obstacle {
    constructor(color, x, y, width, height) {
        super(color);
        this.shape = 'rect';
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.active = true;
        this.hasCollided = false;
    }

    display() {
        fill(this.displayColor);
        rect(this.x, this.y, this.width, this.height)
    }

    detectCollisions(currentColor, player) {
        // we pretend player (ball) is a square
        const playerLeftEdge = player.x - player.radius;
        const playerTopEdge = player.y - player.radius;
        if (currentColor != this.color &&
            this.x < playerLeftEdge + player.diameter &&
            this.x + this.width > playerLeftEdge &&
            this.y < playerTopEdge + player.diameter &&
            this.y + this.height > playerTopEdge) {
                this.hasCollided = true;
            }
    }

    update(speed) {
        this.y = this.y + speed;
        this.y > height && (this.active = false);
    }
}