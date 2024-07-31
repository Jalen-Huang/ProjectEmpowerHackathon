import React from "react";
import "./TimeTable.css";
import Day from "./Day";
import HourLegend from "./HourLegend";
import DayHeader from "./DayHeader";

const TimeTable = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRi"];

  return (
    <div className="TimeTable">
      <HourLegend />
      {days.map((item) => (
        <Day hours={24} day={item} />
      ))}
    </div>
  );
};

export default TimeTable;
