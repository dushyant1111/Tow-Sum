const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT ||3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Atlas connection string FROM ENV VARIABLE
const mongoConnectionString = process.env.MONGODB_URI;

// Replace <username> and <password> with your MongoDB Atlas username and password
// const mongoConnectionString = mongoUri.replace('Admin', 'your-username').replace('Mp3ww2fbgxCDAjfX', 'your-password');

mongoose.connect(mongoConnectionString)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err));

// Route to handle addition of a and b
app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    // Check if a and b are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b;
        res.send(sum.toString());
    } else {
        res.status(400).json({ error: 'Invalid input. a and b must be numbers.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
