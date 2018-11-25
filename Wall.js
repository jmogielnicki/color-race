class Wall {
    constructor(leftColor, rightColor, height, id) {
        this.leftColor = leftColor.map((colorValue) => {
            return colorValue - 5;
        });
        this.leftColorOriginal = leftColor;
        this.rightColor = rightColor.map((colorValue) => {
            return colorValue - 5;
        });
        this.rightColorOriginal = rightColor;
        this.height = height;
        this.y = height;
        this.numSegments = 5;
        this.segments = [];
        this.active = true;
        this.queueTimer = 40;
        for (let index = 0; index < this.numSegments; index++) {
            let segmentColor;
            let segmentColorOriginal;
            if (random() > 0.5) {
                segmentColor = this.leftColor;
                segmentColorOriginal = this.leftColorOriginal;
            } else {
                segmentColor = this.rightColor;
                segmentColorOriginal = this.rightColorOriginal; 
            }
            const segment = {
                color: segmentColor,
                colorOriginal: segmentColorOriginal,
                x: width/this.numSegments * index,
                width: width/this.numSegments,
            }
            this.segments.push(segment);
        }
        this.hasCollided = false;
    }

    update(speed) {
        this.y = this.y + speed;
        this.y > height ? this.active = false : null;
        this.queueTimer -= 1;
    }

    display() {
        this.segments.map((segment) => {
            fill(segment.color);
            rect(segment.x, this.y, segment.width, this.height)
        });
    }

    detectCollisions(currentColor, ballX, ballY, ballWidth, ballHeight) {
        this.segments.map((segment) => {
            if (currentColor != segment.colorOriginal &&
                segment.x < ballX + ballWidth &&
                segment.x + segment.width > ballX &&
                this.y < ballY + ballHeight &&
                this.y + this.height > ballY) {
                    this.hasCollided = true;
                }
        });

    }
}
