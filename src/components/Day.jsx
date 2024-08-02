import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TimeTableEventButton from "./TimeTableEventButton";
import TimeTableGrid from "./TimeTableGrid";
import DayHeader from "./DayHeader";
import Highlight from "./Highlight";
import { useHalfHourContext } from "./HalfHourContext";

const Day = ({ hours, day, can, setCan }) => {
  const [tasks, setTasks] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [maxVal, setMaxVal] = useState(0);
  const [minVal, setMinVal] = useState(0);
  const [moved, setMoved] = useState(false);

  const halfHour = useHalfHourContext();

  useEffect(() => {
    const localTask = JSON.parse(localStorage.getItem(day));
    if (localTask) {
      setTasks(localTask);
    }
  }, []);

  useEffect(() => {
    if (moved) {
      localStorage.setItem(day, JSON.stringify(tasks));
    }
  }, [tasks]);

  // Delete tasks from worklist
  let handleDeleteTask = (event) => {
    let del;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].ss === deleteIndex) {
        del = i;
      }
    }
    setTasks(tasks.toSpliced(del, 1));
  };

  let handleDeleteGetIndex = (event, si) => {
    setDeleteIndex(si);
  };

  // Handle creation of tasks
  let handleMouseUp = (event) => {
    let min = 0;
    let max = 0;
    if (mouseDown) {
      for (let i = 0; i < highlights.length; i++) {
        if (highlights[i].id < highlights[min].id) {
          min = i;
        }
      }
      for (let i = 0; i < highlights.length; i++) {
        if (highlights[i].id > highlights[max].id) {
          max = i;
        }
      }
      setMaxVal(highlights[max].id);
      setMinVal(highlights[min].id);

      let id = highlights[min].id;
      setHighlights(highlights.toSpliced(min, 1, { id: id, popUp: true }));
      setCan(false);
      //console.log(id);
    }

    setMouseDown(false);
  };

  let handleMouseOver = (event, index) => {
    if (mouseDown) {
      setHighlights(highlights.concat({ id: index }));
    }
    setMoved(true);
  };

  let handleEnter = (e) => {
    setMoved(true);
  };

  let handleMouseDown = (event, index) => {
    if (can) {
      setMouseDown(true);
      setHighlights(highlights.concat({ id: index, popUp: false }));
    }
  };

  let handleReset = (event) => {
    if (can) {
      setMouseDown(false);
      setHighlights([]);
      setMoved(true);
    }
  };

  let handleConfirm = (event, color, text) => {
    setTasks(
      tasks.concat({
        se: maxVal + 1,
        ss: minVal,
        color: color,
        text: text,
      })
    );
    setCan(true);
    console.log(text);
    setHighlights([]);
    setMouseDown(false);
  };

  let handleCancel = (event) => {
    setHighlights([]);
    setMouseDown(false);
    setCan(true);
  };

  // Handle highlight

  return (
    <>
      <div
        className="Day"
        onMouseLeave={handleReset}
        style={{
          gridTemplateRows:
            "100px repeat(" + halfHour.hour + ", " + halfHour.size + ")",
        }}
      >
        <DayHeader>{day}</DayHeader>
        <div className="test"></div>
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
          <Highlight
            i={item.id}
            mouseUp={handleMouseUp}
            popUp={item.popUp}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
            handleOver={handleEnter}
          />
        ))}

        {tasks.map((item) => (
          <TimeTableEventButton
            handlMouseEnter={handleReset}
            se={item.se}
            ss={item.ss}
            color={item.color}
            text={item.text}
            deleteIndex={handleDeleteGetIndex}
            deleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default Day;
