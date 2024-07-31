const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const role = require('../middleware/role');






// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;

  console.log('Signup request:', { name, email });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, email, password, role });

    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    console.log('User registered successfully:', email);
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(400).json({ message: 'Error: ' + err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login request:', { email });

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials for:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT Payload
    const payload = { id: user.id, name: user.name, role: user.role };

    // Sign token
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ success: true, token: 'Bearer ' + token });
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(400).json({ message: 'Error: ' + err.message });
  }
});

// Dashboard routes for teachers
router.get('/teacher/dashboard', auth, role('teacher'), (req, res) => {
  res.json({ message: 'Welcome to the teacher dashboard', user: req.user });
});

// Dashboard routes for parents
router.get('/parent/dashboard', auth, role('parent'), (req, res) => {
  res.json({ message: 'Welcome to the parent dashboard', user: req.user });
});
// Use auth middleware for profile route
router.get('/profile', auth, (req, res) => {
  res.json({ msg: 'Welcome to your profile', user: req.user });
});

module.exports = router;
