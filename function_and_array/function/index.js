//syntax

// function function_name(parameter){
    //statements
//}
//ex->
function sum(a, b) {
    //here we don't need to specify variable type like other language(c,c++,java) it accordingly take the value
    console.log(a + b);
}
sum(2, 3);

//---->>>>>passing fewer arguments in function
sum(2);//here variable a take the value 2 and for b their is no value passed so it is undefined

//--->>>>passing more arguments in function
sum(2, 3, 5);//function simply ignore the extra value a=2,b=3;


//scope 
var name = "Dipankar"//---> variable which created globaly is global variable 

function scopeDemo() {
    // i is accesible within function scopeDemo
    var i = 10;
    console.log(i);
}
scopeDemo();
//console.log(i)// i is accesible here cz it's not creted in global execution context

//note--->>>>when interpreter found a variable it's first  check within the function(or within that execution context)

//execution context--->we can say envoirment
//global execution have variable envoirment and this
//loca execution have variable envoirment ,this and reference to outer envoirment

//execution stack--->store all execution context
function c() {
    console.log("inside c");
}
function b() {
    c();
    console.log("inside b");
}
function a() {
    b();
    console.log("inside a");
}
a();
console.log("gloabal context");

//function within function
var name = "global";
function outer() {
    var name = "outer";
    function inner() {
        var name = "inner";//  if this name is availabe here it looks for it in outer execution context and then global execution context
        console.log(name);
    }
    inner();
    console.log(name);
}
outer();
console.log(name);


//function expression
// function as a value assigning to a variable 
var fact = function factorial(n) {// named function factorial can be used within the function factorial 
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}
console.log(fact(5));
var fact2 = function (n) {// annonyms function expression
    var ans = 1;
    for (var i = 1; i <= n; i++){
        ans *= i;
    }
    return ans
}
console.log(fact2(5));

//function declaration vs function expression
//hoisting in function expression is work like variable hoisting 
// means its first declare on top then define value;
//ex--->

//dipankar();//says dipankar is not a function
// console.log(dipankar);// print undefined
// var dipankar =function dipu() {
//     console.log(`i am learning javascript `);
// }

// how upper function actully look like for interpreater
//---->>>>|
//        |
var dipankar;
//dipankar();
// console.log(dipankar);
dipankar = function dipu(msg) {
    console.log(msg);
}
//passing function as an argument
function print(dipankar) {
    dipankar("learning_function");

}
print(dipankar);




