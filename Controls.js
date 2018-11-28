class Controls {
    constructor() {
        this.height = 120;
    }

    display() {
        fill(0);
        rect(0, height - this.height, width, this.height)
        fill(30);
        const controllerDiameter = 50;
        const controllerPadding = 20;
        ellipse(width - controllerDiameter - controllerPadding, height - this.height + controllerDiameter, controllerDiameter, controllerDiameter)
    }

    update() {
    }
}