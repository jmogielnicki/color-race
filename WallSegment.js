class WallSegment extends Obstacle {
    constructor(color, x, y, width, height, onCollision) {
        super(color, 'rect');
        // this.x = x;
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

    update(speed) {
        // this.y = this.y + speed;
        // this.y > height && (this.active = false);
        // console.log(this.x)
        // debugger
        this.x -= speed;
        this.x < 0 && (this.active = false);

    }
}