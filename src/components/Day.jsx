import React from "react";
import TimeTableEventButton from "./TimeTableEventButton";

const Day = ({ hours, day }) => {
  //const [mouseDown, setMouseDown] = useState(false);

  let ClickHandler = (event) => {
    if (event.target.style.backgroundColor === "blue") {
      event.target.style.backgroundColor = "white";
    } else {
      event.target.style.backgroundColor = "blue";
    }
  };

  return (
    <div className="Day">
      <h1>{day}</h1>
      {(() => {
        const lines = [];

        for (let i = 0; i <= hours; i++) {
          lines.push(
            <TimeTableEventButton onClick={ClickHandler}>
              a
            </TimeTableEventButton>
          );
        }

        return lines;
      })()}
    </div>
  );
};

export default Day;
