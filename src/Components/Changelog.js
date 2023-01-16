import React from "react";
import { useParams } from "react-router-dom";

/**
 * @author
 * @function Changelog
 **/

const Project = (props) => {
  return (
    <p
      className={`${props.color} text-gray-700 font-bold inline px-2 mb-2 rounded-full w-fit`}
    >
      @{props.text}
    </p>
  );
};

const Tag = (props) => {
  return (
    <span
      className={`${props.color} inline-block px-4 py-2 rounded-md w-fit my-1`}
    >
      <p>{props.text}</p>
    </span>
  );
};

const color = (color) => {
  switch (color) {
    case "green":
      return "bg-green-200";
    case "blue":
      return "bg-blue-200";
    case "red":
      return "bg-red-200";
    case "orange":
      return "bg-orange-200";
    case "gray":
      return "bg-gray-200";
    case "brown":
      return "bg-orange-900 bg-opacity-30";
    default:
      return "bg-gray-200";
  }
};

export const Changelog = (props) => {
  const { id } = useParams();
  return (
    <div className="w-full md:w-96 m-auto rounded-md p-4 text-left mb-4">
      <Project text={props.project.name} color={color(props.project.color)} />
      <h1 className="font-bold py-1 text-lg">{props.title}</h1>
      <p className="text-gray-600 text-sm mb-4 italic font-light">
        {props.date}
      </p>
      {/* {props.tags.map((tag) => ( */}
      <Tag text={props.tag.name} color={color(props.tag.color)} />
      {/* ))} */}

      <p className="mt-4 w-full md:w-96">{props.content}</p>
    </div>
  );
};
