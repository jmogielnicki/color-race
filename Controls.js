class Controls {
    constructor(colors, setColor) {
        this.height = 120;
        this.width = width/6;
        this.colors = colors;
        this.colorButtons = [];
        this.setColor = setColor;
        this.colors.map((color, index) => {
            const buttonDiameter = this.width*.8;
            this.colorButtons.push(new ColorButton(color, this.width/2, height - (index + 1) * 100, buttonDiameter, this.setColor))
        })
    }

    display() {
        fill(0);
        rect(0, 0, this.width, height)
        this.colorButtons.map((colorButton) => {
            colorButton.display();
            colorButton.detectTouch();
        })
        // fill(30);
        // const controllerDiameter = 50;
        // const controllerPadding = 20;
        // ellipse(width - controllerDiameter - controllerPadding, height - this.height + controllerDiameter, controllerDiameter, controllerDiameter)
    }

    update() {
    }
}