import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState("Hello from Context API!");
  const [openDraw, setOpenDraw] = useState(false);

  return (
    <AppContext.Provider
      value={{ contextValue, setContextValue, openDraw, setOpenDraw }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
