var div = document.getElementById('div');

var val = div.getAttribute('data-value')
console.log(val);
let count = 0;
let w = window.screen.width;
let h = window.screen.height;
let l = 0;
let m = 0;
function countClickAndMove() {
    count++;
    console.log(count);
    if (l >= w||m>=h) {
        div.style.marginLeft = l + "px";
        div.style.marginTop = m + "px";
        l -= 10; ;
        m -= 10;
        clearInterval(move);
    
    }
    else {
        div.style.marginLeft = l + 'px';
        div.style.marginTop = m + "px";
    }
    l += 10;
    m += 10;
}
let move;
function moveDiv() {
    move = setInterval(countClickAndMove, 10);
}
div.addEventListener('click', moveDiv);


