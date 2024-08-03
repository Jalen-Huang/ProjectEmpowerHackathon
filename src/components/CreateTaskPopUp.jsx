import React, { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

const CreateTaskPopUp = ({ handleConfirm, handleCancel }) => {

  var root = document.querySelector(':root');
  const prime = root.style.getPropertyValue("--primary");
  const [val, setVal] = useState();
  const [color, setColor] = useState(prime);
  const [picker, setPicker] = useState(false);

  

  const change = (event) => {
    setVal(event.target.value);
  };

  let handleColor = (e) => {
    setPicker(!picker);
  };

  return (
    <>
      <div className="PopUp">
        <input value={val} onChange={change} />
        <button type="button" className="Colorbtn" onClick={handleColor}>
          CHANGE COLOR
        </button>
        <div className="Colorbox" style={{ backgroundColor: color }}></div>
        <button
          type="button"
          className="Confirmbtn"
          onClick={(e) => handleConfirm(e, color, val)}
        >
          CONFIRM
        </button>
        <button type="button" className="Cancelbtn" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
      {picker && (
        <HexColorPicker
          style={{ width: "15em", height: "10em", position: "absolute" }}
          className="HexColorPicker"
          color={color}
          onChange={setColor}
        />
      )}
    </>
  );
};

export default CreateTaskPopUp;
