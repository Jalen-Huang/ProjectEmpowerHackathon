import React, { useState, useContext } from "react";

const HalfHourContext = React.createContext();
const UpdateHalfHourContext = React.createContext();

export const useHalfHourContext = () => {
  return useContext(HalfHourContext);
};

export const useUpdateHalfHourContext = () => {
  return useContext(UpdateHalfHourContext);
};

export const HalfHourProvider = ({ value, children }) => {
  const [halfHour, setHalfHour] = useState(value);
  return (
    <HalfHourContext.Provider value={halfHour}>
      <UpdateHalfHourContext.Provider value={setHalfHour}>
        {children}
      </UpdateHalfHourContext.Provider>
    </HalfHourContext.Provider>
  );
};

export default HalfHourProvider;
