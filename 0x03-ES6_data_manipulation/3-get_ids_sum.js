export default function getStudentIdsSum(students) {
  const sum = students.reduce((total, student) => total + student.id, 0);
  return sum;
}
