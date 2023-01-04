export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city)
    .map((studentInCity) => {
      const grade = newGrades.find((grade) => grade.studentId === studentInCity.id);
      /* eslint-disable no-param-reassign */
      if (grade) {
        studentInCity.grade = grade.grade;
      } else {
        studentInCity.grade = 'N/A';
      }
      return studentInCity;
    });
  return studentsByCity;
}
