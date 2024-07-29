import React from "react";
import "./SideBarButton.css";

const SideBarButton = ({ children, onClick }) => {
  return (
    <button class="SideBarButton" onClick={onClick}>
      {" "}
      {children}
    </button>
  );
};

export default SideBarButton;
