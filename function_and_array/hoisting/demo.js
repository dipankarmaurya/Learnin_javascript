

//****variable hoisting****
//1
console.log(a);//print undefind beacuse due to hoisting variable declaration move to the top ;
var a = 10;
//2
function hoistingDemo() {
    console.log(a);
    var a = 10;
}
hoistingDemo();

//NOTE--->>> In javascript all the varible declaration move to the top of function;

// ****function hoistiong**** 
// we have function hoisting too like varible hoisting
demo();
function demo() {
    var a = 10;
    console.log(a);  
}
