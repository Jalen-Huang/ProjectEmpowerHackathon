import React from "react";

const DayHeader = ({ children }) => {
  return (
    <div
      ClassName="DayHeader"
      style={{ color: "white", backgroundColor: "rgba(12, 227, 255,0.5)" }}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default DayHeader;
