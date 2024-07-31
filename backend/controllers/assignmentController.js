// controllers/assignmentController.js
const Assignment = require('../models/Assignment');

exports.addAssignment = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    // Validate input data
    if (!title || !description || !dueDate) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new assignment
    const newAssignment = new Assignment({
      title,
      description,
      dueDate
    });

    await newAssignment.save();

    res.status(201).json(newAssignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add assignment.' });
  }
};
