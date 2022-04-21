import react, { createContext } from "react";
import { card, services } from "./Data";

const init = { card, services };

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={init}>{children}</GlobalContext.Provider>
  );
};
