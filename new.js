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
