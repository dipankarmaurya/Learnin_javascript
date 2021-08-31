
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

