//กรณีไม่มี class , id ให้เข้าถึง
const firstDiv = document.body.firstElementChild //or document.body.children[0]
console.log(firstDiv)

const firstDivAttributes = firstDiv.attributes // get all attribute  of any element
console.log(firstDivAttributes) //length = 2 , id and class attribute

Array.from(firstDivAttributes).forEach((attr) => {
  //"bscit-courses" class="courses"
  console.log(attr.name)
  console.log(attr.value)
  console.log(attr.ownerElement)
})

//return value of specified attribute 'id'
console.log(firstDiv.getAttribute("id")) //bscit-courses
//return value of specified attribute 'name'
console.log(firstDiv.getAttribute("class")) //courses

const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute)
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

// -- Add --
//create a new attribute named 'owner' with value "Thamonwan"
firstDiv.setAttribute("owner", "Thamonwan")

//create a new <p> under div.courses
const newPEle = document.createElement("p") //<p></p>
// newPEle.textContent = '<span style="color:red>Client Web ProgII</span>' //<p>Client Web ProgII</p>

// newPEle.innerHTML = '<span style="color:red"> Client Web ProgII </span>' //เข้าใจ tag html

newPEle.innerText = '<span style="color:red"> Client Web ProgII </span>' //เข้าใจ css

newPEle.setAttribute("id", "int203") //<p id="int203">Client Web ProgII</p>
newPEle.setAttribute("calss", "courses") //<p id="int203" class="courses">Client Web ProgII</p>
const divCoursesParent = document.getElementById("bscit-courses")
// -- Add Appen , Before , replace node --
divCoursesParent.appendChild(newPEle) // เอา newPEle(<p> ตัวใหม่) ต่อท้าย

const refNode = divCoursesParent.lastElementChild
console.log(refNode)
// divCoursesParent.insertBefore(newPEle, refNode)
// divCoursesParent.replaceChild(newPEle,refNode) //replace ul with int203

// -- remove node --
// divCoursesParent.removeChild(newPEle)
//divCoursesParent.removeChild(divCoursesParent.firstElementChild)
