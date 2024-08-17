const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the fs module
const Document = require('../models/Document');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/documents')); // Destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Filename with timestamp
  }
});
const upload = multer({ storage: storage });

// Fetch all documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload a new document
router.post('/upload', upload.single('document'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const { description, subject } = req.body; // Get description and subject from request body

    const newDocument = new Document({
      fileName: req.file.originalname,
      fileUrl: `/uploads/documents/${req.file.filename}`,
      description, // Add description
      subject, // Add subject
    });

    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a document
router.delete('/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Construct the path to the file
    const filePath = path.join(__dirname, '../uploads/documents', path.basename(document.fileUrl));

    // Delete the file from the server
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).json({ message: 'Error deleting file' });
      }
    });

    // Delete the document record from the database
    await Document.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Document deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
