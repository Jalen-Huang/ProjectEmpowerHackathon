import React from "react";

const DayHeader = ({ children }) => {
  return (
    <div
      ClassName="DayHeader"
      style={{
        color: "white",
        backgroundColor: "#3AAFA9",
        position: "sticky",
        display: "top",
        width: "100%",
        height: "100px",
      }}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default DayHeader;
