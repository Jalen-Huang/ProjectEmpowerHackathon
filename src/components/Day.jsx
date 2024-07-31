import { useState } from "react";
import TimeTableEventButton from "./TimeTableEventButton";
import TimeTableGrid from "./TimeTableGrid";
import DayHeader from "./DayHeader";
import Highlight from "./Highlight";

const Day = ({ hours, day }) => {
  const [tasks, setTasks] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [startIndex, setStartIndex] = useState(-1);
  const [mouseDown, setMouseDown] = useState(false);
  const [endIndex, setEndIndex] = useState(-1);
  const [deleteIndex, setDeleteIndex] = useState(-1);

  // Delete tasks from worklist
  let handleDeleteTask = (event) => {
    setTasks(
      tasks.filter((item) => {
        item.ss !== deleteIndex;
      })
    );
  };
  let handleDeleteGetIndexe = (event, si) => {
    setDeleteIndex(si);
  };

  // Handle creation of tasks
  let handleMouseUp = (event) => {
    setHighlights([]);

    if (mouseDown) {
      if (startIndex <= endIndex) {
        setTasks(
          tasks.concat({
            ss: startIndex,
            se: endIndex + 1,
            color: "rgba(127,0,255,0.7)",
            text: "Volley ball practice",
          })
        );
      } else {
        setTasks(
          tasks.concat({
            se: startIndex + 1,
            ss: endIndex,
            color: "rgba(127,0,255,0.7)",
            text: "Volley ball practice",
          })
        );
      }
    }

    setMouseDown(false);
  };

  let handleMouseOver = (event, index) => {
    if (mouseDown) {
      setHighlights(highlights.concat({ id: index }));
      setEndIndex(index);
    }
    console.log(highlights);
  };

  let handleMouseDown = (event, index) => {
    setMouseDown(true);
    setStartIndex(index);
    setEndIndex(index);
    setHighlights(highlights.concat({ id: index }));
  };

  let handleReset = (event) => {
    setMouseDown(false);
    setHighlights([]);
  };

  // Handle highlight

  return (
    <div className="Day" onMouseLeave={handleReset}>
      <DayHeader>{day}</DayHeader>

      {/* creates grid and add indices */}
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
      {/* end */}

      {highlights.map((item) => (
        <Highlight i={item.id} mouseUp={handleMouseUp} />
      ))}

      {tasks.map((item) => (
        <TimeTableEventButton
          handlMouseEnter={handleReset}
          se={item.se}
          ss={item.ss}
          color={item.color}
          text={item.text}
          deleteIndex={handleDeleteGetIndexe}
          deleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default Day;
