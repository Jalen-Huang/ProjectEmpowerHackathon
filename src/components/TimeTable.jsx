import React, { useState } from "react";
import "./TimeTable.css";
import Day from "./Day";
import HourLegend from "./HourLegend";
import DayHeader from "./DayHeader";
import { useWeekendContext } from "./WeekendContext";
import { useHalfHourContext } from "./HalfHourContext";

const TimeTable = () => {
  const days = ["SAT", "MON", "TUE", "WED", "THU", "FRI", "SUN"];
  const [can, setCan] = useState(true);
  const weekend = useWeekendContext();
  const halfHour = useHalfHourContext();

  let handleCan = (val) => {
    setCan(val);
  };

  return (
    <div className="TimeTable">
      <HourLegend />
      {days.map((item) => (
        <Day hours={halfHour.hour} day={item} can={can} setCan={handleCan} />
      ))}
    </div>
  );
};

export default TimeTable;
