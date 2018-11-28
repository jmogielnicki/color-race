class ColorButton {
    constructor(color, x, y, diameter, setColor) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.radius = this.diameter/2
        this.setColor = setColor;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.diameter, this.diameter)
    }

    detectTouch() {
        if (mouseIsPressed) {
            if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
                // console.log(dist(mouseX, mouseY, this.x, this.y))
                this.setColor(this.color);
            }
        } 
    }
}