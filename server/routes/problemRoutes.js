// routes/problemRoutes.js

const express = require('express');
const router = express.Router();

// Dummy problem controller functions
const getProblems = (req, res) => {
  res.json({ message: "List of problems" });
};

const getProblemById = (req, res) => {
  res.json({ message: `Problem details for ID ${req.params.id}` });
};

const createProblem = (req, res) => {
  res.json({ message: "Create a new problem" });
};

// Routes
router.get('/', getProblems);
router.get('/:id', getProblemById);
router.post('/', createProblem);

module.exports = router;
