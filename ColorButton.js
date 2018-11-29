class ColorButton {
    constructor(color, x, y, width, height, setColor) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.setColor = setColor;
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height)
    }

    isTouched() {
        return this.x < mouseX &&
            this.x + this.width > mouseX &&
            this.y < mouseY &&
            this.y + this.height > mouseY
    }
}