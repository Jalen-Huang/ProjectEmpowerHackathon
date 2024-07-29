import React from "react";

const Day = ({ hours, day }) => {
  return (
    <div className="Day">
      <h1>{day}</h1>
      {(() => {
        const lines = [];

        for (let i = 0; i <= hours; i++) {
          lines.push(<div className="HourLine"></div>);
        }

        return lines;
      })()}
    </div>
  );
};

export default Day;
