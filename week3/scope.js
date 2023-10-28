// console.log(z) -- error
// let z = 555


//a, b, c, f are global scope
let a = 1
const b = 2
var c = 3

//d ,e are block scope
{
  //d and e are local variables in block
  let d = 4
  const e = 5
  var f = 6
  console.log("block area")
  console.log(a)
  console.log(b)
  console.log(c)
}

//h, i, j are function scope
function doIt() {
  //h, i, j are local variable in function
  let h = 7
  const i = 8
  var j = 9

  console.log("function area")
  console.log(a)
  console.log(b)
  console.log(c)

  console.log(f)

  //block scope variable do not allow outside block
  //console.log(d) not allow
  //console.log(e) not allow
}

doIt()
console.log("global area")
console.log(a)
console.log(b)
console.log(c)

console.log(f)

// block scope variable do not allow outside block
// console.log(d) not allow
// console.log(e) not allow

// function scope variable do not allow outside block
// console.log(h) not allow
// console.log(i) not allow
// console.log(j) not allow
