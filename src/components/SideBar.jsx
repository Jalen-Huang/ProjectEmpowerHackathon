import React, { useState, useEffect } from "react";
import SideBarButton from "./SideBarButton";
import "./SideBar.css";
import { useUpdateWeekendContext, useWeekendContext } from "./WeekendContext";
import {
  useHalfHourContext,
  useUpdateHalfHourContext,
} from "./HalfHourContext";

const SideBar = () => {
  const weekend = useWeekendContext();
  const setWeekend = useUpdateWeekendContext();
  const halfHour = useHalfHourContext();
  const setHalfHour = useUpdateHalfHourContext();

  const handleClick = () => {
    console.log("Button was clicked");
  };
  const Settings1 = () => {
    setPage("page1");
    setWeekend(!weekend);
  };
  const Settings2 = () => {
    if (halfHour.hour === 24) {
      setHalfHour({ hour: 48, size: "50px" });
    } else {
      setHalfHour({ hour: 24, size: "100px" });
    }
    setPage("page2");
  };
  const Back = () => {
    setPage("main");
  };
  const [page, setPage] = useState("main");

  useEffect(() => {
    const localPage = JSON.parse(localStorage.getItem("page"));
    if (localPage) {
      setPage(localPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  return (
    <div class="SideBar">
      {page == "main" && (
        <SideBarButton onClick={Settings1}>Settings1</SideBarButton>
      )}
      {page == "main" && (
        <SideBarButton onClick={Settings2}>Settings2</SideBarButton>
      )}
      {page == "page1" && <SideBarButton>Button 1</SideBarButton>}
      {page == "page2" && <SideBarButton>Button 3</SideBarButton>}
      {!(page == "main") && <SideBarButton onClick={Back}>Back</SideBarButton>}
    </div>
  );
};

export default SideBar;
