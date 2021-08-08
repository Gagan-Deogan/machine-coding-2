import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
export const Header = () => {
  return (
    <header className="bg-blue-600 h-14 flex items-center justify-between px-16">
      <Logo />
      <div>
        <NavLink
          to="/"
          className="text-lg p-2 text-white hover:bg-coolGray-100 ">
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className="text-lg p-2 text-white hover:bg-coolGray-100 ">
          Cart
        </NavLink>
        <NavLink
          to="/wishlist"
          className="text-lg p-2 text-white hover:bg-coolGray-100 ">
          Wishlist
        </NavLink>
      </div>
    </header>
  );
};
