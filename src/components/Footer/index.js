import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import AboutUs from '../../containers/AboutUs';

const Footer = () => {
  return (
    <div className="footer">
      <Link to={AboutUs}>About Us</Link>
    </div>
  );
};

export default Footer;
