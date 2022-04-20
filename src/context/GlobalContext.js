import react, { createContext } from "react";
import { card } from "./Data";

const init = { card };

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={init}>{children}</GlobalContext.Provider>
  );
};
