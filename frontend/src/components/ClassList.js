import React from 'react';
import './styles/ClassList.css';

const classData = [
    { id: 1, name: 'Mathematics', students: 30, teacher: 'John Doe' },
    { id: 2, name: 'Science', students: 25, teacher: 'Jane Smith' },
    { id: 3, name: 'History', students: 20, teacher: 'Samuel Green' },
];

const ClassList = ({ onSelectClass }) => {
    return (
        <div className="class-list">
            {classData.map((classItem) => (
                <button 
                    key={classItem.id} 
                    className="class-button" 
                    onClick={() => onSelectClass(classItem)}
                >
                    <h3>{classItem.name}</h3>
                    <p>Teacher: {classItem.teacher}</p>
                    <p>Students: {classItem.students}</p>
                </button>
            ))}
        </div>
    );
};

export default ClassList;
