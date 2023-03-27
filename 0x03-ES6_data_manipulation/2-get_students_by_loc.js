export default function getStudentsByLocation(students, city) {
    const stud = students.filter((student) => (student.location === city))
    return stud
}