import React, { createContext, useContext, useState } from "react";

interface PrintModeContextType {
  isPrintMode: boolean;
  setPrintMode: (value: boolean) => void;
}

const PrintModeContext = createContext<PrintModeContextType | undefined>(undefined);

export const PrintModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const setPrintMode = (value: boolean) => {
    setIsPrintMode(value);
  };

  return (
    <PrintModeContext.Provider value={{ isPrintMode, setPrintMode }}>
      {children}
    </PrintModeContext.Provider>
  );
};

export const usePrintMode = () => {
  const context = useContext(PrintModeContext);
  if (context === undefined) {
    throw new Error("usePrintMode must be used within a PrintModeProvider");
  }
  return context;
};
