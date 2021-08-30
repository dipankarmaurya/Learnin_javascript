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
arr[-1] = 'dipankar'; //take it as key value pair---->> arr[-1]="dipankar"//always on the last of the arrays
console.log(arr);
console.log(arr.length);

// functions/method in for array
//push()---->>>> push element at the last of the array
arr.push("last");
console.log(arr);

//pop()-->delete element at the last index
arr.pop();
console.log(arr);

//shift()-->remove element at 0th index and return
var val = arr.shift();
console.log(arr, val);

//unshift(val)-->add val at 0th index
arr.unshift(1);
console.log(arr);

//indexOf(val) return the index of val // if value not found in array it return -1
var index = arr.indexOf(2);
console.log("2 at index", index);

//splice(pos,count); removing number of element(count) start from pos
arr.splice(2, 1);//used to remove one element(remove element at index 2)
console.log(arr);
var x=arr.splice(2, 3);//remove three element from index 2-->> 2,3,4(return an array of three element)
console.log(arr,x);

//slice();---->copy and array and return;
var newArr = arr.slice();
console.log(newArr);// key: value pair are not coppied 

//join(seprater(optional))-->creates and return a new string after concating all the element of array
//arr= [1,2,100,'-1':'dipankar']
console.log(arr.join());// print 1,2,100
console.log(arr.join(''));//print 12100
console.log(arr.join('-'));//print 1-2-100

//fill(value,start,end);--->start and end are optinal fill the value from start index to end index
arr.fill(5);//fill 5 from index 0 to last index
console.log(arr);
arr.fill(3, 2);// fill 3 from index 2 to last index
console.log(arr);
arr.fill(7, 1, 4);// 7 from index 1 to 2
console.log(arr);


