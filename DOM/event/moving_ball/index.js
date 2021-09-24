let container = document.getElementById('container')
let conHt = container.offsetHeight;
let conWid = container.offsetWidth;
let lft = container.offsetLeft;
let tp = container.offsetTop;

console.log(lft);
let ball = document.getElementById('ball');
let ballwid = ball.offsetWidth;
let ballht = ball.offsetHeight;
let l = 0;
let t = 0;
let flagt = 0;
let flagr = 0;
count = 0;
function move() {
    if (l > conWid - ballwid || t > conHt) {
        l = 0;
        t = 0;
        count++;
    }
    if (count === 5) {
        clearInterval(run);
    }
    l += 5; t += 5;
      
    ball.style.marginLeft = l + "px";
    ball.style.marginTop = t + "px";
    
}

let run= setInterval(move, 10);
// ball.addEventListener('click',move) 