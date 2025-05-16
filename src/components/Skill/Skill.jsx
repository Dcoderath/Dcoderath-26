import React from 'react';
import './Skill.css';
import D10 from '../../assets/D/D10.svg';  // Adjust path as needed

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="container top">Top Container</div>

      <div className="container middle">
        <img src={D10} alt="D10 dice" className="skill-image" />
      </div>

      <div className="container bottom">Bottom Container</div>
    </div>
  );
};

export default Skill;
