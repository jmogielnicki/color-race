class Player {
    constructor(diameter, x, y, gameEndHandler, controlsWidth) {
        this.diameter = diameter;
        this.controlsWidth = controlsWidth;
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
        mouseIsPressed && mouseX > this.controlsWidth && (this.velocity.y -= 0.5);
        
        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.diameter = this.hasDied ? this.diameter * 1.2 : this.diameter;
        this.diameter > 10000 && this.gameEndHandler();
        (this.location.y - this.radius < 0 || this.location.y + this.radius > height) && (this.hasDied = true);
    }

    display() {
        fill(255);
        noStroke();
        ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
    }
}