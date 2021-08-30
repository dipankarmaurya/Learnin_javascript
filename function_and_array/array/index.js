//array in js
// create an array
var arr = [1, 2, 3, 4];
console.log(arr[2]);//accesing method 

//another method to create array
var newArr = new Array(4, 2, 6, 9);
console.log(newArr[2]);//accesing method 

var newArr2 = new Array(4);// it take it as array size

//accessing undefined index
console.log(arr[6]);//print undefined

//assigning value to undefined array
arr[6] = 100;
console.log(arr);//[ 1, 2, 3, 4, <2 empty items>, 100 ] size of array is 7
arr[5] = "cow";//we can assign different  type of value in same array
arr[-1] = 'dipankar'; //take it as key value pair---->> arr[-1]="dipankar"
console.log(arr);
console.log(arr.length);





