import React, {useState} from "react";
import SideBarButton from "./SideBarButton";
import "./SideBar.css";

const SideBar = () => {
  const handleClick = () => {
    console.log("Button was clicked");
  }
  const Settings1 = () => {
    setPage("page1");
  }
  const Settings2 = () => {
    setPage("page2");
  }
  const Back = () => {
    setPage("main");
  }
  const [page, setPage] = useState("main");
  return (
    <div class="SideBar">
      {page=="main" && <SideBarButton onClick={Settings1}>Settings1</SideBarButton>}
      {page=="main" && <SideBarButton onClick={Settings2}>Settings2</SideBarButton>}
      {page=="page1" && <SideBarButton>Button 3</SideBarButton>}
      {page=="page2" && <SideBarButton>Button 3</SideBarButton>}
      {!(page=="main") && <SideBarButton onClick={Back}>Back</SideBarButton>}
    </div>
  );
};

export default SideBar;
