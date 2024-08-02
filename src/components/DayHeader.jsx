import React from "react";
import "./TimeTable.css";

const DayHeader = ({ children }) => {
  return (
    <div className="Header">
      <h1>{children}</h1>
    </div>
  );
};

export default DayHeader;
