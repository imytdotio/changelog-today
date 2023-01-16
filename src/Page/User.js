import React from "react";
import { useParams } from "react-router-dom";
import { Changelog } from "../Components/Changelog";
import { Profile } from "../Components/Profile";

/**
 * @author
 * @function User
 **/

export const User = (props) => {
  const { user } = useParams();
  return (
    <div>
      <p>{user}</p>
      <Profile
        username="YT"
        motto="He said one day, you'll leave this world behind, so live a life you will remember."
        selfIntro=""
      />
      <Changelog
        title="Test"
        project="Project Name"
        tag={{ name: "🧪 Test", color: "green" }}
        date={new Date()}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        key="1"
      />
      <Changelog
        title="Test"
        project="Project Name"
        tag={{ name: "🔥 Test", color: "orange" }}
        date={new Date()}
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        key="2"
      />
    </div>
  );
};
