function doSomething(msg) {
  return msg;
}
//commonJS
// module.exports = doSomething
// module.exports = { doSomething: doSomething }

//ES Module
export { doSomething as default }; //default export
