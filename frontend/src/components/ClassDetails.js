import React from 'react';
import './styles/ClassDetails.css';

const ClassDetails = ({ classData }) => {
    if (!classData) {
        return <div className="class-details">Select a class to see the details.</div>;
    }

    return (
        <div className="class-details">
            <h2>{classData.name} Details</h2>
            <p><strong>Teacher:</strong> {classData.teacher}</p>
            <p><strong>Number of Students:</strong> {classData.students}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ClassDetails;
