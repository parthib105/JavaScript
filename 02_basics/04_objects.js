// singleton (using constructor)

const newUser = new Object()

newUser["id"] = "123abc"
newUser["name"] = "Sammy"
newUser["isLoggedIn"] = false

// console.log(newUser)

// // Objects inside an object
// let regUser = {
//     email: "some@email.com",
//     userName: {
//         firstName: "Parthib",
//         lastName: "Ghosh"
//     },
//     profileVisit: 7
// }
// console.log(regUser.userName)

// // combining an object
// let obj1 = {1: 'a', 2: 'b'}
// let obj2 = {3: 'c', 4: 'd'}

// // let obj3 = {obj1, obj2}
// // let obj3 = Object.assign({}, obj1, obj2)

// let obj3 = {...obj1, ...obj2}
// console.log(obj3)

// some properties
console.log(Object.keys(newUser))
console.log(Object.values(newUser))
console.log(Object.entries(newUser))
console.log(newUser.hasOwnProperty("isLoggedIn"))
