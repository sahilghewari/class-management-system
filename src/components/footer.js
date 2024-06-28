import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis vel felis ultrices bibendum. Ut nec viverra leo.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +1234567890</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom-text">Talent Engaged Classes &copy; 2024 | Designed by YourName</p>
    </footer>
  );
}

export default Footer;
