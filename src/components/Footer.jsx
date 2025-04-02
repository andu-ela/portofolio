import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Anduela Nurshaba. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
