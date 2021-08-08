import React, { createContext, useContext, useReducer } from "react";
import Products from "../data.json";
import { reducer } from "./reducer";
const Data = createContext([]);
const initialState = Products;

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (!state) {
    return;
  }
  const productInCart = state.filter((product) => product.inCart);
  const productInWish = state.filter((product) => product.inWish);
  return (
    <Data.Provider value={{ state, productInCart, productInWish, dispatch }}>
      {children}
    </Data.Provider>
  );
};
export const useData = () => {
  return useContext(Data);
};
