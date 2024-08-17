// backend/index.js

const path = require('path');


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/users');
const app = express();
const port = process.env.PORT || 5000;
const assignmentRoutes = require('./routes/assignments'); // Import assignment routes
const cron = require('node-cron');
const documentRoutes = require('./routes/documents');




// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files



// Scheduled task to delete assignments past their due date
cron.schedule('0 0 * * *', async () => { // Runs every day at midnight
  try {
    const now = new Date();
    const result = await AddedAssignment.deleteMany({ dueDate: { $lt: now } });
    console.log(`${result.deletedCount} overdue assignments deleted.`);
  } catch (error) {
    console.error('Error deleting overdue assignments:', error);
  }
});


// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://sahilghewari:sahil2004@cluster0.qawz3bg.mongodb.net/sampledb?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGODB_URI, {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const usersRouter = require('./routes/users');
app.use('/api', userRoutes); // Register routes with '/api' prefix
app.use('/api/assignments', assignmentRoutes); // Register assignment routes with '/api/assignments' prefix
app.use('/api/documents', documentRoutes); // Register document routes with '/api/documents' prefix




app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
