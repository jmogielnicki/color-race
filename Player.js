class Player {
    constructor(diameter, x, y) {
        this.diameter = diameter;
        this.radius = this.diameter/2;
        this.x = x;
        this.y = y;
        this.easing = 0.1;
        this.hasDied = false;
    }

    update() {
        const targetX = mouseX;
        const dx = targetX - this.x;
        this.x += dx * this.easing;
    }

    display() {
        fill(255);
        noStroke();
        this.diameter = this.hasDied ? this.diameter * 1.05 : this.diameter;
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}