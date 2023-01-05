interface Student {
    firstName: string,
    lastName: string,
    location: string
}

let student1: Student = {firstName: 'favour', lastName: 'Abangwu', location: 'Abuja'}
let student2: Student = { firstName: 'loveth', lastName: 'Chibuzor', location: 'Ekiti' }
const studentList : Student[] = [student1, student2]

const table = document.createElement('table')
