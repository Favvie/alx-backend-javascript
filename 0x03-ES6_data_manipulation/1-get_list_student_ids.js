export default function getListStudentIds(arg) {
    const result = Array.isArray(arg)
    if (result) {
        const newArr = arg.map(function (student) {
            return student.id
        })
        return newArr
    }
    return []
}