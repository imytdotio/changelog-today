import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const nav = "hover:bg-gray-200 duration-200 p-2 rounded-md";
  const { user } = useContext(AuthContext);
  return (
    <div className="flex w-full md:w-96 m-auto my-4">
      <ul className="flex flex-1 gap-1">
        <NavLink className={nav} to="/">
          Home
        </NavLink>
      </ul>
      <ul className="flex gap-1">
        <NavLink className={nav} to="/u/imyt.io">
          {/* It should be redirected to :userHandle */}
          {user ? "true" : "false"}
        </NavLink>
        <NavLink className={nav} to="login">
          Logout
        </NavLink>
      </ul>
    </div>
  );
};
