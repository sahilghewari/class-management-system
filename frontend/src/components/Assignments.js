// src/components/Assignments.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Assignments.css';

const Assignments = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });
  const [assignments, setAssignments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { title, description, dueDate } = formData;

  useEffect(() => {
    // Fetch existing assignments when component mounts
    const fetchAssignments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/assignments');
        setAssignments(res.data);
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to load assignments.');
      }
    };

    fetchAssignments();
  }, []);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/assignments', formData);
      setSuccessMessage('Assignment added successfully!');
      setFormData({ title: '', description: '', dueDate: '' });
      // Fetch the updated list of assignments
      const res = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(res.data);
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to add assignment. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/assignments/${id}`);
      setAssignments(assignments.filter(assignment => assignment._id !== id));
      setSuccessMessage('Assignment deleted successfully!');
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to delete assignment. Please try again.');
    }
  };

  return (
    
    <div className="assignments-container">
      <h2>Create New Assignment</h2>
      <form className="assignments-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={title} onChange={onChange} placeholder="Assignment Title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={description} onChange={onChange} placeholder="Assignment Description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" name="dueDate" value={dueDate} onChange={onChange} required />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
      
      <div className="assignments-list">
        <h2>Existing Assignments</h2>
        {assignments.length > 0 ? (
          <ul>
            {assignments.map(assignment => (
              <li key={assignment._id}>
                <strong>{assignment.title}</strong> - Due on {new Date(assignment.dueDate).toLocaleDateString()}
                <p>{assignment.description}</p>
                <button className="delete-button" onClick={() => handleDelete(assignment._id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments available.</p>
        )}
      </div>
    </div>
  );
};

export default Assignments;
