import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-700 flex justify-between p-3 text-white">
      <Link to="/" className="flex items-center">
        <img className="w-18 h-16" src={logo} alt="" />
        <span className="text-3xl">Contact Management App</span>
      </Link>

      <div className="flex items-center text-xl">
        <NavLink
          to="/"
          className="bg-cyan-400/75 hover:bg-cyan-600 px-3 py-1 rounded-md mx-3 transition duration-700 ease-in-out"
        >
          ContactList
        </NavLink>
      </div>
    </header>
  );
};
