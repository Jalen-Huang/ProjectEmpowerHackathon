import React from "react";
import Popup from "reactjs-popup";
import CreateTaskPopUp from "./CreateTaskPopUp";

const Highlight = ({
  i,
  mouseUp,
  popUp,
  handleConfirm,
  handleCancel,
  handleOver,
}) => {
  return (
    <div
      onMouseOver={handleOver}
      className="Highlight"
      onMouseUp={mouseUp}
      style={{
        gridRow: i + "/" + (i + 1),
        gridColumn: "1/2",
      }}
    >
      {popUp && (
        <CreateTaskPopUp
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Highlight;
