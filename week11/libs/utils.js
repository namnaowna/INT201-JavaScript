const sum = (n1, n2) => {
  return n1 + n2
}
const section = "Group1"
//common js module
//module.exports = { sum, section } // or {sum:sum , section: section}

//ES Module
export { sum as default, section } //sum (default export) , section (named export)
