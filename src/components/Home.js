import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Welcome to Talent Engaged Classes</h1>
        <p>Your platform for managing student admissions, tracking performance, and more.</p>
        <div className="home-buttons">
          <button onClick={() => alert('Demo Lecture')}>Demo Lecture</button>
          <button onClick={() => alert('Premium Content')}>Premium Content</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
