import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
  const [showPopUp, setShowPopUp] = useState(false);
  const [maxVal, setMaxVal] = useState(0);
  const [minVal, setMinVal] = useState(0);

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
    let min = 0;
    let max = 0;
    if (mouseDown) {
      for (let i = 0; i < highlights.length; i++) {
        if (highlights[i].id < highlights[min].id) {
          min = i;
        }
      }
      for (let i = 0; i < highlights.length; i++) {
        if (highlights[i].id > highlights[min].id) {
          max = i;
        }
      }
      setMaxVal(highlights[max].id);
      setMinVal(highlights[min].id);
      console.log(min);
      console.log(max);

      let id = highlights[min].id;
      setHighlights(highlights.toSpliced(min, 1, { id: id, popUp: true }));
      //console.log(id);
    }

    setMouseDown(false);
  };

  let handleMouseOver = (event, index) => {
    if (mouseDown) {
      setHighlights(highlights.concat({ id: index }));
      setEndIndex(index);
    }
    // console.log(highlights);
  };

  let handleMouseDown = (event, index) => {
    setMouseDown(true);
    setStartIndex(index);
    setEndIndex(index);
    setHighlights(highlights.concat({ id: index, popUp: false }));
  };

  let handleReset = (event) => {
    setMouseDown(false);
    setHighlights([]);
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
    console.log(text);
    setHighlights([]);
    setMouseDown(false);
    // console.log(maxVal);
    // console.log(minVal);
  };

  let handleCancel = (event) => {
    setHighlights([]);
    setMouseDown(false);
  };

  // Handle highlight

  return (
    <div className="Day" onMouseLeave={handleReset}>
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
        />
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
