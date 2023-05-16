const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const studentsBlock = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = [];
    for (let i = 1; i < studentsBlock.length; i += 1) {
      const studentValue = studentsBlock[i].split(',');
      students.push(studentValue);
    }
    console.log(`Number of students: ${students.length}`);
    const fieldsCount = {};
    students.forEach((student) => {
      const [firstName,,, field] = student;
      if (!fieldsCount[field]) {
        fieldsCount[field] = [];
      }
      fieldsCount[field].push(firstName);
    });
    for (const key in fieldsCount) {
      console.log(`Number of students in ${key}: ${fieldsCount[key].length}. List: ${fieldsCount[key].join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
