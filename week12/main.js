const body = document.body
const bodyChildNodes = body.childNodes //NodeList : array-like (implement for-each but cannot array methods)
const bodyChildren = body.children //HTMLCollection : array-like (not implement for-each but cannot array methods)

//NodeList return all node types
//HTMLCollection return only element type

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})

Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})

console.log(body.firstChild) //#text
console.log(body.firstElementChild) //<div id="bscit-courses" class="courses">
console.log(body.lastChild) //<script src="main.js"></script>
console.log(body.lastElementChild) //<script src="main.js"></script>

console.log(body.firstChild === body.firstElementChild) //ใช้ reference address มาเปรียบเทียบ
console.log(body.lastChild === body.lastElementChild) //ใช้ reference address มาเปรียบเทียบ

console.log(document) //root node , document node
console.log(document.documentElement) //html , root element , document element
console.log(document.documentElement === document.firstElementChild) //html === <html lang="en"> , true
console.log(document.documentElement === document) //html === root node , false

// -- Query,Select element by id --
// return one element and first node
const course201Ele = document.getElementById("int201") // case-sensitive
console.log(course201Ele)

const course101Ele = document.querySelector("#int101 ") //ใส่ # เพื่อแทน id
console.log(course101Ele)

const bscitcCourses = document.querySelector("#int101 , #bscit-courses") //ใส่ # เพื่อแทน id | อันไหนตรงเงื่อนไขก่อนเอาอันนั้น
console.log(bscitcCourses)

const progCourse = document.querySelector(".courses") //ใส่ . เพื่อแทน class
console.log(progCourse)

// return collection of elements
//find with css selector
const progEle = document.querySelectorAll("#int101 , .programming")
console.log(progEle) //NodeList
const liEle = document.querySelectorAll("li")
console.log(liEle) //NodeList

//find with tag name
const liEle2 = document.getElementsByTagName("li")
console.log(liEle2) //HTMLCollection

//find with classname
const coursesEle = document.getElementsByClassName("courses")
console.log(coursesEle) //HTMLCollection

const divLectElement = document.querySelector(".lecturers")
//get <li> under div.lecturers
const liDivLect = divLectElement.querySelectorAll("li")
console.log(liDivLect)
//get <li> under document node
const allLi = document.querySelectorAll("li")
console.log(allLi)

const nameNNEle = document.getElementsByName("NN")
console.log(nameNNEle)

console.log(body.childElementCount)
