class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `Color: ${this._color}`;
    }
}

// let shape = new Shape("blue");
// console.log(shape.toString())
// console.log("setting color to red");
// shape.setColor("red");
// console.log(shape.toString())

class Circle extends Shape {

    constructor(color, radius) {
        super(color)
        this._radius = radius;
    }
    toString() {
        return `Color: ${this._color}, Radius: ${this._radius}`;
    }
    getArea() {
        return `Area: ${3.14*this._radius}`;
    }
    getPerimeter() {
        return `Perimeter: ${2*3.14*this._radius}`;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
}

// let circle = new Circle("red", 2);
// console.log(circle.toString())
// circle.setColor("blue");
// circle.setRadius(4);
// console.log(circle.toString())
// console.log(circle.getPerimeter())

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this._height = height;
    }
    get Area      () {return `Area: ${2*Math.PI*Math.sqrt(this._radius)+(this._height*(2*Math.PI*this._radius))}`}
    get Perimeter () {return undefined;}
    get Volume    () {return `Volume: ${Math.PI*Math.sqrt(this._radius)*this._height}`}
    toString(){
        return `
        Color: ${this._color}
        Radius: ${this._radius}
        Height: ${this._height}
        ${this.Area}
        ${this.Volume}
        Perimeter: ${this.Perimeter}`;
    }
    getHeight(){
        return this._height;
    }
    setHeight(height){
        this._height = height;
    }
}

let cyl = new Cylinder("red",2,6)
console.log(cyl.toString())
cyl.setColor("yellow")
cyl.setHeight(20)
cyl.setRadius(3)

console.log(cyl.toString())

