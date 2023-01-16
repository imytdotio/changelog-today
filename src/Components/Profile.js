import React from "react";

/**
 * @author
 * @function Profile
 **/

export const Profile = (props) => {
  return (
    <div className="w-full md:w-96 text-left m-auto">
      <div className="flex h-24 mb-4">
        <img
          src="https://i.ibb.co/RHKQZx7/IMG-4935.jpg"
          alt="IMG-4935"
          border="0"
          className="rounded-full h-full mr-4"
        />
        <div className="flex-col my-auto">
          <h1 className="font-bold text-2xl">
            {props.username}{" "}
            <span
              className="text-gray-400 hover:cursor-pointer"
              onClick={() => {
                console.log("hi");
              }}
            >
              @imyt.io
            </span>
          </h1>
          <p className="text-gray-600 text-sm w-full flex-1">{props.motto}</p>
        </div>
      </div>
      <p>{props.selfIntro}</p>
    </div>
  );
};
