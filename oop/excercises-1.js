// Create a class Shape
// sides

// Create another class that extends Shape Class
// Square
// Create a square object

// add property length and width
// add a method to Square to calculate the area

class Shape {
  constructor(sides) {
    this.sides = sides;
  }
}

class Rectangle extends Shape {
  constructor(sides, length, width) {
    super(sides);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
}

class Square extends Shape {
  constructor(sides, length) {
    super(sides);
    this.length = length;
  }
  getArea() {
    return this.sides * this.length;
  }
}

const block = new Rectangle(4, 14, 6);
const box = new Square(4, 14);

console.log(block.getArea());
console.log(box.getArea());
