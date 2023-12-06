// const html = document.documentElement // get reference to <html>
// alert(html === document.childNodes[0]) // fasle
// console.log(document.childNodes[0]) //<!DOCTYPE html>
// alert(html === document.firstChild) // false
// console.log(document.firstChild) //<!DOCTYPE html>
// console.log(document.firstChild.nodeType) //10
// const docType = document.firstElementChild
// console.log(document.firstElementChild) //html
// console.log(docType.nodeType) // 1

const rootNode = document //root node

console.log(rootNode)
console.log(rootNode.nodeName)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)

console.log(document.documentElement) //root element = html
console.log(document.documentElement.nodeType) //root element = html // 1

console.log(document.body) //html>body
console.log(document.body.nodeType) // 1
console.log(document.head) //html>head
console.log(document.head.nodeType) // 1

//document.title ไม่สามารถหาค่าของ nodeType, nodeValue, nodeName ได้นะคะ จะได้ค่าเป็น undefined
//เราสามารถเพียงแก้ไขหรืออ่านค่า content ของ <titile> ได้เท่านั้นค่ะ
console.log(document.title) //html>head>title
console.log(document.title.nodeType) // undefined
document.title = "sasd"
console.log(document.title)
