import React, { createContext, useContext, useReducer } from "react";

// This prepares the dataLayer
export const StateContext = createContext();

// This will wrap our app and provide the data layer to every component inside our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we are able to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
