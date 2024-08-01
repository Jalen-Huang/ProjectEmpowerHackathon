import React from "react";

const TimeTableEventButton = ({
  se,
  ss,
  color,
  text,
  deleteTask,
  deleteIndex,
  handlMouseEnter,
}) => {
  return (
    <div
      onMouseEnter={handlMouseEnter}
      className="Task"
      style={{
        backgroundColor: color,
        gridRow: ss + "/" + se,
      }}
    >
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        onClick={deleteTask}
        onMouseDown={(e) => deleteIndex(e, ss)}
      ></button>
      <p>{text}</p>
    </div>
  );
};

export default TimeTableEventButton;
