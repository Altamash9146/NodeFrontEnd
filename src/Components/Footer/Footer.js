import React from 'react';
import './Footer.style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h6 className="section-title">Company name</h6>
          <hr className="section-divider" />
          <p>
          <b> The Siren </b><br/>Gives You All the latest Article of Hollywood, Bollywood, etc. If you any Idea to add
           or want some changes feel free to contact me above info.
          </p>
        </div>
        <div className="footer-section">
          <h6 className="section-title">Products</h6>
          <hr className="section-divider" />
          <p>
            <Link to={'./Hollywood'} className="footer-link">Hollywood</Link>
          </p>
          <p>
            <Link to={'./Bollywood'}  className="footer-link">Bollywood</Link>
          </p>
          <p>
            <Link to={'./Fitness'}  className="footer-link">Fitness </Link>
          </p>
          <p>
            <Link to={'./Technology'}  className="footer-link">Technology</Link>
          </p>
        </div>
        <div className="footer-section">
          <h6 className="section-title">Useful links</h6>
          <hr className="section-divider" />
          <p>
            <Link to={'./Fitness'}  className="footer-link">Fitness</Link>
          </p>
          <p>
            <Link to={'./Hollywood'}  className="footer-link">Hollywood</Link>
          </p>
          <p>
            <Link to={'./Technology'}  className="footer-link">Technology</Link>
          </p>
          <p>
            <Link  to={'./Food'} className="footer-link">Food</Link>
          </p>
        </div>
        <div className="footer-section">
          <h6 className="section-title">Contact</h6>
          <hr className="section-divider" />
          <p>
            <i className="fas fa-home"></i> Delhi, NY 10012, India
          </p>
          <p>
            <i className="fas fa-envelope"></i> TheSiren@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> + 91 83789 79969
          </p>
          <p>
            <i className="fas fa-print"></i> + 91 83789 79969
          </p>
        </div>
      </div>
      <div className="footer-text">
        &copy; 2023 Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
