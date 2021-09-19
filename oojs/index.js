// function Shape(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }

// // Write your code below here

// var square = new Shape("square", 4, 5);
// var triangle = new Shape("triangle", 3, 3);
// Shape.prototype.calcPerimeter = function () {
//   let len = this.sideLength;
//   console.log(2 * 3.14 * len);
// };
// triangle.calcPerimeter();
// square.calcPerimeter();
//'use strict';
// var obj = {
//   a: 25,
//   abc: function (){
//     return function () { this.a };
//   }
//  }
//  console.log(obj.abc()());


'use strict'
function abc() {
  console.log(this.name);
}
var obj={
  name: {
    first: "dipankar",
    last:"maurya"
  }
}
abc.call(obj);
// window.abc();