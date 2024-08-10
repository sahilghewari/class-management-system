import React from 'react';
import './styles/Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Teacher Dashboard</h1>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input" 
          />
        </div>
        <div className="profile-section">
          <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
          <span className="teacher-name">John Doe</span>
          <div className="notifications">
            <span className="notification-icon">🔔</span>
            <span className="notification-count">5</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
