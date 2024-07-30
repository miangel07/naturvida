"use client";
import React, { createContext, useContext, useState } from "react";
const RefreshContext = createContext();
export const RefreshProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  const refreshContextValue = { refresh, setRefresh };
  return (
    <RefreshContext.Provider value={refreshContextValue}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  return useContext(RefreshContext);
};
