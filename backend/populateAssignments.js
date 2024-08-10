const mongoose = require('mongoose');
const Assignment = require('./models/Assignment'); // Adjust the path if necessary

// Connect to MongoDB
mongoose.connect('mongodb+srv://sahilghewari:sahil2004@cluster0.qawz3bg.mongodb.net/sampledb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  seedDatabase();
})
.catch(err => console.error('MongoDB connection error:', err));

async function seedDatabase() {
  const assignments = [
    {
      title: 'Mathematics Homework',
      description: 'Solve exercises from Chapter 5.',
      dueDate: '2024-08-15',
      submittedBy: 'student1',
      fileUrl: 'http://example.com/assignment1.pdf',
    },
    {
      title: 'Physics Lab Report',
      description: 'Write a report on the lab experiment conducted.',
      dueDate: '2024-08-20',
      submittedBy: 'student2',
      fileUrl: 'http://example.com/assignment2.pdf',
    },
    {
      title: 'History Essay',
      description: 'Write an essay on World War II.',
      dueDate: '2024-08-25',
      submittedBy: 'student3',
      fileUrl: 'http://example.com/assignment3.pdf',
    },
  ];

  try {
    await Assignment.deleteMany(); // Clear existing assignments
    await Assignment.insertMany(assignments);
    console.log('Fake assignments added');
  } catch (err) {
    console.error('Error adding assignments:', err);
  } finally {
    mongoose.disconnect();
  }
}
