import React from "react";
import "./SideBarButton.css";

const SideBarButton = ({ children, onClick, style }) => {
  return (
    <button class="SideBarButton" onClick={onClick} style = {style}>
      {" "}
      {children}
    </button>
  );
};

export default SideBarButton;
