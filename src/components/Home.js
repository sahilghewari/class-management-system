import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <header className="hero">
          <div className="hero-content">
            <h1>Welcome to Talent Engaged Classes</h1>
            <p>Your platform for managing student admissions, tracking performance, and more.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => alert('Demo Lecture')}>Watch Demo Lecture</button>
              <button className="btn btn-secondary" onClick={() => alert('Premium Content')}>Access Premium Content</button>
            </div>
          </div>
        </header>
        <section className="features">
          <h2>Our Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <i className="fas fa-user-graduate fa-3x"></i>
              <h3>Student Admissions</h3>
              <p>Efficiently manage student admissions with our streamlined process.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line fa-3x"></i>
              <h3>Performance Tracking</h3>
              <p>Track student performance with detailed analytics and reports.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-calendar-check fa-3x"></i>
              <h3>Attendance Management</h3>
              <p>Keep track of student attendance and notify parents of absences.</p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>Join Us Today!</h2>
          <button className="cta-button" onClick={() => alert('Join Now')}>Join Now</button>
          </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;