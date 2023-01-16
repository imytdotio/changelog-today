import React from "react";
import { Profile } from "../Components/Profile";
import { Changelog } from "../Components/Changelog";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Changelog
        title="New Project: Changelog.today"
        project={{ name: "Changelog", color: "gray" }}
        tag={{ name: "🚀 New Project", color: "orange" }}
        date={"today"}
        content="之前見到 Brian Lovin 分享過每個 developer 都應該做一個 Personal Changelog，記錄自己創作嘅過程。咁不如就將呢樣嘢變成一個 product，一方面可以幫助我 keep 到個 changelog，亦可以幫其他 developer / content creator 記錄自己一步步成長、經營嘅平台。"
      />
    </div>
  );
};
