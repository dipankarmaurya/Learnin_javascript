
// javascript is a object oriented language
// object are simple key value pair in js
//create object

var demo = {};// an empty object

let student = {
    name: "dipankar",
    rollNo: 23,
    marks: 95
};
// created three properity of student i.e name,rollNo,marks
// keys in js are always string we can write them in quotes or not

//access properity
console.log(student.name);//dipankar
let marks = student.marks;
console.log(marks);//95

// accessing properity which is not define in js
console.log(student.sem);// print undefined

//creting a properity from outside
student.sem = 4;
console.log(student);//{ name: 'dipankar', rollNo: 23, marks: 95, sem: 4 }

// in js object have no access modifiers (public,private ,protected in languages like c,c++) its just simple key value pair

//crete object using square bracket--->>()
var obj = new Object();

// delete properity of an object
//1-->
delete student.marks;
console.log(student);
delete student["name"];
console.log(student);

// iterating in object
for (var prop in student) {
    console.log(prop,"--->",student[prop]);
}
//find all keys 
var keys = Object.keys(student);
console.log(keys);
//or
var keys = Object.getOwnPropertyNames(student);
console.log(keys);
/// nested objects

let myProfile = {
    name: {
        firstName: "Dipankar",
        lastName:"maurya"
    },
    DOB: {
        date:21,
        month: "october",
        year:1998
    },
    address: {
        city: "jaunpur Uttar Pradesh",
        pinCode:221201
    }
}
console.log(myProfile);
console.log(myProfile.name.firstName);//or console.log(myProfile.name["firstName"]);
console.log(myProfile.DOB);
console.log(myProfile.address);

let info = Object.getOwnPropertyNames(myProfile.name);
console.log(info);
// arrays and objects
// in js arrays are objets with some more additional properity
let employee = ['suresh', 'ram', 'dinkar', 'anuj'];
//keys are the indexes and value is the elements
console.log(employee);
let emp = {
    0: "suresh",
    1: 'ram',
    2: 'dinkar',
    3: 'anuj'
}
console.log(emp);

