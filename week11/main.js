//common js
// const { sum, section } = require("./libs/utils")
// console.log(sum(1, 2))

//ES Module
import s, { section } from "./libs/utils.js"
console.log(s(1, 2))
console.log(section)
