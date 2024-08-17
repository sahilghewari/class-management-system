import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import './styles/DocumentUpload.css';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [uploadDate, setUploadDate] = useState(new Date().toLocaleString());
  const [documents, setDocuments] = useState([]); // State to store uploaded documents
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of uploaded documents on component mount
    axios.get('http://localhost:5000/api/documents')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });

    // Update the upload date and time every second
    const intervalId = setInterval(() => {
      setUploadDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file && description && subject) {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('description', description);
      formData.append('subject', subject);
      formData.append('uploadDate', uploadDate);

      // Post request to upload the document to the database
      axios.post('http://localhost:5000/api/documents/upload', formData)
        .then(response => {
          alert('Document uploaded successfully!');
          setDocuments([...documents, response.data]); // Update documents state with new document
          setFile(null);
          setDescription('');
          setSubject('');
        })
        .catch(error => {
          console.error('There was an error uploading the document!', error);
        });
    } else {
      alert('Please complete all fields and select a file to upload.');
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/documents/${id}`)
      .then(response => {
        alert('Document deleted successfully!');
        setDocuments(documents.filter(doc => doc._id !== id)); // Update documents state after deletion
      })
      .catch(error => {
        console.error('There was an error deleting the document!', error);
      });
  };

  const handleGoBack = () => {
    navigate('/teacher/dashboard');
  };

  return (
    <div className="document-upload-container">
      <div className="upload-section">
        <h2>Upload Documents</h2>
        <input type="file" onChange={handleFileChange} id="file-upload" style={{ display: 'none' }} />
        <label htmlFor="file-upload" className="file-label">
          <FontAwesomeIcon icon={faUpload} className="upload-icon" /> Select Document
        </label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="input-field subject-field"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field description-field"
        />
        <p className="upload-date">Upload Date & Time: {uploadDate}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={!file || !description || !subject}
          startIcon={<FontAwesomeIcon icon={faUpload} />}
          className="upload-button"
        >
          Upload
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGoBack}
          startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          className="back-button"
        >
          Back to Dashboard
        </Button>
      </div>

      <div className="document-list">
        <h3>Uploaded Documents</h3>
        {documents.length === 0 ? (
          <p>No documents uploaded yet.</p>
        ) : (
          documents.map(doc => (
            <div key={doc._id} className="document-card">
              <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="document-link">
                {doc.fileName}
              </a>
              <p className="document-subject">{doc.subject}</p>
              <p className="document-description">{doc.description}</p>
              <p>Uploaded At: {new Date(doc.uploadedAt).toLocaleString()}</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(doc._id)}
                startIcon={<FontAwesomeIcon icon={faTrash} />}
                className="delete-button"
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
