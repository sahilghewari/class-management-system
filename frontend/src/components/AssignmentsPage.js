import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/AssignmentsPage.css';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignments, setNewAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch assignments from the server
    axios.get('http://localhost:5000/api/assignments')
      .then(response => {
        setAssignments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the assignments!', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewAssignment({
      ...newAssignment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    setNewAssignments([...newAssignments, { ...newAssignment, id: newAssignments.length + 1 }]);
    setNewAssignment({
      title: '',
      description: '',
      dueDate: '',
    });
  };

  const handleGoBack = () => {
    navigate('/teacher/dashboard');
  };

  return (
    <div className="assignments-page">
      <div className="assignments-section">
        <h2>Received Assignments</h2>
        <div className="assignments-list">
          {assignments.map((assignment) => (
            <div key={assignment._id} className="assignment-card">
              <h3>{assignment.title}</h3>
              <p>{assignment.description}</p>
              <span className="due-date">Due Date: {new Date(assignment.dueDate).toLocaleDateString()}</span>
              <p>Submitted By: {assignment.submittedBy}</p>
              <a href={assignment.fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
            </div>
          ))}
        </div>
      </div>
      <div className="add-assignment-section">
        <h2>Add New Assignment</h2>
        <form onSubmit={handleAddAssignment}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newAssignment.title}
              onChange={handleChange}
              placeholder="Assignment Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newAssignment.description}
              onChange={handleChange}
              placeholder="Assignment Description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Assignment</button>
          <div className="back-button-container">
            <button className="back-button" onClick={handleGoBack}>Back to Dashboard</button>
          </div>
        </form>
      </div>

      <div className="added-assignments-section">
        <h2>Added Assignments</h2>
        <div className="assignments-list">
          {newAssignments.map((assignment) => (
            <div key={assignment.id} className="assignment-card">
              <h3>{assignment.title}</h3>
              <p>{assignment.description}</p>
              <span className="due-date">Due Date: {assignment.dueDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
