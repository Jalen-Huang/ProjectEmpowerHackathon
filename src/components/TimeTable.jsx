import React, { useState } from "react";
import "./TimeTable.css";
import Day from "./Day";
import HourLegend from "./HourLegend";
import DayHeader from "./DayHeader";

const TimeTable = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const [can, setCan] = useState(true);

  let handleCan = (val) => {
    setCan(val);
  };

  return (
    <div className="TimeTable">
      <HourLegend />
      {days.map((item) => (
        <Day hours={24} day={item} can={can} setCan={handleCan} />
      ))}
    </div>
  );
};

export default TimeTable;
