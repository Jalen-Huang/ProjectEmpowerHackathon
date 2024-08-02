import React, { useState } from "react";
import "./TimeTable.css";
import Day from "./Day";
import HourLegend from "./HourLegend";
import DayHeader from "./DayHeader";

const TimeTable = () => {
  const days = ["SAT", "MON", "TUE", "WED", "THU", "FRI", "SUN"];
  const days2 = ["MON", "TUE", "WED", "THU", "FRI"];
  const [can, setCan] = useState(true);
  const [weekend, setWeekend] = useState(false);

  let handleCan = (val) => {
    setCan(val);
  };

  return (
    <div className="TimeTable">
      <HourLegend />
      {weekend
        ? days.map((item) => (
            <Day hours={24} day={item} can={can} setCan={handleCan} />
          ))
        : days2.map((item) => (
            <Day hours={24} day={item} can={can} setCan={handleCan} />
          ))}
    </div>
  );
};

export default TimeTable;
