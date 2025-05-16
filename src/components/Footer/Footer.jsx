import React from "react";
import "./Footer.css";
import n from "../../assets/D/n.png";

const Footer = () => {
  return (
    <div className="fofoter-container">
      <div className="fofoter-content">
        <div
          className="fofoter-left"
          style={{ backgroundImage: `url(${n})` }}
        ></div>

        <svg
          className="fofoter-divider"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="100%"
          viewBox="0 0 2 100"
        >
          <line x1="1" y1="0" x2="1" y2="100" stroke="white" strokeWidth="2" />
        </svg>

        <div className="fofoter-right">
          <h1 className="decorated-dcoderath">DCODERATH</h1>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <p>Imprint © 2025 dcoderath</p>
        </div>
       <div className="footer-container">
  Prajyaraj, Uttar Pradesh - 211001, INDIA | Email: trivedi2693@gmail.com
</div>

        <div className="footer-container">Website By DECODERATH</div>
      </footer>
    </div>
  );
};

export default Footer;
