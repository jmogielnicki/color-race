class Obstacle {
    constructor(color) {
        this.color = color;
        this.displayColor = this.color.map((colorValue) => {
            return colorValue - 5;
        });
    }
}