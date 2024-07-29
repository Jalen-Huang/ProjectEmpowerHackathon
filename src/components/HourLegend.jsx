import React from "react";
import DayHeader from "./DayHeader";

const HourLegend = () => {
  return (
    <div className="HourLegend">
      {(() => {
        const lines = [];

        for (let i = 0; i <= 24; i++) {
          lines.push(<p className="HourText">{i}am</p>);
        }

        return lines;
      })()}
    </div>
  );
};

export default HourLegend;
