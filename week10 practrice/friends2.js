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

function getAttendanceRate(student) {
  return (
    (student.attendance.filter((attendance) => attendance === true).length /
      5) *
    100
  );
}
function getAvgScore(student) {
  return student.testScores.reduce((a, b) => a + b, 0) / 5;
}
function underPerformStudents(students) {
  const result = [];
  for (const student of students) {
    const rate = getAttendanceRate(student);
    const score = getAvgScore(student);
    if (rate < 80 && score < 70) {
      result.push({ name: student.name, attendance: rate, testScores: score });
    }
  }
  return result;
}
