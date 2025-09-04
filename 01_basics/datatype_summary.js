//  Primitive(call by value ,copy m change hoga reference m nahi )

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*JavaScript is a dynamically typed language. ✅

That means:

You don’t need to declare the type of a variable when you create it.

The type is determined at runtime, depending on the value stored.

The same variable can hold different types of values at different times.*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefiend

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive),(iske datatype ko object bolte hai)

// 1. Array, 2. bjects, 3. Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array by["",""]
let myObj = {
    name: "hitesh",
    age: 22,
}    //under this{} bracket all is object

const myFunction = function(){
    console.log("Hello world");
}

//datatype of null is object

console.log(typeof myFunction);//datatype of fun called fun object
console.log(typeof null);
console.log(typeof heros);
console.log(typeof id); //symbol ka dt symbol hi hai

//primitive,call by vale(in stack)
//non - primitive,call by reference(in heap)
