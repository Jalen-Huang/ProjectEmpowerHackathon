import React from "react";

const Highlight = ({ i, mouseUp }) => {
  return (
    <div
      className="Highlight"
      onMouseUp={mouseUp}
      style={{
        gridRow: i + "/" + (i + 1),
        gridColumn: "1/2",
        backgroundColor: "rgba(127,0,255,0.2)",
        zIndex: "0",
      }}
    ></div>
  );
};

export default Highlight;
