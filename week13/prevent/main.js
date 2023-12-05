const submitButton = document.getElementById("submit-btn-01")
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("submit clicked")

  const inputElements = document.querySelectorAll("input")
  //   console.log(inputElements[0].value)
  //   console.log(inputElements[1].value)
  const pElement = document.querySelector("p")
  if (
    inputElements[0].value.length === 0 ||
    inputElements[1].value.length === 0
  ) {
    pElement.textContent = "some values are missing, please check"
    pElement.innerHTML =
      '<span style="color:red"> some values are missing, please check </span>'
  } else {
    pElement.textContent = "Your input are complete"
    pElement.innerHTML =
      '<span style="color:green"> Your input are complete </span>'
  }
})

// วิธีอื่นที่เพื่อนทำ
// let submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("submit clicked");
//   const input = document.getElementsByTagName("input");
//   let bothValid = Array.from(input).every((a) => a.value.length > 0);
//   if (bothValid) {
//     document.querySelector("p").textContent = "success";
//   } else {
//     document.querySelector("p").textContent = "fail empty";
//   }
// });
