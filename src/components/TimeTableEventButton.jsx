import React from "react";

const TimeTableEventButton = ({ se, ss, color, text }) => {
  return (
    <div
      className="Task"
      style={{
        backgroundColor: color,
        gridRow: ss + "/" + se,
      }}
    >
      {text.length > 15 ? text.substring(0, 15) + "..." : text}
    </div>
  );
};

export default TimeTableEventButton;
