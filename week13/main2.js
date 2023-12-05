const outerDiv = document.querySelector("#outer-div") // or document.getElementById("outer-div")
const innerDiv = document.querySelector("#inner-div") // or document.getElementById("inner-div")
const submitButton = innerDiv.firstElementChild

function doSomething() {
  console.log("do something")
}

//multiple function handlers on the same HTML object and event type
submitButton.addEventListener("click", (e) => {
  console.log("submit clicked")
})

submitButton.addEventListener("click", doSomething)

//remove function handler
//it's work
submitButton.removeEventListener("click", doSomething)
//does not work
submitButton.removeEventListener("click", (e) => {
  console.log("submit clicked")
})
