// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Problem = require('./models/problems');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/onlinejudge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Online Judge Platform!');
});

// Get all problems
app.get('/api/problems', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new problem
app.post('/api/problems', async (req, res) => {
  try {
    const { statement, name, likeCount, difficulty, code } = req.body;
    const newProblem = new Problem({ statement, name, likeCount, difficulty, code });
    await newProblem.save();
    res.status(201).json(newProblem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
