import React from "react";

const TimeTableGrid = ({
  onClickFunc,
  index,
  onMouseDownFunc,
  onMouseOverFunc,
}) => {
  return (
    <div
      className="HourLine"
      onMouseUp={onClickFunc}
      onMouseDown={(e) => onMouseDownFunc(e, index)}
      onMouseOver={(e) => onMouseOverFunc(e, index)}
      style={{
        gridRow: index + "/" + (index + 1),
      }}
    ></div>
  );
};

export default TimeTableGrid;
