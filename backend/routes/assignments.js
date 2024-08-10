// backend/routes/assignments.js

const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Fetch all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit a new assignment
router.post('/', async (req, res) => {
  const { title, description, dueDate, submittedBy, fileUrl } = req.body;

  try {
    const newAssignment = new Assignment({
      title,
      description,
      dueDate,
      submittedBy,
      fileUrl,
    });

    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
