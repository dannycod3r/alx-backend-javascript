const express = require('express');

const app = express();
const PORT = 1245;

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Export the app
module.exports = app;
