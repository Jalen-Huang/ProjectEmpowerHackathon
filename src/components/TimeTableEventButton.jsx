import React from "react";

const TimeTableEventButton = ({ onClick, children }) => {
  return (
    <div className="HourLine" onClick={onClick}>
      {children.length <= 12 ? (
        <p>{children}</p>
      ) : (
        <p>{children.substring(0, 12) + "..."}</p>
      )}
    </div>
  );
};

export default TimeTableEventButton;
