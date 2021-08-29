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