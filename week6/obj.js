// 1. create object by literal {}
const student = {
  id: 65130500028,
  firstname: "Thamonwan",
  lastname: "Simcharoen",
};
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof student);
console.log(Object.prototype.isPrototypeOf(student)); //เช็คบรรพบุรุษ
console.log(Date.prototype.isPrototypeOf(student));

const lecturer = { id: 1001, firstname: "Thamonwan", lastname: "Sim" };
console.log(Object.prototype.isPrototypeOf(lecturer));

//way to get property value
const someoneId = student.id; //object.key
const someoneFirstName = student["firstname"]; //object["key"]
console.log(someoneId);
console.log(someoneFirstName);

//way to assign property value
student.id = 65130500060;
student["firstname"] = "Parnuwat";
console.log(student.id);
console.log(student["firstname"]);

//dynamic properties
//add new property
student["email"] = "parnuwat@kmutt.ac.th";
student.address = "Bangkok , Thailand";
console.log(student);
//delete existing property
delete student.address;
console.log(student);

//nested object , Aggregated object
student.advisor = lecturer;
console.log(student);

console.log(student.advisor.firstname);
console.log(student["advisor"]["firstname"]);

//function declaration
function doSomething() {}

//function expression
student.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};
console.log(student.getFullName); //get property value of getFullName
console.log(student.getFullName()); //excute function getFullName()

const student2 = { id: 555, firstname: "Suda", lastname: "Jaidee" };
student2.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};
console.log(student2.getFullName());

const student3 = {
  id: 1001,
  firstname: "Nam",
  lastname: "Naow",
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
console.log(student3.getFullName());

// 2. create object with constructor function
function Person(id, firstname, lastname) {
  this.id = id;
  this.fullname = `${firstname} ${lastname}`;
}
const p1 = new Person(111, "Marry", "Jo");
const p2 = new Person(222, "Adam", "Smith");
const p3 = new Person(333, "Susan", "Dee");
console.log(p1);
console.log(p2);
console.log(p3);
console.log(Object.prototype.isPrototypeOf(p1));
console.log(Object.prototype.isPrototypeOf(p2));
console.log(Object.prototype.isPrototypeOf(p3));
console.log(Person.prototype.isPrototypeOf(p3));
console.log(Date.prototype.isPrototypeOf(p3));

//3.create object with class
class Student {
  constructor(id, fn, ln) {
    this.id = id;
    this.firstname = fn;
    this.lastname = ln;
  }
  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
//st1->Student prototype->Object prototype (Ancestor)
const st1 = new Student(1, "Pitch", "jo");
const st2 = new Student(2, "Lee", "Clime");
console.log(st1);
console.log(st2);
console.log(st1.getFullName());
console.log(st2.getFullName());
console.log(Object.prototype.isPrototypeOf(st1)); //true
console.log(Student.prototype.isPrototypeOf(st1)); //true

//4.create object by using Object.create()
//undergrateSt1->Student prototype->Object prototype (Ancestor)
const undergrateSt1 = Object.create(st1);
console.log(undergrateSt1); //Student {}
console.log(undergrateSt1.id); // 1
console.log(undergrateSt1.firstname); //Pitch
console.log(undergrateSt1.lastname); //jo
console.log(Object.prototype.isPrototypeOf(undergrateSt1)); //true
console.log(Student.prototype.isPrototypeOf(undergrateSt1)); //true
undergrateSt1.project = "Web Application";
console.log(undergrateSt1);
console.log(Object.keys(undergrateSt1));
console.log(Object.values(undergrateSt1));

let circle = {
  radius: 2,
  // area: function () {
  //   Math.PI * Math.pow(this.radius, 2)
  // }

  //remove :function
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  equals(compareCircle) {
    return this.radius === compareCircle.radius;
  },
};
console.log(circle);
console.log(circle.radius);
console.log(circle.area());
console.log(circle.equals({ radius: 2 }));
console.log(circle.equals({ radius: 3 }));

//Check empty object
circle = {};
console.log(JSON.stringify(circle));
if (JSON.stringify(circle) === "{}") console.log("empty object");
else console.log("not empty object");
