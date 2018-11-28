class Wall {
    constructor(firstColor, secondColor, wallHeight, numWallSegments, onCollision) {
        this.firstColor = firstColor
        this.secondColor = secondColor
        this.wallHeight = wallHeight;
        this.width = wallHeight;
        this.numWallSegments = numWallSegments;
        this.wallSegments = [];
        for (let index = 0; index < this.numWallSegments + 2; index++) {
            const segmentColor = random() > 0.5 ? this.firstColor : this.secondColor;
            const xPos = width/this.numWallSegments * index;
            const yPos = height/this.numWallSegments * index;
            const segmentWidth = width/this.numWallSegments;
            const segmentHeight = height/this.numWallSegments;
            // this.wallSegments.push(new WallSegment(segmentColor, xPos, this.y, segmentWidth, this.height, onCollision));
            this.wallSegments.push(new WallSegment(segmentColor, xPos, yPos, this.width, segmentHeight, onCollision));
        }
    }
}
