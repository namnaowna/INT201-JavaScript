//Conditional operator [?:]
let x = 1
let y = x === 1 ? Math.random() * 2 + 3 / 5 : x
console.log(x === 1 ? 1 : 0)
console.log(y)

// Optional chaning [?.]
let m = null
console.log(m?.charAt[0])
console.log(m?.[0])
console.log(m?.id)

//Nullish coalescing [??]
let n = m ?? 0 //equals to m !== null && m !== undefined ? m : 0
console.log(n)

let a = [] //array initialization with empty array
let b = {} //object initialization with no property
console.log(a) //empty array (not null and not undefind)
console.log(b) //empty object (not null and not undefind)

let c
c = c ?? a // c = a
console.log(c) // []

c = [1, 3, 5, 7]
c = c ?? a // c = c
console.log(c) // [1, 3, 5, 7]

//Math random
//random number in a range 25 to 100
//Math.random() randoms in a range 0 to 0.99999*
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let n1 = 25,
  n2 = 100
const rand = Math.floor(Math.random() * (n2 - n1 + 1)) + n1
console.log(rand)
// 1. 75 + 1
// 2. Math.random() 0 to 0.9999*4
// 3. 0 * 76 to 0.9999 * 76  = 0 to 75.9999
// 4. +25 = 25 to 100.9999 = 25 - 100.999
// 5. Math.floor = 25 - 100.999 = 25 - 100

console.log("----")
console.log(Math.round(3.1)) //3
console.log(Math.round(3.4)) //3
console.log(Math.round(3.5)) //4
console.log(Math.round(3.7)) //4

console.log("----")
console.log(Math.floor(3.1)) //3
console.log(Math.floor(3.4)) //3
console.log(Math.floor(3.5)) //3
console.log(Math.floor(3.7)) //4

console.log("----")
console.log(Math.ceil(3.1)) //4
console.log(Math.ceil(3.4)) //4
console.log(Math.ceil(3.5)) //4
console.log(Math.ceil(3.7)) //4

console.log(Math.PI)
console.log(Math.pow(2, 5))
