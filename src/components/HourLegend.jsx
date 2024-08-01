import React from "react";
import DayHeader from "./DayHeader";

const HourLegend = () => {
  return (
    <div className="HourLegend">
      {(() => {
        const lines = [];

        for (let i = 7; i <= 11; i++) {
          lines.push(<p className="HourText">{i}am</p>);
        }
        lines.push(<p className="HourText">{12}pm</p>);
        for (let i = 1; i <= 11; i++) {
          lines.push(<p className="HourText">{i}pm</p>);
        }
        lines.push(<p className="HourText">{12}am</p>);
        for (let i = 1; i <= 6; i++) {
          lines.push(<p className="HourText">{i}am</p>);
        }

        return lines;
      })()}
    </div>
  );
};

export default HourLegend;
