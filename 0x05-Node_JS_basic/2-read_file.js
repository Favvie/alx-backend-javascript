const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const studentsBlock = data.split('\n').filter((line) => line.trim() !== '');
    const students = [];
    for (let i = 1; i < studentsBlock.length; i += 1) {
      const studentValue = studentsBlock[i].split(',');
      students.push(studentValue);
    }
    const CS = [];
    const SWE = [];
    for (const student of students) {
      if (student[3] === 'CS') {
        CS.push(student[0]);
      } else if (student[3] === 'SWE') {
        SWE.push(student[0]);
      }
    }
    console.log(`
Number of students: ${students.length}
Number of students in CS: ${CS.length}. List: ${CS.join(', ')}
Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}
        `);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
