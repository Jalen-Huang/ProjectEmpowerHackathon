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
  };

  const Verdana = () => {
    var root = document.querySelector(':root');
    root.style.setProperty("--font-family", "Verdana");
  }

  const FranklinGothic = () => {
    var root = document.querySelector(':root');
    root.style.setProperty("--font-family", "Franklin Gothic Medium");
  }

  const TimesNewRoman = () => {
    var root = document.querySelector(':root');
    root.style.setProperty("--font-family", "Times New Roman");
  }

  const Settings2 = () => {
    setPage("page2");
  };

  const ColdColors = () => {
    var root = document.querySelector(":root");
    root.style.setProperty("--primary", "#2B7A78");
    root.style.setProperty("--secondary", "#3AAFA9");
    root.style.setProperty("--tertiary", "#DEF2F1");
    root.style.setProperty("--quarternary", "#17252A");
    root.style.setProperty("--quinary", "#FEFFFF");
  }

  const WarmColors = () => {
    var root = document.querySelector(":root");
    root.style.setProperty("--primary", "#E64398");
    root.style.setProperty("--secondary", "#F172A1");
    root.style.setProperty("--tertiary", "#F0EBF4");
    root.style.setProperty("--quarternary", "#A1C3D1");
    root.style.setProperty("--quinary", "#B39BC8");
  }

  const HalfHourToggle = () => {
    if (halfHour.hour === 24) {
      setHalfHour({ hour: 48, size: "50px" });
    } else {
      setHalfHour({ hour: 24, size: "100px" });
    }
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
        <SideBarButton onClick={Settings1}>Change Fonts</SideBarButton>
      )}
      {page == "page1" && <SideBarButton onClick={Verdana} style={{fontFamily: "Verdana"}}>Verdana</SideBarButton>}
      {page == "page1" && <SideBarButton onClick={FranklinGothic} style={{fontFamily: "Franklin Gothic Medium"}}>Franklin Gothic</SideBarButton>}
      {page == "page1" && <SideBarButton onClick={TimesNewRoman} style={{fontFamily: "Times New Roman"}}>Times New Roman</SideBarButton>}
      
      {page == "main" && (
        <SideBarButton onClick={Settings2}>Change Colors</SideBarButton>
      )}

      {page == "page2" && <SideBarButton onClick={ColdColors}>Cold Colors</SideBarButton>}
      {page == "page2" && <SideBarButton onClick={WarmColors}>Warm Colors</SideBarButton>}

      {page == "main" && (
        <SideBarButton onClick={HalfHourToggle}>Half Hour Toggle</SideBarButton>
      )}
      {!(page == "main") && <SideBarButton onClick={Back}>Back</SideBarButton>}
    </div>
  );
};

export default SideBar;
