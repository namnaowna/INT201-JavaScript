let num1 = 10
const num2 = 20
var num3 = 30

function testGlobalScope() {
  console.log(num1)
  console.log(num2)
  console.log(num3)
  num1++
  num3++
}

testGlobalScope()
console.log(num1)
console.log(num2)
console.log(num3)
