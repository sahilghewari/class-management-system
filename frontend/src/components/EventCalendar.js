import React from 'react';
import './styles/EventCalendar.css';

const events = [
  { id: 1, title: 'Math Exam', date: '2024-08-15' },
  { id: 2, title: 'Science Fair', date: '2024-08-20' },
  { id: 3, title: 'History Presentation', date: '2024-08-25' },
];

const EventCalendar = () => {
  return (
    <div className="event-calendar">
      <h2>Event Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;
