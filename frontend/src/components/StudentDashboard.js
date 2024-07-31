import React from 'react';
import './StudentDashboard.css';

// Importing components
//

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/assignments">Assignments</a></li>
            <li><a href="/attendance">Attendance</a></li>
            <li><a href="/grades">Grades</a></li>
          </ul>
        </nav>
        <main className="dashboard-main">
          
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
