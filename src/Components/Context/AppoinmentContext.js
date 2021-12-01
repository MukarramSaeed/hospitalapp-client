import React, { createContext } from "react";
import Appoinment from "../Booking/MakeBooking/Appoinment";
export const appoinmentContext = createContext(null);
const AppoinmentContext = ({ children }) => {
  const allContexts = Appoinment();
  return (
    <appoinmentContext.Provider value={allContexts}>
      {children}
    </appoinmentContext.Provider>
  );
};

export default AppoinmentContext;
