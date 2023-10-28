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
const getAttendanceRate = (students) => {
  let arr = students.map((obj) => (obj = { ...obj }));
  arr.forEach((element) => {
    element.attendanceRate =
      (element.attendance.reduce((present, value) => {
        if (value) {
          present++;
        }
        return present;
      }, 0) /
        element.attendance.length) *
      100;
  });
  return arr.filter((student) => student.attendanceRate < 80);
};
const getAvgScore = (students) => {
  const arr = students.map((obj) => ({ ...obj }));
  arr.forEach((student) => {
    student.avgScore =
      student.testScores.reduce((score, eachScore) => {
        score += eachScore;
        return score;
      }, 0) / student.testScores.length;
  });
  return arr;
};
const getAttendanceRateButForReal = (students) => {
  let arr = students.map((obj) => (obj = { ...obj }));
  arr.forEach((element) => {
    element.attendanceRate =
      (element.attendance.reduce((present, value) => {
        if (value) {
          present++;
        }
        return present;
      }, 0) /
        element.attendance.length) *
      100;
  });
  return arr;
};
const underPerformStudents = (students) => {
  let arr = [];
  arr = [...getAttendanceRateButForReal(students)];
  arr = [...getAvgScore(arr)];
  return arr.filter(
    (student) => student.attendanceRate < 80 && student.avgScore < 70
  );
};
