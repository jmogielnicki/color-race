class Wall {
    constructor(firstColor, secondColor, height, numwallSegments) {
        this.firstColor = firstColor
        this.secondColor = secondColor
        this.height = height;
        this.y = height * -1;
        this.numwallSegments = numwallSegments;
        this.wallSegments = [];
        for (let index = 0; index < this.numwallSegments + 2; index++) {
            const segmentColor = random() > 0.5 ? this.firstColor : this.secondColor;
            const xPos = width/this.numwallSegments * index;
            const segmentWidth = width/this.numwallSegments;
            this.wallSegments.push(new WallSegment(segmentColor, xPos, this.y, segmentWidth, this.height));
        }
    }
}
