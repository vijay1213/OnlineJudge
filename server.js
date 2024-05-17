// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Problem = require('./models/problems');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware




// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Online Judge Platform!');
});




// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
