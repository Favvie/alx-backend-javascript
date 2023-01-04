export default function getStudentIdsSum(students) {
    const sum = students.reduce(function (total, student) {
        return total + student.id
    }, 0)
    return sum
}