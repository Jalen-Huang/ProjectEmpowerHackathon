import React from "react";
import "./TimeTable.css";
import Day from "./Day";
import HourLegend from "./HourLegend";

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div class="TimeTable">
      <HourLegend />
      {days.map((item) => (
        <Day hours={24} day={item} />
      ))}
    </div>
  );
};

export default TimeTable;
