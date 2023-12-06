// -- State Change Events --
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded")
})
window.addEventListener("load", () => {
  console.log("Load")
})
window.addEventListener("beforeunload", () => {
  console.log("before unload")
  localStorage.setItem("myCat", "Tom")
})

// //-- Focus Event --
// // blur , focus
// const inputElements = document.querySelectorAll("input")
// inputElements[0].addEventListener("focus", () => {
//   console.log("input focused")
// })
// inputElements[0].addEventListener("blur", () => {
//   console.log("input blured")
// })

// // -- Keyboard Event --
// inputElements[0].addEventListener("keydown", (e) => {
//   if (e.key === "a") console.log("keydown: a")
// })
// inputElements[0].addEventListener("keypress", (e) => {
//   if (e.key === "a") console.log("keypress: a")
// })
// inputElements[0].addEventListener("keyup", (e) => {
//   if (e.key === "a") console.log("keyup: a")
// })

// const inputMessage = document.getElementById('message')
// inputMessage.addEventListener('keypress', (event) => {
//     if (event.key >= 0 || event.key <= 9) {
//     event.preventDefault()
//     console.log('it is number')
//   }
// })

// -- Target value --
// const pElement = document.querySelector("p")
//  const inputUsername = document.querySelector("input")
// inputUsername.addEventListener("keyup", (event) => {
//   pElement.textContent = event.target.value //access ค่าของ input username มาใช้ได้
// })

// -- Input Event --
// update ตามที่เราพิมทั้งหมด
// const pElement1 = document.querySelector("p")
// const inputUsername1 = document.querySelector("input")
// inputUsername.addEventListener("input", (event) => {
//   console.log("input")
// })
