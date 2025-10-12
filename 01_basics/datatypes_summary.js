//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// -----------------------------------------

// stack (Primitive)
let myName = "parthib ghosh"
let anotherName = myName
anotherName = "parthibg"

console.log(myName)
console.log(anotherName)

// Heap(Non-premitive)
let user_1 = {
    email : "user1@gmail.com",
    upi : "user1@ybl"
}

let user_2 = user_1

user_2.email = "_1_user@gmail.com"

console.log(user_1.email)
console.log(user_2.email)