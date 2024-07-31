import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';

// Import placeholder components
import Students from './Students';
import Assignments from './Assignments';
import Attendance from './Attendance';
import OnlineClasses from './OnlineClasses';
import Reports from './Reports';
import Settings from './Settings';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const teacherName = "John Doe"; // Replace with dynamic data if needed

  // Function to handle card clicks
  const handleCardClick = (path) => {
    navigate(`/teacher/dashboard${path}`);
  };

  return (
    <div className="dashboard">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/teacher/dashboard">MyClass</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/students">Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/assignments">Assignments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/attendance">Attendance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/online-classes">Online Classes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/reports">Reports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teacher/dashboard/settings">Settings</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/notifications">Notifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="welcome-section">
          <h1 className="welcome-message">Welcome, {teacherName}!</h1>
          <div className="cards-container">
            <div className="card" onClick={() => handleCardClick('/students')}>
              <h3>Attendance Management</h3>
              <p>Manage your students' attendance efficiently.</p>
            </div>
            <div className="card" onClick={() => handleCardClick('/assignments')}>
              <h3>Assignments</h3>
              <p>Create, manage, and grade assignments.</p>
            </div>
            <div className="card" onClick={() => handleCardClick('/online-classes')}>
              <h3>Online Classes</h3>
              <p>Conduct and schedule online classes.</p>
            </div>
            <div className="card" onClick={() => handleCardClick('/reports')}>
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
