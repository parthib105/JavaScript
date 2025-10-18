// // dynamic inputs (rest operator)
// function calculateCartPrice(...num) {
//     return num
// }

// console.log(calculateCartPrice(200, 300))
// console.log(calculateCartPrice(200, 300, 400, 500, 900))


// objects in functions
let user = {
    userName: "Parthib",
    userEmail: "parthibg0@gmail.com",
    price: 299
}
function handleObjects(obj) {
    if (typeof obj !== "object" || !obj) {
        console.log(`${obj} is not an object! Please enter a valid object`)
        return "";
    }
    console.log(`Username is ${obj.userName} and price is ${obj.price}`);
}

handleObjects(user)
