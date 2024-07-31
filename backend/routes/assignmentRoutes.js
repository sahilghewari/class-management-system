// backend/routes/assignmentRoutes.js

const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Create new assignment
router.post('/', async (req, res) => {
  const { title, description, dueDate } = req.body;
  
  try {
    const newAssignment = new Assignment({
      title,
      description,
      dueDate
    });
    await newAssignment.save();
    res.status(201).json({ message: 'Assignment created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating assignment', error });
  }
});

// Retrieve all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving assignments', error });
  }
});

// Delete an assignment
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await Assignment.findByIdAndDelete(id);
    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting assignment', error });
  }
});

module.exports = router;
