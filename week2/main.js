// // // JavaScript is Single Thread

// // synchronous programming ก่อนหน้าทำเสร็จถึงจะทำบรรทัดถัดไป ถ้าไม่เสร็จไม่ขึ้นบรรทัดใหม่
// // interpreter translator บรรทัดไหนผิดจะแจ้งทันที ไม่เหมือน complie
// function greeting(someone) {
//   return "hello, " + someone
// }
// let $myName = "Thamonwan Simcharoen"
// $myName = 10 //weakly and dynamic data stype
// console.log("Starting...")

// // //Asynchronous programming การ Resources utilization ให้เกิดผลสูงสุด | เสมือน multi task ได้ด้วยการ event loop 
// setTimeout(() => {
//   //Anonymous Arrow function
//   console.log("more complex task finish...")
// }, 10000) // 10 seconds

// console.log(greeting($myName))
// setTimeout(() => {
//   //Anonymous Arrow function ไม่มีชื่อฟังก์ชั่น ใช้ครั้งเดียว แล้วไม่ใช้อีก
//   console.log("simple complex task finish...")
// }, 2000) // 2 seconds

// console.log("Good bye...")

// let msg="I'm a teacher."
// console.log(msg)

// ---------------------------------------------
let a = null
console.log(a)
let total
console.log(total)
if (total === undefined) console.log("variable does not have initial value")
if (a === null) console.log(" variable has null value")



//backtick
if ("2" == 2) console.log(`'2'==2':${"2" == 2}`) //true
if ("2" === 2) console.log(`'2'===2':${"2" === 2}`) //false
// = กำหนดค่า
// == เช็ค value แต่ไม่เช็ค type
// === เช็คทั้ง value , type(เช็คก่อน)

//object sample เก็บ reference ไม่ได้เก็บค่า value
const obj = { id: 1001, name: "pen", price: 100 } // {id: 1001 | property key: property value}
const obj2 = { id: 2001 }
// obj = obj2 // obj cannot change reference value

obj.id = 999 // but obj can update its properties
