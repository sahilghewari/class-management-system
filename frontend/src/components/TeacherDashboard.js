import React from 'react';
import './styles/TeacherDashboard.css';
import { FaVideo, FaFileAlt, FaClipboardList, FaCalendarAlt } from 'react-icons/fa';

const TeacherDashboard = () => {
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
    // Add more timetable entries here...
  ];

  return (
    <div className="teacher-dashboard">
      <div className="sidebar">
        <FaCalendarAlt className="icon" />
        <FaVideo className="icon" />
        <FaFileAlt className="icon" />
        <FaClipboardList className="icon" />
      </div>

      <div className="main-content">
        <div className="dashboard-layout">
          <div className="top-section">
            <div className="overview-text">
              <h2>Welcome To TalentEngaged</h2>
            </div>
            <div className="search-and-profile">
              <input type="text" placeholder="Search" className="search-bar" />
              <div className="profile-icon"></div>
            </div>
          </div>

          <div className="cards-overview">
            <div className="card small-card videos">
              <h3>Videos</h3>
              <FaVideo size={40} />
            </div>
            <div className="card small-card documents">
              <h3>Documents</h3>
              <FaFileAlt size={40} />
            </div>
            <div className="card small-card assignments">
              <h3>Assignments</h3>
              <FaClipboardList size={40} />
            </div>
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
    </div>
  );
};

export default TeacherDashboard;
