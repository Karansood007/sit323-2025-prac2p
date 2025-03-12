const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, welcome to my website!</h1>');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Something went wrong:', err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
