import React, { useEffect, useState } from "react";
import { Profile } from "../Components/Profile";
import { Changelog } from "../Components/Changelog";
import { supabase } from "../Config/supabaseClient";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  const fetchChangelogs = async () => {
    const { data, error } = await supabase.from("changelogs").select();

    if (error) {
      setError(error);
      console.log(error.message);
    }

    if (data) {
        console.log(data)
      setLogs(data);
      setError(null);
    }
  };
  useEffect(() => {
    fetchChangelogs();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {error && <p>{error.message}</p>}
      {logs &&
        logs.map((log) => {
          return (
            <Changelog
              title={log.title}
              project={log.project}
              tag={{ name: log.tag, color: log.tagColor }}
              date={log.created_at}
              content={log.note}
              key={log.id}
            />
          );
        })}
    </div>
  );
};
