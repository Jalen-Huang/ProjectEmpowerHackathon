import React, { useState, useContext } from "react";

const WeekendContext = React.createContext();
const UpdateWeekendContext = React.createContext();

export const useWeekendContext = () => {
  return useContext(WeekendContext);
};

export const useUpdateWeekendContext = () => {
  return useContext(UpdateWeekendContext);
};

export const WeekendProvider = ({ value, children }) => {
  const [weekend, setWeekend] = useState(value);
  return (
    <WeekendContext.Provider value={weekend}>
      <UpdateWeekendContext.Provider value={setWeekend}>
        {children}
      </UpdateWeekendContext.Provider>
    </WeekendContext.Provider>
  );
};

export default WeekendProvider;
