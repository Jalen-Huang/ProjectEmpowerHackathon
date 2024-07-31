import React from "react";

const TimeTableGrid = ({ onClickFunc, index, onMouseDownfunc }) => {
  return (
    <div
      className="HourLine"
      onClick={onClickFunc}
      onMouseDown={(e) => onMouseDownfunc(e, index)}
      style={{
        gridRow: index + "/" + (index + 1),
      }}
    ></div>
  );
};

export default TimeTableGrid;
