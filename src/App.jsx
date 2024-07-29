import { useState } from "react";
import SideBar from "./components/SideBar";
import "./App.css";
import TimeTable from "./components/TimeTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="App">
      <SideBar />
      <TimeTable />
    </div>
  );
}

export default App;
