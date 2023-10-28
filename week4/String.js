let str1 = "ant"
let str2 = "Ant"
let str3 = "ANT"
let str4 = "ant"

console.log(str1 === str2) //fales 'a' === 'A'
console.log(str1 === str3) //fales 'a' === 'A'
console.log(str2 === str3) //fales 'A' === 'A' , 'n' === 'N'
console.log(str1 === str4) //true 'a' === 'a' , 'n' === 'n' ,'t' === 't'
console.log(str1 !== str3) //true 'a' !== 'A' , 'n' !== 'N' , 't' !== 'T'
console.log(str1 < str2) //false 'a' < 'A' 97<65
console.log(str3 < str1) //true 'A' < 'a' 65<97
// ascii table binary

// include คือค้นหาข้อความที่เราต้องการใน String
// วิธีเลือกใช้ include กับ operator ถ้าเป็น include ยอมให้มีส่วนใดส่วนหนึ่ง แต่ถ้าต้องเป็นค่านั้นเป็นให้ใช้ operator(===)
console.log("----")
console.log(str1.includes("nt"))
console.log(str1.includes("Nt"))
console.log(str1.toLowerCase().includes("Nt".toLowerCase()))
console.log(str1.toUpperCase().includes("Nt".toUpperCase()))
console.log(str1.includes("ant"))

console.log("----")
console.log(str1.length)
