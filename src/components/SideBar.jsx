import React from "react";
import SideBarButton from "./SideBarButton";
import "./SideBar.css";

const SideBar = () => {
  const handleClick = () => {
    console.log("Button was clicked");
  };
  return (
    <div class="SideBar">
      <SideBarButton onClick={handleClick}>Button 1</SideBarButton>
      <SideBarButton>Button 2</SideBarButton>
      <SideBarButton>Button 3</SideBarButton>
      <SideBarButton>Button 4</SideBarButton>
    </div>
  );
};

export default SideBar;
