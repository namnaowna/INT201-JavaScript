const person = {
  firstname: "Thamonwan",
  lastname: "Simcharoen",
  dateOfBirth: new Date("2003-12-15"),
};
console.log(person);

class Person {
  constructor(firstname, lastname, dateOfBirth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  getAge() {
    const today = new Date();
    const age =
      today.getFullYear() -
      this.dateOfBirth.getFullYear() -
      (today.getMonth() < this.dateOfBirth.getMonth() ||
        (today.getMonth() === this.dateOfBirth.getMonth() &&
          today.getDate() < this.dateOfBirth.getDate()));
    return age;
  }

  isEqual(anotherPerson) {
    if (
      this.firstname === anotherPerson.firstname &&
      this.lastname === anotherPerson.lastname
    ) {
      return true;
    }
    return false;
  }

  toString() {
    return `${this.getFullName()} ${this.getAge()}`;
  }
}

const p1 = new Person("Parnuwat", "Wongkrejang", "2004-1-20");
const p2 = new Person("Mandew", "Ruk", "2004-2-25");
const p3 = new Person("Mandew", "Ruk", "2002-5-5");
console.log(p1);
console.log(p1.getFullName());
console.log(p2.isEqual(p1));
console.log(p2.isEqual(p3));
console.log(p1.getAge());
console.log(p1.toString());
