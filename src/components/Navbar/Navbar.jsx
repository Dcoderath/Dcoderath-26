import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-text">dcoderath</div>
      <div className="navbar-right-container">
        <div className="navbar-vertical-line"></div>
        <div className="navbar-box">
          {/* Removed expanded logic and close button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
