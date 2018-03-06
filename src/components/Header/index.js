import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-master">
      <div className="header-nintendo-image">
        <img
          className="nintendo-image"
          alt=""
          src="https://cdn.mos.cms.futurecdn.net/2YBLrRBS3KrMr8ffZrkVzi-1200-80.jpg"
        />
      </div>
      <div className="header-title">
        <div>
          <h1>Nintendo Switch Games</h1>
        </div>
      </div>
      <div className="header-search">
        <input type="text" className="btn-search" placeholder="Search.." />
      </div>
    </div>
  );
};

export default Header;
