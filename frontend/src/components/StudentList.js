import React from 'react';
import './styles/StudentList.css';

const students = [
  { id: 1, name: 'John Doe', grade: 'A' },
  { id: 2, name: 'Jane Smith', grade: 'B' },
  { id: 3, name: 'Sam Wilson', grade: 'A' },
];

const StudentList = () => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
