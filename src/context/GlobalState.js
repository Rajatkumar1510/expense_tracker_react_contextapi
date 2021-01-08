import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

// PRovider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  const deleteTransactions = (id) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id
    });
  };

  const addTransactions = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTIONS',
      payload: transaction
    })
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransactions, addTransactions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
