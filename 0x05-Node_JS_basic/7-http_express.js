const express = require('express');
const fs = require('fs').promises;


const app = express();
const PORT = 1245;
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

// Helper function to count students
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines.shift().split(',');
    const students = [];
    const fieldCount = {};

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

        if (!fieldCount[student.field]) {
          fieldCount[student.field] = [];
        }
        fieldCount[student.field].push(student.firstname);
      }
    });

    let result = `Number of students: ${students.length}\n`;
    Object.keys(fieldCount).forEach((field) => {
      result += `Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}\n`;
    });
      return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  try {
    // const filePath = DATABASE; // Adjust the path as needed
    const studentsList = await countStudents(DATABASE);
    res.send(`This is the list of our students\n${studentsList}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Export the app
module.exports = app;
