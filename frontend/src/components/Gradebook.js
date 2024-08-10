import React from 'react';
import './styles/Gradebook.css';

const grades = [
  { id: 1, student: 'John Doe', grade: 'A' },
  { id: 2, student: 'Jane Smith', grade: 'B' },
  { id: 3, student: 'Sam Wilson', grade: 'A' },
];

const Gradebook = () => {
  return (
    <div className="gradebook">
      <h2>Gradebook</h2>
      <ul>
        {grades.map((grade) => (
          <li key={grade.id}>
            {grade.student} - Grade: {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gradebook;
