//accessing element from html file
//1 by id
let intro = document.getElementById("intro");
intro.innerText = "Hello World !!!!";
console.log(intro.innerText);
//change the color of the text 
var text = document.getElementById('text');
console.log(text.innerText);
function changeColor(newColor) {
    text.style.color = newColor;
}
//2 by className--->return an array
// get all the element that have class 'bio'
let bio = document.getElementsByClassName("bio");// return array
for (let learn of bio) {
    console.log(learn.innerText);
    learn.innerText = "really ??";
    console.log(learn.innerText);       
}
// get all the element that have boththe 'bio' and 'about' class 
var all = document.getElementsByClassName("bio about");
console.log(all);
for (let ele of all) {
    console.log("xyz",ele.innerText);       
}
// get all by name -->return live NodeList coleection

var names = document.getElementsByName('dipu');
console.log(names);


