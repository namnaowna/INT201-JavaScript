function getAttendenceRate(student) {
  return (
    (student.attendance.filter((e) => e === true).length /
      student.attendance.length) *
    100
  );
}
function getAvgScore(student) {
  return (
    student.testScores.reduce((percent, curr) => percent + curr) /
    student.testScores.length
  );
}

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

function UnderPerformStudent(students) {
  return students.reduce((Obj, curr) => {
    let attendanceRate = getAttendenceRate(curr);
    let avgScore = getAvgScore(curr);
    if (attendanceRate < 80 && avgScore < 70) {
      Obj.push({ name: curr.name, attendanceRate, avgScore });
    }
    return Obj;
  }, []);
}
