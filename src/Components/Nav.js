import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const nav = "hover:bg-gray-200 duration-200 p-2 rounded-md";
  return (
    <div className="flex w-96 m-auto my-4">
      <ul className="flex flex-1">
        <NavLink className={nav} to="/">
          Home
        </NavLink>
        <NavLink className={nav} to="/Create">
          Create
        </NavLink>
      </ul>
      <button className={nav}>Logout</button>
    </div>
  );
};
