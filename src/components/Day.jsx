import { useState } from "react";
import TimeTableEventButton from "./TimeTableEventButton";
import TimeTableGrid from "./TimeTableGrid";

const Day = ({ hours, day }) => {
  const [tasks, setTasks] = useState([]);
  const [currIndex, setCurrIndex] = useState(-1);

  let clickHandler = (event) => {
    setTasks(
      tasks.concat({
        ss: currIndex,
        se: currIndex + 1,
        color: "red",
        text: "Volley ball practice",
      })
    );
    console.log("Tasks:" + tasks.length);
    console.log("index:" + currIndex);
  };

  let handleMouseDown = (event, index) => {
    event.target.style;
    setCurrIndex(index);
  };

  const one = 1;
  const two = 2;
  const three = 3;

  return (
    <div className="Day">
      {(() => {
        const lines = [];

        for (let i = 0; i < hours; i++) {
          lines.push(
            <TimeTableGrid
              key={i}
              onClickFunc={clickHandler}
              onMouseDownfunc={handleMouseDown}
              index={i + 1}
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
