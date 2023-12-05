import { CookieUtil } from "./myLib/cookieUtil.js"
// const myCookies = document.cookie
// console.log(myCookies)

// document.cookie = "course=INT201;expires=max-age=300" //5 นาที = 60 * 5 = 300 วิ
// console.log(myCookies)

// document.cookie = `credit=3;expires=${new Date(
//   Date.now() + 1000 * 60 * 60 * 24 // 1000 * 60 = 1 นาที || 1000 * 60  * 60 * 24 = 1 วัน
// )}`

// // new Date(year, monthIndex, day)
// document.cookie = `lecturer=Thamonwan;expires=${new Date(2023, 11, 25)}`
// console.log(myCookies)

CookieUtil.set("course name", "INT201", new Date(2023, 11, 31))
CookieUtil.set("credit", "2", new Date(2024, 0, 1))
console.log(CookieUtil.get("course name")) //INT201
console.log(CookieUtil.get("credit")) //2

CookieUtil.unset("course name") //cookie expired

// new Date(year, monthIndex, day)
document.cookie = `lecturer=Thamonwan;expires=${new Date(
  2023,
  11,
  25
)};HTTPonly` //document.cookie จะไม่เห็น lecturer เพราะมันอยู่แค่ Http
console.log(document.cookie)
