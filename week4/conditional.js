//if-else
let score = 20
let grade = "F"
//Ex. <40 'F' , 41-70 'Good' , 71-100 'Very Good'
if (score < 0 || score > 100) grade = "invalid scores"
else if (score > 70) grade = "Very Good"
else if (score > 40) grade = "Good"
console.log(grade)

//switch case
const month = 1
const montName = ""
switch (month) {
  // 1===1
  case 1:
    monthName = "Jan"
    break
  case 2:
    monthName = "Feb"
    break
  case 3:
    monthName = "Mar"
}
console.log(monthName)

const ch = "b"
let isVowel = false
switch (ch) {
  case "A":
  case "a":
  case "E":
  case "e":
  case "I":
  case "i":
  case "O":
  case "o":
  case "U":
  case "u":
    isVowel = true
    break
  case "*":
    isVowel = "star"
    break
  default:
    isVowel = false
}
console.log(isVowel)

for (let i = 1; i <= 10; i++) console.log(i)

//array data type
console.log("---- for i ----")
let x = [1, 3, true, "unknown"]
//print element in X
//1. for...i (object)
for (let i = 0; i < x.length; i++) console.log(x[i])
console.log("---- for of----")
//2. for...of (array) แต่จะใช้กับ object ก็ได้
for (const data of x) {
  console.log(data)
}
console.log("---- for each----")
//3. for...each
x.forEach((element) => {
  console.log(element)
})


//object data type
let m = { id: 1, title: "pen" }
console.log("---- for in----")
//for..in ใช้กับ object
for (const key in m) {
  console.log(key) //print property name || id title
  console.log(m[key]) //print property  || 1 pen
}

