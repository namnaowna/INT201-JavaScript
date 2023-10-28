class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  getAge() {
    const milliToday = Date.now(); // number of millisecond of today
    //The getTime() method of Date instances returns the number of milliseconds
    const milliBirthdate = this.dateOfBirth.getTime();
    const diffMilli = milliToday - milliBirthdate;
    const dateOfDiffMilli = new Date(diffMilli); //แปลงค่า milliseconds กลับไปเป็น date 
    return dateOfDiffMilli.getFullYear() - 1970; //getFullYear() returns the year for this date
  }

  isEqual(anotherPerson) {
    return (
      this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
      this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
    );
  }

  toString() {
    return `${this.getFullName()} ${this.getAge()}`;
  }
}

const me = new Person("Thamonwan", "Simcharoen", new Date(2003, 11, 15));
const p1 = new Person("Parnuwat", "Wongkrajang", new Date(2004, 0, 20));
const p2 = new Person("Parnuwat", "Wongkrajang", new Date(2004, 0, 20));

console.log(me.getFullName());
console.log(me.getAge());
console.log(me.toString());

console.log(me.isEqual(p1));
console.log(p1.isEqual(p2));
console.log(
  me.isEqual(new Person("thamonwan", "simcharoen", new Date(2003, 11, 15)))
); //case-insensitive
