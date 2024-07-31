import { useState } from "react";
import TimeTableEventButton from "./TimeTableEventButton";
import TimeTableGrid from "./TimeTableGrid";
import DayHeader from "./DayHeader";

const Day = ({ hours, day }) => {
  const [tasks, setTasks] = useState([]);
  const [startIndex, setStartIndex] = useState(-1);
  const [mouseDown, setMouseDown] = useState(false);
  const [endIndex, setEndIndex] = useState(-1);

  let handleMouseUp = (event) => {
    setTasks(
      tasks.concat({
        ss: startIndex,
        se: endIndex + 1,
        color: "rgba(127,0,255,0.7)",
        text: "Volley ball practice",
      })
    );

    console.log("index:" + startIndex);
    setMouseDown(false);
  };

  let handleMouseOver = (event, index) => {
    if (mouseDown) {
      event.target.style.backgroundColor = "rgba(127,0,255,0.2)";
    }
    setEndIndex(index);
  };

  let handleMouseDown = (event, index) => {
    event.target.style.backgroundColor = "rgba(127,0,255,0.2)";
    setMouseDown(true);
    setStartIndex(index);
  };

  return (
    <div className="Day">
      <DayHeader>{day}</DayHeader>
      {(() => {
        const lines = [];

        for (let i = 0; i < hours; i++) {
          lines.push(
            <TimeTableGrid
              key={i}
              onClickFunc={handleMouseUp}
              onMouseDownFunc={handleMouseDown}
              onMouseOverFunc={handleMouseOver}
              index={i + 2}
            ></TimeTableGrid>
          );
        }
        return lines;
      })()}

      {tasks.map((item) => (
        <TimeTableEventButton
          se={item.se}
          ss={item.ss}
          color={item.color}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Day;
