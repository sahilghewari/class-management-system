// src/components/TeacherDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './TeacherDashboard.css';
import backgroundImage from '../assets/background.jpg'; // Update if needed
import NavBar from './Navbar'; // Import the NavBar component

// Placeholder components
import Students from './Students';
import Assignments from './Assignments';
import Attendance from './Attendance';
import OnlineClasses from './OnlineClasses';
import Reports from './Reports';
import Settings from './Settings';

const TeacherDashboard = () => {
  const teacherName = "John Doe"; // Replace with dynamic data if needed

  return (
    <div className="dashboard">
      <NavBar /> {/* Add the NavBar here */}
      <div className="main-content">
        <div className="welcome-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h1 className="welcome-message">Welcome, {teacherName}!</h1>
          <div className="cards-container">
            <div className="card">
              <h3>Attendance Management</h3>
              <p>Manage your students' attendance efficiently.</p>
            </div>
            <div className="card">
              <h3>Assignments</h3>
              <p>Create, manage, and grade assignments.</p>
            </div>
            <div className="card">
              <h3>Online Classes</h3>
              <p>Conduct and schedule online classes.</p>
            </div>
            <div className="card">
              <h3>Reports</h3>
              <p>Generate and view student performance reports.</p>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/online-classes" element={<OnlineClasses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default TeacherDashboard;
