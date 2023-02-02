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
  const [filters, setFilters] = useState([]);

  const fetchChangelogs = async () => {
    const { data, error } = await supabase
      .from("changelogs")
      .select()
      .order("created_at", { ascending: false });

    if (error) {
      setError(error);
      console.log(error.message);
    }

    if (data) {
      console.log(data);
      setLogs(data);
      setError(null);
    }
  };
  useEffect(() => {
    fetchChangelogs();
  }, []);

  const fetchProjects = async (name) => {
    const { data, error } = await supabase
      .from("changelogs")
      .select()
      // .eq('uid', uid)
      .eq("project", name);

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setFilters([...filters, name]);
      setLogs(data);
    }
  };

  const fetchTags = async (name) => {
    const { data, error } = await supabase
      .from("changelogs")
      .select()
      // .eq('uid', uid)
      .eq("tag", name);

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      console.log(data);
      setLogs(data);
      setFilters([...filters, name]);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {error && <p>{error.message}</p>}
      <div className="flex flex-row justify-center mx-auto md:w-96 w-full ">
        {
          <div className="my-auto flex-1 text-left flex flex-row gap-2">
            {filters.map((filter) => (
              <p className="border border-gray-200 rounded-full px-2">{filter}</p>
            ))}
          </div>
        }
        {filters.length > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              fetchChangelogs();
              setFilters([]);
            }}
            className="bg-gray-300 rounded-full px-2 my-2"
          >
            Reset Filter
          </button>
        )}
      </div>
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
              projectSelected={(name) => fetchProjects(name)}
              tagSelected={(name) => fetchTags(name)}
            />
          );
        })}
    </div>
  );
};
