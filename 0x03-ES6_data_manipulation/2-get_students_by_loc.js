export default function getStudentsByLocation(students, city) {
  const studentLocation = students.filter((student) => {
    if (student.location === city) {
      return true;
    }
  });

  return studentLocation;
}
