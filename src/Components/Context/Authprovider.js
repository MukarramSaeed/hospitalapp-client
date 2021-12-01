import React, { createContext } from "react";
import Usefirbase from "../Firebase/Hooks/Usefirbase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = Usefirbase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
