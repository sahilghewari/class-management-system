// src/components/Login.js
import { useNavigate } from 'react-router-dom'; // Change this import
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Change this line


  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users/login', formData);
      const { token } = res.data;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);  // Decode the token using jwtDecode
      const userRole = decoded.role;  // Extract user role from token


        // Redirect based on user role
        if (userRole === 'teacher') {
          navigate('/teacher/dashboard');
        } else if (userRole === 'student') {
          navigate('/student/dashboard');
        }
    } catch (err) {
      console.error(err.response.data);
      setErrorMessage(err.response.data.message || 'Login failed.incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <div className="forgot-password-link">
          <p><a href="/forgot-password">Forgot Password?</a></p>
        </div>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
