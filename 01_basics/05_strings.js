const name = "parthib"
const repoCnt = 4

// console.log("Hello my name is " + name + " and my repo count is " + repoCnt)

console.log(`Hello my name is ${name} and my repo count is ${repoCnt}`)

const gameName = new String('parthib-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   parthib    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://parthib.com/parthib%20ghosh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));