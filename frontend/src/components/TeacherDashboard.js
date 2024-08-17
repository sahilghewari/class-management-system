import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserGraduate, FaFileAlt, FaClipboardList, FaCalendarAlt, FaUserCircle } from 'react-icons/fa'; // Update the import for the new icon
import './styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isManagingAccount, setIsManagingAccount] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Example for clearing a token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const showManageAccount = () => {
    setIsManagingAccount(true);
    setDropdownVisible(false); // Hide dropdown when Manage Account is clicked
  };

  const hideManageAccount = () => {
    setIsManagingAccount(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Add your code to update account info to the backend here
  };

  const notifications = [
    "New assignment uploaded.",
    "Class 10A's attendance has been updated.",
    "Meeting scheduled at 4 PM today.",
    "New message from the principal.",
    "Classroom 12B has been reassigned.",
  ];

  const timetable = [
    { day: "Monday", time: "09:00 AM - 10:00 AM", subject: "Mathematics" },
    { day: "Monday", time: "10:15 AM - 11:15 AM", subject: "Physics" },
    { day: "Monday", time: "11:30 AM - 12:30 PM", subject: "Chemistry" },
    { day: "Tuesday", time: "09:00 AM - 10:00 AM", subject: "Biology" },
    { day: "Tuesday", time: "10:15 AM - 11:15 AM", subject: "History" },
    { day: "Tuesday", time: "11:30 AM - 12:30 PM", subject: "Geography" },
  ];

  return (
    <div className="teacher-dashboard">
      <div className="sidebar">
        <Link to="/students">
          <FaUserGraduate className="icon" /> {/* Updated icon */}
        </Link>
        <Link to="/teacher/documents">
          <FaFileAlt className="icon" />
        </Link>
        <Link to="/assignments">
          <FaClipboardList className="icon" />
        </Link>
      </div>

      <div className="main-content">
        <div className="dashboard-layout">
          <div className="top-section">
            <div className="overview-text">
              <h2>Welcome To TalentEngaged</h2>
            </div>
            <div className="search-and-profile">
              <input type="text" placeholder="Search" className="search-bar" />
              <div className="profile-icon" onClick={toggleDropdown}>
                <FaUserCircle size={40} />
                {isDropdownVisible && (
                  <div className="profile-dropdown">
                    <a onClick={showManageAccount}>Manage Account</a>
                    <a onClick={handleLogout}>Log Out</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="cards-overview">
            <Link to="/students">
              <div className="card small-card students-list">
                <h3>Students List</h3> {/* Updated text */}
                <FaUserGraduate size={40} /> {/* Updated icon */}
              </div>
            </Link>
            <Link to="/teacher/documents">
              <div className="card small-card documents">
                <h3>Documents</h3>
                <FaFileAlt size={40} />
              </div>
            </Link>
            <Link to="/assignments">
              <div className="card small-card assignments">
                <h3>Assignments</h3>
                <FaClipboardList size={40} />
              </div>
            </Link>
          </div>

          <div className="large-card time-table">
            <h3>Time Table</h3>
            <div className="timetable">
              {timetable.map((entry, index) => (
                <div key={index} className="timetable-entry">
                  <span className="day">{entry.day}</span>
                  <span className="time">{entry.time}</span>
                  <span className="subject">{entry.subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="notification-center">
          <h3>Notifications</h3>
          {notifications.map((notification, index) => (
            <div key={index} className="notification">
              {notification}
            </div>
          ))}
        </div>
      </div>

      {isManagingAccount && (
        <div className={`modal-overlay ${isManagingAccount ? 'active' : ''}`}>
          <div className="modal-content">
            <h2>Manage Account</h2>
            <form className="manage-account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter a new password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                />
              </div>
              <div className="manage-account-actions">
                <button type="submit" className="update-button">
                  Update Account
                </button>
                <button type="button" className="back-button" onClick={hideManageAccount}>
                  Back to Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
