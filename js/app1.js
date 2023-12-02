// ---------- JavaScript Date ----------

let myDate = new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());

// ------------------------------------------------------------------

let myCreateDate = new Date(2023, 0, 15)
console.log(myCreateDate.toDateString());

// -----------------------------------------------------------------

let myCreateDate = new Date(2023, 0, 15, 5, 4)
console.log(myCreateDate.toLocaleString());

// -----------------------------------------------------------------

let myCreateDate = new Date("2023-01-15")
console.log(myCreateDate.toLocaleString());

// -----------------------------------------------------------------

let myCreateDate = new Date("01-15-2023")
console.log(myCreateDate.toLocaleString());

// ---------------------------------------------------------------------


// ----------- Array ----------

// - Brackets --> []
// - Parenthesis --> ()
// - Braces or Curly Braces --> {}


// ---------- Object ----------

const mySymbol = Symbol("Key1")  // Using Symbol in Objects 

const User = {
    name: "Allen",
    "full name": "Allen Walker",
    [mySymbol]: "mykey1",  // Symbol Syntax
    age: 18,
    location: "Delhi",
    email: "allenwalker@gmail.com",
};

console.log(User.name);  // Allen
console.log(User["name"]);  // Allen
console.log(User["full name"]);  // Allen Walker
console.log(User[mySymbol]);  // mykey1

// ---------------------------------------------------------------------

// Shift + alt + down arrow  ---> Copying Selected Code

// ---------------------------------------------------------------------

const userEmail = "abc@gmail.com";
const userEmail1 = "";  // Don't have user email
const userEmail2 = " ";  // Got user Email
const userEmail3 = [];  // Got user Email

if (userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
}

// ---------------------------------------------------------------------

// Falsy Values
// - false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values
// - "0", "false", " ", [], {}, function (){}

// ---------------------------------------------------------------------

const userEmail = "abc@gmail.com";

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // Object.keys(emptyObj) --> ek array ban jayega keys ka. (It will return an array)
    console.log("Object is empty");
}

// ---------------------------------------------------------------------

false == 0  // true
false == ""  // true
0 == ""  // true

// ---------------------------------------------------------------------

// Nullish Coalescing Operator (??): null undefined
// - Yaha pe bs do keyword pe dhekhna hai ( null and undefined ).
// - its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns
//   its left-hand side operand.

let value = 5 ?? 10;  // 5
let value1 = null ?? 10;  // 10
let value2 = undefined ?? 10;  // 10
let value3 = null ?? 10 ?? 15;  // 10

console.log(value3);