import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Changelog } from "../Components/Changelog";
import { Profile } from "../Components/Profile";
import { supabase } from "../Config/supabaseClient";

/**
 * @author
 * @function User
 **/

export const User = (props) => {
  const { userHandle } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [logs, setLogs] = useState([]);

  const getUserInfo = async () => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("handle", userHandle);
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      setUserInfo(data[0]);
    }
  };

  const getUserLogs = async () => {
    const { data, error } = await supabase
      .from("changelogs")
      .select()
      .order("id", { ascending: false })
      .eq("handle", userHandle);

    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      setLogs(data);
      console.log(data);
      return data;
    }
  };

  useEffect(() => {
    getUserInfo();
    getUserLogs();
  }, []);

  return (
    <div>
      {userInfo && (
        <Profile
          username={userInfo.username}
          userId={userInfo.handle}
          pfpUrl={userInfo.pfpUrl}
          motto={userInfo.Motto}
          selfIntro={userInfo.Self_Introduction}
        />
      )}
      <div className="md:w-96 w-full mx-auto rounded-md my-4 py-4 bg-slate-200 border-2 border-slate-600 hover:ring-2 hover:ring-slate-800/60 hover:ring-offset-2 duration-100">
        <NavLink to="/create">
          <p>
            + Create Log
          </p>
        </NavLink>
      </div>
      {logs &&
        logs.map((log) => (
          <Changelog
            title={log.title}
            project={log.project}
            tag={{ name: log.tag, color: log.tagColor }}
            date={Date(log.date)}
            content={log.note}
            key={log.id}
          />
        ))}
    </div>
  );
};
