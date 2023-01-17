import React from "react";

/**
 * @author
 * @function Profile
 **/

export const Profile = (props) => {
  return (
    <div className="w-full md:w-96 text-left m-auto">
      <div className="flex h-fit mb-4 rounded-md bg-blue-200 p-2 border-box profile-card">
        <img
          src={props.pfpUrl}
          alt="PFP"
          border="0"
          className="rounded-full h-24 mr-4 shadow-xl my-auto"
        />
        <div className="flex-col my-auto">
          <h1 className="font-bold text-2xl">
            {props.username}{" "}
            <span
              className="text-gray-300 hover:cursor-pointer"
              onClick={() => {
                console.log("hi");
              }}
            >
              @{props.userId}
            </span>
          </h1>
          <p className="text-gray-600 text-sm w-full flex-1 text-white">
            {props.motto}
          </p>
        </div>
      </div>
      <p>{props.selfIntro}</p>
    </div>
  );
};
