import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>© {new Date().getFullYear()} Naveen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
