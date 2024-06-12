import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span>Tailblocks</span>
          </a>
        </div>
        <p className="footer-text">Air plant banjo lyft occupy retro adaptogen indego</p>
        <div className="footer-links">
          <ul>
            <li><a href="#">First Link</a></li>
            <li><a href="#">Second Link</a></li>
            <li><a href="#">Third Link</a></li>
            <li><a href="#">Fourth Link</a></li>
          </ul>
        </div>
      </div>
      <div className="container bottom-footer">
        <p>&copy; 2020 Tailblocks — <a href="https://twitter.com/knyttneve" target="_blank" rel="noopener noreferrer">@knyttneve</a></p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
