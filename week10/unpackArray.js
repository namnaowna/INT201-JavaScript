//Example destructuring on array

// const a = [5, 8]
// const b = [2, 7]
// const [x1] = a
// const [y1] = b
// console.log(x1 + y1)
function arrayAdd1([x1], [y1]) {
  return x1 + y1;
}
const a = [5, 8];
const b = [2, 7];
console.log(arrayAdd1(a, b)); // 7

// destructuring on array สนใจลำดับ
// destructuring on obj สนใจ property
const student = { id: 65130500028, name: "Thamonwan Simcharoen" };

const { id: studentId } = student;
let { name: studentName } = student;

console.log(studentId);
console.log(studentName);
studentName = "John";
console.log(studentName); //John
console.log(student.name); //Thamonwan Simcharoen

function doSomething({ id }) {
  return id;
}

function doSomething1({ id: studentId }) {
  //const { id: studentId } = student;
  return studentId;
}

console.log(doSomething(student)); //65130500028
console.log(doSomething1(student)); //65130500028
