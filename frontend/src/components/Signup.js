import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',  // Default role
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { name, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users/signup', { name, email, password, role });
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with:', err.response.data);
        setErrorMessage('Signup failed: ' + (err.response.data.message || 'Unknown server error'));
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received:', err.request);
        setErrorMessage('Signup failed: No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', err.message);
        setErrorMessage('Signup failed: ' + err.message);
      }
    }
    
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={onSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={role}
            onChange={onChange}
            required
          >
            <option value="student">student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit" className="signup-button">Signup</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <div className="login-link">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
