//1. select HTML objects
const outerDiv = document.querySelector("#outer-div") // or document.getElementById("outer-div")
const innerDiv = document.querySelector("#inner-div") // or document.getElementById("inner-div")
const submitButton = innerDiv.firstElementChild

// console.log(outerDiv)
// console.log(innerDiv)
// console.log(submitButton)

//2. select event type "click"
//3. register event type to HTML objects

// function doSomething() {
//   console.log("do SOmething")
// }

// const doit = () => {

// }

// outerDiv.addEventListener("click", doSomething)

//เมื่อเกิด Event จะมีการโยน EventObject(e) ออกมาเพื่อให้เราไปใช้ต่อได้
outerDiv.addEventListener(
  "click",
  (e) => {
    //EventHandler
    // call back function
    console.log("outer div is clicked")
    console.log(e.type)
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
  },
  true
)

innerDiv.addEventListener(
  "click",
  (e) => {
    console.log("inner div is clicked")
    console.log(e.type)
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
  },
  true
)

submitButton.addEventListener(
  "click",
  (e) => {
    console.log("submit button clicked")
    console.log(e.type)
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
  },
  true
)
