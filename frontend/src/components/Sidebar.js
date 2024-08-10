import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ setActiveCard }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => setActiveCard('ClassList')}>Class List</li>
        <li onClick={() => setActiveCard('EventCalendar')}>Event Calendar</li>
        <li onClick={() => setActiveCard('StudentList')}>Student List</li>
        <li onClick={() => setActiveCard('Gradebook')}>Gradebook</li>
      </ul>
    </div>
  );
};

export default Sidebar;
