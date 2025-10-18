// object literals
let mySym = Symbol("key1")

let jsUser = {
    name: "Parthib",
    "full name": "Parthib Ghosh",
    [mySym] : "my key 1",
    age: 22,
    localtion: "Murshidabad",
    email: "parthibg0@gmail.com",
    isLoggesIn: false
}

// // accessing
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// // overwriting values
// jsUser["email"] = "parthibg@google.com"
// console.log(jsUser)
// Object.freeze(jsUser)

// jsUser["email"] = "parthibg@microsoft.com"
// console.log(jsUser)

// adding a function as a key
jsUser.greeting = function() {
    console.log("Hello JS user")
}
console.log(jsUser)
console.log(jsUser.greeting())

jsUser.greeting2 = function() {
    console.log(`Hello, JS user ${this.name}!`)
}
console.log(jsUser.greeting2())
