export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const studentData = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: studentData ? studentData.grade : 'N/A',
    };
  });
}
