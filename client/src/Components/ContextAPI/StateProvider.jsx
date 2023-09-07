import React, { createContext, useContext, useReducer } from "react";

export const MyContext = createContext();
export const StateProvider = ({ initalState, reducer, children }) => {
  <MyContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </MyContext.Provider>;
};

export const useStateValue = () => {
  useContext(MyContext);
};
