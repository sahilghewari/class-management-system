const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddedAssignmentSchema = new Schema({
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
});

module.exports = mongoose.model('AddedAssignment', AddedAssignmentSchema);
