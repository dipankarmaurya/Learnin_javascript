function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here

var square = new Shape("square", null, 5);
var triangle = new Shape("triangle", null, 3);
Shape.prototype.calcPerimeter = function () {
  let len = this.sideLength;
  console.log(2 * 3.14 * len);
};
triangle.calcPerimeter();
square.calcPerimeter();
