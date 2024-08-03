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
    localStorage.setItem("font-family", JSON.stringify("Verdana"))
  }

  const FranklinGothic = () => {
    var root = document.querySelector(':root');
    root.style.setProperty("--font-family", "Franklin Gothic Medium");
    localStorage.setItem("font-family", JSON.stringify("Franklin Gothic Medium"))
  }

  const TimesNewRoman = () => {
    var root = document.querySelector(':root');
    root.style.setProperty("--font-family", "Times New Roman");
    localStorage.setItem("font-family", JSON.stringify("Times New Roman"))
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

    localStorage.setItem("primary", JSON.stringify("#2B7A78"))
    localStorage.setItem("secondary", JSON.stringify("#3AAFA9"))
    localStorage.setItem("tertiary", JSON.stringify("#DEF2F1"))
    localStorage.setItem("quarternary", JSON.stringify("#17252A"))
    localStorage.setItem("quinary", JSON.stringify("#FEFFFF"))
  }

  const WarmColors = () => {
    var root = document.querySelector(":root");
    root.style.setProperty("--primary", "#E64398");
    root.style.setProperty("--secondary", "#F172A1");
    root.style.setProperty("--tertiary", "#F0EBF4");
    root.style.setProperty("--quarternary", "#A1C3D1");
    root.style.setProperty("--quinary", "#B39BC8");

    localStorage.setItem("primary", JSON.stringify("#E64398"))
    localStorage.setItem("secondary", JSON.stringify("#F172A1"))
    localStorage.setItem("tertiary", JSON.stringify("#F0EBF4"))
    localStorage.setItem("quarternary", JSON.stringify("#A1C3D1"))
    localStorage.setItem("quinary", JSON.stringify("#B39BC8"))
  }

  const Back = () => {
    setPage("main");
  };
  const [page, setPage] = useState("main");

  useEffect(() => {
    const localPage = JSON.parse(localStorage.getItem("page"));
    if (localPage) {
      setPage(localPage);
    }
    const font = JSON.parse(localStorage.getItem("font-family"));
    if (font) {
      var root = document.querySelector(':root');
      root.style.setProperty("--font-family", font);
    }
    const primary = JSON.parse(localStorage.getItem("primary"));
    const secondary = JSON.parse(localStorage.getItem("secondary"));
    const tertiary = JSON.parse(localStorage.getItem("tertiary"));
    const quarternary = JSON.parse(localStorage.getItem("quarternary"));
    const quinary = JSON.parse(localStorage.getItem("quinary"));
    
    if (primary) {
      var root = document.querySelector(':root');
      root.style.setProperty("--primary", primary);
    }
    if (secondary) {
      var root = document.querySelector(':root');
      root.style.setProperty("--secondary", secondary);
    }
    if (tertiary) {
      var root = document.querySelector(':root');
      root.style.setProperty("--tertiary", tertiary);
    }
    if (quarternary) {
      var root = document.querySelector(':root');
      root.style.setProperty("--quarternary", quarternary);
    }
    if (quinary) {
      var root = document.querySelector(':root');
      root.style.setProperty("--quinary", quinary);
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
      {!(page == "main") && <SideBarButton onClick={Back}>Back</SideBarButton>}
    </div>
  );
};

export default SideBar;
