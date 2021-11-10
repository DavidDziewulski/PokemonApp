import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Header = () => {
  return (
    <header className="flex  justify-center  p-2 bg-gray-200 shadow-xl ">
      <Link to="/">
        <img src={logo} alt="logo" className="max-w-xs p-2  " />
      </Link>
    </header>
  );
};
