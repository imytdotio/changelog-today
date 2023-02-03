import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Changelog } from "../Components/Changelog";
import { Profile } from "../Components/Profile";
import { supabase } from "../Config/supabase";
import { AuthContext } from "../Context/AuthContext";

/**
 * @author
 * @function User
 **/

export const User = (props) => {
  const { userHandle } = useParams();
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [logs, setLogs] = useState([]);

  const getUserInfo = async () => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("handle", userHandle);
      // have to use uid
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
      return data;
    }
  };

  useEffect(() => {
    user && getUserInfo();
    getUserLogs();
  }, []);

  return (
    <div>
      {userInfo && (
        <div className="w-full md:w-96 m-auto">
          {user && userInfo.handle === userHandle ? (
            <Link to="/profile">
              <Profile
                username={userInfo.username}
                userId={userInfo.handle}
                pfpUrl={userInfo.pfpUrl}
                motto={userInfo.motto}
                selfIntro={userInfo.selfIntro}
              />
            </Link>
          ) : (
            <Profile
              username={userInfo.username}
              userId={userInfo.handle}
              pfpUrl={userInfo.pfpUrl}
              motto={userInfo.motto}
              selfIntro={userInfo.selfIntro}
            />
          )}
        </div>
      )}
      {user && userInfo.handle === userHandle ? (
        <div className="md:w-96 w-full mx-auto rounded-md my-4 py-4 bg-slate-200 border-2 border-slate-600 hover:ring-2 hover:ring-slate-800/60 hover:ring-offset-2 duration-100">
          <Link to="/create">
            <p>+ Create Log</p>
          </Link>
        </div>
      ) : (
        ""
      )}

      {logs &&
        logs.map((log) => (
          <Changelog
            title={log.title}
            handle={log.handle}
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
