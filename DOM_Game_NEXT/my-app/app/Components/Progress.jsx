import React from "react";

const Progress = ({ click, className = "", style, boxCount }) => {
  const percentage = Math.min(100, Math.round((click / boxCount) * 100));

  return (
    <div className={`progress ${className}`} style={style}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={click}
        aria-valuemin="0"
        aria-valuemax={boxCount}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Progress;
