
//1, timing events
//setTimeout(function,time(milliseconds));
//done task of the function once after time milliseconds


function demo() {
    console.log("hello");
}
setTimeout(demo, 1000);//print hello after 1 second 
setTimeout(demo, 3000);// print demo after 3 seconds

//2, setInterval(function,time(milliseconds));
//done task of the function repetadely after time milliseconds

//setInterval(demo, 100);// print hello after every 100 milliseconds

//stop setInterval()---->clearInterval();
let num = 10;
function printRecursive() {
   
    console.log(num);
    num--;
    if (num == 0) {
        clearInterval(id);
    }
}

let id = setInterval(printRecursive,100);// print 10 9 8 7 6 5 4 3 2 1