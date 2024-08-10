// backend/models/Assignment.js

const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  submittedBy: {
    type: String, // This could be the student's name or ID
    required: true,
  },
  fileUrl: {
    type: String, // URL to the file submitted by the student
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
