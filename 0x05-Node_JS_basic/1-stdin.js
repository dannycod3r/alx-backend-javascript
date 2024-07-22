process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  // Listen for user input
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    process.exit();
  });
} else {
  // Listen for user input
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });

  // Handle process exit event
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
