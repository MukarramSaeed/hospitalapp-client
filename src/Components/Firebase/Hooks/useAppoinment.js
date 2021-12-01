import React, { useContext } from "react";
import { appoinmentContext } from "../../Context/AppoinmentContext";

const useAppoinment = () => {
  const appoinment = useContext(appoinmentContext);
  return appoinment;
};

export default useAppoinment;
