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
