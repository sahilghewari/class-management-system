// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TeacherDashboard from './components/TeacherDashboard';
import './App.css';
import StudentDashboard from './components/StudentDashboard';
import AssignmentsPage from './components/AssignmentsPage';



const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teacher/dashboard/*" element={isAuthenticated() ? <TeacherDashboard /> : <Navigate to="/login" />} />
          <Route path="/student/dashboard" element={isAuthenticated() ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="/assignments" element={<AssignmentsPage />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
