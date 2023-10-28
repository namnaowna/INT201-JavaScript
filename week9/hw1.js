const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
];

function getAttendenceRate(student) {
  student.forEach((students) => {
    let sumattendance = 0;
    for (let i = 0; i < students.attendance.length; i++) {
      sumattendance += students.attendance[i];
    }
    const percentage = (sumattendance / students.attendance.length) * 100;
    if (percentage < 80) {
      console.log(students.name);
    }
  });
}

getAttendenceRate(students);

function getAvgScore(student) {
  student.forEach((students) => {
    let sumScore = 0;
    for (let i = 0; i < students.testScores.length; i++) {
      sumScore += students.testScores[i];
    }
    const averageScore = sumScore / students.testScores.length;
    console.log(averageScore);
  });
}
// for (let i = 0; i < student.length; i++) {
//   let students = student[i];
//   for (let j = 0; j < students.testScores.length; j++) {
//     sumScore += students.testScores[j];
//     return
//   }
// }

getAvgScore(students);

function underPerformStudents(students) {
  if (getAvgScore(students) < 60)
  return `name : ${students.name}`;

}

console.log(underPerformStudents(students))


