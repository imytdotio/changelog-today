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
        username="Elon Musk"
        userId = 'elon'
        pfpUrl = 'https://i.ibb.co/CJnGFh5/IY9-Gx6-Ok-400x400.jpg'
        motto="State-Affiliated Media"
        selfIntro=""
      />
      <Changelog
        title="Rocket built. Ready to fire."
        project="SpaceX"
        tag={{ name: "⭐️ Update", color: "orange" }}
        date={new Date()}
        content="Falcon Heavy successfully launches USSF-67 to orbit."
        key="1"
      />
      <Changelog
        title="Tesla owners collectively saved $2B+ in 2022 ⚡️"
        project="Tesla"
        tag={{ name: "💎 Milestone", color: "blue" }}
        date={new Date()}
        content="You can view your charging history & savings for the full year in the Tesla app. Thrilled to see that much amount of savings in only a year."
        key="2"
      />
    </div>
  );
};
