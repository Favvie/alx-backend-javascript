const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
          if (Object.prototype.hasOwnProperty.call(fieldsCount, key)) {
            console.log(`Number of students in ${key}: ${fieldsCount[key].length}. List: ${fieldsCount[key].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
