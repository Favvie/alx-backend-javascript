export default function getStudentsByLocation(students, city) {
    const studentLocation = students.filter(function (student) {
        if (student.location === city) {
            return true
        }
    })

    return studentLocation

}