import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { supabase } from "../Config/supabase";
import { AuthContext } from "../Context/AuthContext";
import { FiHome, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { SignOut } from "./Auth";
import { TextInput } from "./Components";

/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const location = useLocation();
  const { userHandle } = useParams();
  const nav = "hover:bg-gray-200 duration-200 p-2 rounded-md";
  const { user, signOut } = useContext(AuthContext);
  const [handle, setHandle] = useState("");

  useEffect(() => {
    const fetchLoggedInHandle = async () => {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("uid", user.user.id);
      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setHandle(data[0].handle);
      }
    };
    user && fetchLoggedInHandle();
  }, [user]);

  return (
    <div className="flex w-full md:w-96 m-auto my-4 justify-between gap-4">
      <ul className="flex gap-1">
        <NavLink className={nav} to="/">
          <FiHome className="my-auto h-full" />
        </NavLink>
      </ul>
      {/* <TextInput
        className="my-auto bg-transparent focus:bg-white"
        placeholder="Search"
      /> */}
      <ul className="flex gap-1">
        {user ? (
          <div className="flex flex-row gap-2">
            <NavLink className={nav} to={`/u/${handle}`}>
              <FiUser className="my-auto h-full" />
            </NavLink>
            <button className={nav} onClick={signOut}>
              <FiLogOut className="my-auto h-full" />
            </button>
          </div>
        ) : (
          <NavLink className={nav} to="/login">
            <FiLogIn className="my-auto h-full" />
          </NavLink>
        )}
      </ul>
    </div>
  );
};
