const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the file content by newlines to process each row
      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      // Remove the header line
      const headers = lines.shift().split(',');

      // Initialize variables
      const students = [];
      const fieldCount = {};

      // Process each line in the file
      lines.forEach((line) => {
        const studentData = line.split(',');

        if (studentData.length === headers.length) {
          const student = {
            firstname: studentData[0],
            lastname: studentData[1],
            age: studentData[2],
            field: studentData[3],
          };

          students.push(student);

          // Count the number of students per field
          if (!fieldCount[student.field]) {
            fieldCount[student.field] = [];
          }
          fieldCount[student.field].push(student.firstname);
        }
      });

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Log the number of students per field and their names
      Object.keys(fieldCount).forEach((field) => {
        console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
      });
    })
    .catch(() => {
      // console.error('Cannot load the database');
      throw new Error('Cannot load the database');
    });
}

// Export the function to make it available to other files
module.exports = countStudents;
