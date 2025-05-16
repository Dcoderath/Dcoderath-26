import React from "react";
import "./VerticalLines.css";

const VerticalLines = ({ count = 10 }) => {
  return (
    <div className="vertical-lines-wrapper">
      <div className="vertical-lines">
        {Array.from({ length: count }).map((_, i) => (
          <div className="vertical-line" key={i}>
            {/* Animated fill inside each line */}
            <div className="loading-fill"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalLines;
