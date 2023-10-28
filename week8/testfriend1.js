const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
];

const getPassingNames = (students) => {
  const studentPass = [];
  students.forEach((student) => {
    if (student.score >= 70) studentPass.push(student.name.toUpperCase());
  });
  return studentPass;
};
const passingNames = getPassingNames(studentScores);
console.log(passingNames);
