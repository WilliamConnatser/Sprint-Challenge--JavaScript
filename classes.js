// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(params) {
        this.length = params.length;
        this.width = params.width;
        this.height = params.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Box Volume: ${cuboidClass.volume()}`); // 100
console.log(`Box Surface Area: ${cuboidClass.surfaceArea()}`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(params) {
        super(params);
    }

    volume() {
        return this.length ** 3;
    }

    surfaceArea() {
        return this.length ** 2 * 6;
    }
}

const cubeMaker = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

// Test your volume and surfaceArea methods by un-commenting the logs below:
console.log(`Cube Volume: ${cubeMaker.volume()}`); // 64
console.log(`Cube Surface Area: ${cubeMaker.surfaceArea()}`); // 96