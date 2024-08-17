const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');
const AddedAssignment = require('../models/AddedAssignment'); // Import the new model

// Fetch all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch all added assignments
router.get('/added', async (req, res) => {
  try {
    const addedAssignments = await AddedAssignment.find();
    res.json(addedAssignments);
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

// Submit a new added assignment
router.post('/added', async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const newAddedAssignment = new AddedAssignment({
      title,
      description,
      dueDate,
    });

    await newAddedAssignment.save();
    res.status(201).json(newAddedAssignment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Assignment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/added/:id', async (req, res) => {
  try {
    await AddedAssignment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Added assignment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
