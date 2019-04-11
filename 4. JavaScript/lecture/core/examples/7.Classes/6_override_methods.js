class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  // переписываем и перекрываем Rectangle.prototype.getArea()
  getArea() {
    return this.length * this.length;
  }
}
const square = new Square(3);
console.log(square.getArea()); // 9
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
