import React from "react";
import { Header } from "./common-components/Header";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { Wishlist } from "./pages/Wishlist";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </>
  );
};

export default App;
