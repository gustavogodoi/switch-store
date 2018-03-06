import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-master">
      <Link to="/" className="header-nintendo-image">
        <img
          className="nintendo-image"
          alt=""
          src="https://cdn.mos.cms.futurecdn.net/2YBLrRBS3KrMr8ffZrkVzi-1200-80.jpg"
        />
      </Link>
      <div className="header-title">
        <div>
          <h1>
            <Link to="/">Nintendo Switch Games</Link>
          </h1>
        </div>
      </div>
      <div className="header-search">
        <input type="text" className="btn-search" placeholder="Search.." />
      </div>
    </div>
  );
};

export default Header;
