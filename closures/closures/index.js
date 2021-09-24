// var a = 10;
// function outer() {
//     var b = 20;
//     console.log(a, b);
//     function inner() {
//         var c = 40;
//         console.log(b, c);
//     }
//     return inner;
// }
// var inner = outer();
// inner();//->>when this line is executing the outer function is destroyed from execution stack but the variable b is available in memory for inner function . this happens beacuse of  closures properity

//closure-->> 

//'use strict';

// var obj = { // does not create a new scope
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
//     console.log(this.i, this);
//   }
// }

// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// var user = {
//     "fisrtName": "jon",
//     "lastName": "don",
//     "getFullName": function(){
//          return function(){
//             console.log(`the full name of the user is  ${this.fisrtName},${this.lastName}`);
//         }
//     }
// }
// user.getFullName()();


// var obj = {
//     count: 10,
//     do: function () {
//         return  function(){ console.log(this.count,this ) };
//     }
// }
// obj.do()();

// function demo() {
//     var name ="dipu"
//     console.log(this.name, this);
// }
// demo();

var x={ };
function A() {
    return x;
}
function B() {
    return x;
}
console.log(new A() === new B());