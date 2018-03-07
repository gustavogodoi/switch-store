import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about-us" className="about-us">
        About Us
      </Link>
    </div>
  );
};

export default Footer;
