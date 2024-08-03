const http = require('http');
const fs = require('fs').promises;
// const path = require('path');

//
const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Skip the header line
    const fieldCount = {};

    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');
      if (firstName && lastName && age && field) {
        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }
        fieldCount[field].push(firstName);
      }
    }

    let result = `Number of students: ${lines.length}\n`;
    for (const field in fieldCount) {
      if (Object.hasOwnProperty.call(fieldCount, field)) {
        result += `Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}\n`;
      }
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const PORT = 1245;
const HOST = 'localhost';
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // Handle the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle the /students path
    try {
      // Call countStudents to get the data
      const data = await countStudents(DATABASE);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(Buffer.from('This is the list of our students\n'));
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    // Handle other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});

module.exports = app;
