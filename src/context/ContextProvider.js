
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [contextValue, setContextValue] = useState("Hello from Context API!");

    return (
        <AppContext.Provider value={{ contextValue, setContextValue }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
