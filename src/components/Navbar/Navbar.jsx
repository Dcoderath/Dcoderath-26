import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleBox = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left-text">dcoderath</div>
      <div className="navbar-right-container">
        <div className="navbar-vertical-line"></div>
        <div
          className={`navbar-box ${expanded ? 'navbar-expanded-box' : ''}`}
          onClick={toggleBox}
        >
          {expanded && (
            <button
              className="navbar-close-button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent toggleBox trigger
                setExpanded(false);
              }}
              aria-label="Close"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
