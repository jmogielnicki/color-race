class Player {
    constructor(diameter, x, y, gameEndHandler) {
        this.diameter = diameter;
        this.radius = this.diameter/2;
        this.x = x;
        this.y = y;
        this.easing = 0.1;
        this.hasDied = false;
        this.gameEndHandler = gameEndHandler;
        this.score = 0;
    }

    update() {
        const targetX = mouseX;
        const dx = targetX - this.x;
        this.x += dx * this.easing;

        this.diameter = this.hasDied ? this.diameter * 1.05 : this.diameter;
        this.diameter > 10000 && this.gameEndHandler();
    }

    display() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}