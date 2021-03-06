class Controls {
    constructor(colors, setColor, width) {
        this.height = 120;
        this.width = width;
        this.colors = colors;
        this.numButtons = this.colors.length;
        this.colorButtons = [];
        this.setColor = setColor;
        this.colors.map((color, index) => {
            const xPos = 0;
            const yPos = height/this.numButtons * index;
            const segmentWidth = width/this.numButtons;
            const segmentHeight = height/this.numButtons;
            this.colorButtons.push(new ColorButton(color, xPos, yPos, this.width, segmentHeight, this.setColor));
        })
    }

    display() {
        fill(0);
        stroke(0)
        strokeWeight(2);
        rect(0, 0, this.width, height)
        this.colorButtons.map((colorButton) => {
            colorButton.display();
            if (mouseIsPressed && colorButton.isTouched()) {
                this.setColor(colorButton.color);
            }
        })
    }
}