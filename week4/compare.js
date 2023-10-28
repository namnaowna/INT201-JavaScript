// compare object types including object and array data types

//array data type
console.log("-- array data type")
let x = [1, 3, true, "unknown"]
let y = [1, 3, true, "unknown"]
let z = x // give memory address from x to z
console.log(x === y) // false memory address of x === memory address of y
console.log(x === z) // true memory address of x === memory address of z

z[0] = "A" // [B, 3, true, "unknown"]
x[0] = "B" // [A, 3, true, "unknown"] ค่า x เขียนทับ ค่า z | ค่าล่าสุดของ x 
y[0] = "A" // [B, 3, true, "unknown"]

console.log(x)
console.log(y)
console.log(z)

//object data type
console.log("-- object data type")
let m = { id: 1, title: "pen" }
let n = { id: 1, title: "pen" }
let o = m // give memory address from m to o
console.log(m === n) // false mem ory address of m === memory address of n
console.log(o === m) // true memory address of o === memory address of m

o.id = 888
console.log(m) //{ id: 888, title: "pen" }
console.log(o) //{ id: 888, title: "pen" }

//primity type
console.log("-- primity type")
let a = 5
let b = 5
let c = a // give data 5 from a to c
console.log(a === b) //true 5 === 5
console.log(a === c) //true 5 === 5
