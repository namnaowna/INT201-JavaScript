//headElement is a head element node
const headElement = document.head
console.log(headElement)

//return the children (all node types)ต้องการทุก nodetype , NodeList data type
console.log(headElement.childNodes)
//return child element (only element type)ต้องการที่เป็น  element nodetype , HTMLCollection data type
console.log(headElement.children)

//NodeList is an array, can use all array functions
const headChildNodes = headElement.childNodes
headChildNodes.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

console.log("----")

//HTMLCollection is array-like (not real array),need to convert to array before using array functions
const headChildren = headElement.children
Array.from(headChildren).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

console.log("----")
//first child
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)
//last child
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

//previous sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)

//next sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

//Get attribute element
const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes
console.log(headFirstElementChildAttrs)

Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr))
