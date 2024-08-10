import React from 'react';
import './styles/NotificationCenter.css';

const notifications = [
  { id: 1, message: 'New assignment added to Math 101' },
  { id: 2, message: 'Science Fair on 2024-08-20' },
  { id: 3, message: 'History Presentation due on 2024-08-25' },
];

const NotificationCenter = () => {
  return (
    <div className="notification-center">
      <h2>Notification Center</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
