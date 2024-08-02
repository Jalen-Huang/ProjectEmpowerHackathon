import { useState } from "react";
import WeekendProvider from "./components/WeekendContext";
import React from "react";
import SideBar from "./components/SideBar";
import "./App.css";
import TimeTable from "./components/TimeTable";
import HalfHourProvider from "./components/HalfHourContext";

export const WeekendContext = React.createContext();

function App() {
  return (
    <HalfHourProvider value={{ hour: 24, size: "100px" }}>
      <WeekendProvider value={false}>
        <div className="App">
          <SideBar />
          <TimeTable />
        </div>
      </WeekendProvider>
    </HalfHourProvider>
  );
}

export default App;
