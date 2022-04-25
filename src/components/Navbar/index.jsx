import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>ini Navbar</h1>
      <Outlet />
    </div>
  );
};

export default Navbar;
