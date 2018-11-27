class Coin extends Obstacle {
    constructor(x, color, diameter, onCollision) {
        super(color, 'circle')
        this.x = x;
        this.width = diameter;
        this.height = diameter;
        this.radius = diameter / 2;
        this.cycleDuration = 60;
        this.binaryCounter = 1;
        this.shape = 'circle';
        this.isCollected = false;
    }

    createSpin() {
        this.width -= this.binaryCounter * (60/this.cycleDuration)
        if (this.width <= 1 || this.width >= this.height) {
            this.binaryCounter *= -1;
        }
    }

    update() {
        this.y += 3;
        this.createSpin()
    }

    display() {
        if (!this.isCollected) {
            fill(this.displayColor);
            ellipse(this.x, this.y, this.width, this.height);
        }
    }

}