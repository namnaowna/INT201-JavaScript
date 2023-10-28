const students = [
  { id: 1, firstname: "Somsak", lastname: "Jaidee" },
  { id: 2, firstname: "Somchai", lastname: "Dee" },
  { id: 3, firstname: "Somying", lastname: "Jai" },
];

const jaiStudents = students.filter((students) =>
  students.lastname.toLowerCase().startsWith("jai")
);
console.log(jaiStudents);

//students who has firstname or lastname include 'de' with case insensitive
const deStudents = students.filter(
  (student) =>
    student.firstname.toLowerCase().includes("de") ||
    student.lastname.toLowerCase().includes("de")
);
console.log(deStudents);

//map method
const ids = students.map((student) => student.id);
console.log(ids);

//return all students' fullname format is "lastname, fistname"
const fullnames = students.map(
  (student) => `${student.lastname}, ${student.firstname}`
);
console.log(fullnames);

//return all student id in the format 'entry year' follow with student id, for example
// { id: 1, firstname: "Somsak", lastname: "Jaidee" } => 20231
const idsStudent = students.map(
  (student) => `${new Date().getFullYear()}${student.id}`
);
console.log(idsStudent);

const currentYear = new Date(Date.now()).getFullYear();
const idsStudent2 = students.map((student) => {
  return currentYear + "" + student.id;
});
console.log(idsStudent2);

//find the first student id who starts the lastname with 'jai'
const findStudentJai = students.find((student) =>
  student.lastname.toLowerCase().startsWith("jai")
);
console.log(findStudentJai); //{ id: 1, firstname: 'Somsak', lastname: 'Jaidee' }

const findStudentJaiIndex = students.findIndex((student) =>
  student.lastname.toLowerCase().startsWith("jai")
);
console.log(findStudentJaiIndex); //0

//every
//return boolean that cheack all student ids whether have id value more than zero
const everyIdstudent = students.every((student) => student.id > 0);
console.log(everyIdstudent);

//some
//return boolean that cheack some student ids whether have id value more than zero
const someFirstnameSak = students.some((student) =>
  student.firstname.toLowerCase().endsWith("sak")
);
console.log(someFirstnameSak);
