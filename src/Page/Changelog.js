import React from "react";
import { useParams } from "react-router-dom";

/**
 * @author
 * @function Changelog
 **/

const Project = (props) => {
  return (
    <div
      className={`${props.color} inline-block mr-4 px-4 py-2 rounded-md w-fit my-1`}
    >
      <p>{props.text}</p>
    </div>
  );
};

const Tag = (props) => {
  return (
    <div
      className={`${props.color} inline-block px-4 py-2 rounded-md w-fit my-1`}
    >
      <p>{props.text}</p>
    </div>
  );
};

export const Changelog = (props) => {
  const { id } = useParams();
  return (
    <div className=" w-96 m-auto rounded-md p-4 text-left">
      <h1 className="font-bold">{props.title}</h1>
      <Project text="⚛️ imyt.io" color="bg-red-200" />
      <Tag text="⚙️ Update" color="bg-gray-200" />
      <p className="mt-4">{props.content}</p>
    </div>
  );
};
