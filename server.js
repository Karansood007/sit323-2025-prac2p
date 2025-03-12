const express = require('express');
const app = express();
const port = 3000;

// Log when the server is starting
console.log("Server is starting...");

// Serve a simple HTML page
app.get('/', (req, res) => {
    console.log("Received a request!");
    res.send('<h1>Hello, welcome to my website!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
