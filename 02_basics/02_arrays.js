const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// // push function takes entire array as element
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

// // Use concat
// const marvel_dc = marvel_heros.concat(dc_heros)
// console.log(marvel_dc)
// console.log(marvel_heros)
// console.log(dc_heros)

// // use of spread
// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)

// // use of flat
// const arr = [1, 2, 3, [4, 5, 6], [6, 7, [6, 8]]]
// const flatted_arr = arr.flat(Infinity)
// console.log(flatted_arr)

// convert to array
console.log(Array.isArray("Parthib"))
console.log(Array.from("Parthib"))
console.log(Array.from({name: "parthib"}))  // returns []

let obj = { name: "parthib", age: 22, college: "IIT Hyderabad" }
console.log(Array.from(Object.values(obj))) // [ 'parthib', 22, 'IIT Hyderabad' ]

let val1 = 100
let val2 = 200
let val3 = 300
console.log(Array.of(val1, val2, val3))