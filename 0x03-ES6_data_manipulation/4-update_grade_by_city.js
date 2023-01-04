export default function updateStudentGradeByCity(students, city, newGrades) {
    // const studentsByCity = students.filter(function (student) {
    //     if (student.location === city) {
    //         return true
    //     }
    // })

    // const results = studentsByCity.map(function (studentInCity) {
    //     // newGrades.forEach(gradeObj => {
    //     //     if (studentInCity.id === gradeObj.studentId) {
    //     //     studentInCity["grade"] = gradeObj.grade
    //     //     } else {
    //     //         studentInCity["grade"] = 'N/A'
    //     // }
    //     // });

    //     for (let gradeObj of newGrades) {
    //         if (studentInCity.id === gradeObj.studentId) {
    //             studentInCity['grade'] = gradeObj.grade
    //         } else {
    //             studentInCity['grade'] = 'N/A'
    //         }
    //     }
        
    //     return studentInCity
    // } )

    const studentGrades = students.map(function (student) {
        newGrades.forEach(gradeObj => {
            if (student.id === gradeObj.studentId) {
                student['grade'] = gradeObj.grade
            } else {
                student['grade'] = 'N/A'
            }
        });
        student['grade']= 'N/A'
    })
    const stu = studentGrades.filter(function (studentx) {
        if (studentx.location === city) {
            return true
        }
    })
//  return results 
return stu    
}