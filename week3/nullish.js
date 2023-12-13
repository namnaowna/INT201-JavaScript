// nullish coalescing
let items = null
items = items ?? [] //ค่าฝั่งซ้าย เป็น null เลย return ค่าขวา
console.log(items)
items = 2
items = items ?? [] //ค่าฝั่งซ้าย เป็น 2 เลย return ค่าซ้าย หรือ ตัวมันเอง
console.log(items)

let options = { delay: "5ms" }
options.title = options.title ?? "untitled"
console.log(options)
