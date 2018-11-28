class Player {
    constructor(diameter, x, y, gameEndHandler) {
        this.diameter = diameter;
        this.radius = this.diameter/2;
        this.location = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0.14);
        // this.x = x;
        // this.y = y;
        this.easing = 0.1;
        this.hasDied = false;
        this.gameEndHandler = gameEndHandler;
        this.score = 0;
    }

    update() {
        // const targetX = mouseX;
        // const dx = targetX - this.x;
        // this.x += dx * this.easing;
        // const targetY = mouseY;
        // const dy = targetY - this.y;
        // this.y += dy * this.easing;
        mouseIsPressed && (this.velocity.y -= 0.5);
        
        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.diameter = this.hasDied ? this.diameter * 1.05 : this.diameter;
        this.diameter > 10000 && this.gameEndHandler();
    }

    display() {
        fill(255);
        noStroke();
        ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
    }
}