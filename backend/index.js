// backend/index.js



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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
app.use('/api/assignments', assignmentRoutes);


app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
