var a = 10;
var b = 20;
console.log(a + b);
console.log("hey im learning js");
var a=5;
var b =6;
console.log(a+b+8);
var c ="yahya";
console.log(c);
console.log(typeof a, typeof b,typeof c);

//creating an object

let y ={
    "name": "yahya",
    "age": 21, "designation":"future developer"
}

 console.log(y)
 y.salary="10 lakh";
 console.log(y);

 //if else statements

 let age=45;

 if (age>18){
    console.log("you are adult");
 }
 else{
    console.log("you are not adult");
 }

 let Umar=5;
 if (Umar>18){
    console.log("you are adult");
 }
 else{
    console.log("you are not adult");
 }

// if else statements in one line 
 a=6;
 b=8;
 c = a>b ? (a+b):(b-a);
 console.log(c);

 //Loops
//  console.log("im a for loop");
let z=1;

for(i=0; i<100;i++){
    console.log(z+i);
}

// console.log("im a for in loop");
let obj={
    "name":"yahyaa", "roll":"programmer", "uni":"NFC IET"
}

for (const key in obj) {
     {
        const element = obj[key];
        console.log(key,element); 
    }
}

// console.log("im a for of loop");
 
for (const c of "yahya") {
    console.log(c)
}
// console.log("im a while loop");

let s=10;
while(s<20){
    console.log(s);
    s++;
}

// functions

function personname(name){
    console.log("hy im" +name );
    console.log( name +"is learning Js");
}
personname("yahya");
personname("Hamza")

function add(a,b){
    // console.log(a+b);
return a+b;
}
result=add(5,10);
result2=add(15,10);

console.log(result);
console.log(result2);

// Arrow Function

const fun1 = (x)=>{
 console.log("im an arrow function "+ x);
}

fun1(43)
fun1(50)

//strings
console.log("Access the strings");
let j="yahya";
console.log(j[0]);
console.log(j[1]);
console.log(j[2]);
console.log(j[3]);
console.log(j[4]);

console.log("finding length");
console.log(j.length)

let my_name="yahya";
let my_frnd="zaka";

console.log(`my name is ${my_name} and my frnd is ${my_frnd}`);


// upper & lower case convertion
console.log(my_name.toUpperCase());
console.log(my_name.toLowerCase());

//Arrays

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length)
console.log(arr[3])
//changing value of array with index 3 

arr[3] = 22;
console.log(arr);

//Array methods
// Push & pop

let op = [1, 2, 3, 4, 5, 6];


op.pop()
//6 removed or poped
op.push(100);

//100 added at the end of array
console.log(op)

/* Pro Tip
       
    #pop Remove the last element of an array
    #while Shift removes the first element of an array
    
    #push Add an element at the end of an array
    #while unshift Add an element at the beginning of an array

*/

//Shift & Unshift

//removed 1 from the array (start of the array)
op.shift()

//added Yahya at the start of the array
op.unshift('yahya');
console.log(op)

// delete op[3];
// //index 3 is deleted
// console.log(op);

//Concatination method

let a1=[10,20]
let a2=[20,30]
let a3=[40,50]

console.log(a1.concat(a2,a3)) //output [10,20,20,

//Loops
let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of a) {
    console.log(value)
}



//Maps & filters
let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))






