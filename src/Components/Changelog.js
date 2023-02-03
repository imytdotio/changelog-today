import React from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import ReactMarkdown from "react-markdown";

/**
 * @author
 * @function Changelog
 **/

const Project = (props) => {
  return (
    <p
      onClick={props.projectSelected}
      className="bg-gray-200 text-gray-700 font-bold inline px-2 mb-2 rounded-full w-fit cursor-pointer"
    >
      {props.text}
    </p>
  );
};

const Tag = (props) => {
  return (
    <span
      onClick={props.tagSelected}
      // onClick={() => console.log(props.tagSelected)}
      className={`${props.color} border-2 inline-block px-4 py-2 rounded-md w-fit my-1 cursor-pointer`}
    >
      <p>{props.text}</p>
    </span>
  );
};

const color = (color) => {
  switch (color) {
    case "green":
      return "bg-green-200 border-green-600";
    case "blue":
      return "bg-blue-200 border-blue-600";
    case "red":
      return "bg-red-200 border-red-600 ";
    case "orange":
      return "bg-orange-200 border-orange-600";
    case "gray":
      return "bg-gray-200 border-gray-600";
    case "brown":
      return "bg-orange-900 bg-opacity-30 border-orange-900";
    case "purple":
      return "bg-violet-200 border-violet-600";
    default:
      return "bg-gray-200 border-gray-600";
  }
};

export const Changelog = (props) => {
  const { id } = useParams();
  const renderMarkdown = () => {
    return { __html: marked(props.content) };
  };

  return (
    <div className="w-full md:w-96 m-auto rounded-md px-4 py-8 border text-left mb-4">
      <div className="flex flex-row gap-4 h-16">
        <Link to={`/u/${props.handle}`}>
          <img
            src="https://i.ibb.co/RHKQZx7/IMG-4935.jpg"
            className="my-auto h-12 rounded-full ring-2 ring-slate-600 ring-offset-2"
          />
        </Link>
        <div className="flex flex-col my-auto">
          <p className="">
            <Link to={`/u/${props.handle}`}>@{props.handle}</Link>
          </p>
          <Project
            text={props.project}
            projectSelected={() => props.projectSelected(props.project)}
          />
        </div>
      </div>

      <h1 className="font-bold py-1 text-lg">{props.title}</h1>
      <p className="text-gray-600 text-sm mb-4 italic font-light ">
        {new Date(props.date).toDateString()}
      </p>
      {/* {props.tags.map((tag) => ( */}
      <Tag
        text={props.tag.name}
        color={color(props.tag.color)}
        tagSelected={() => props.tagSelected(props.tag.name)}
      />
      {/* ))} */}

      {/* <p className="mt-4 w-full">{props.content}</p> */}
      {/* <p className="mt-4 w-full" dangerouslySetInnerHTML={renderMarkdown()} /> */}
      <ReactMarkdown children={props.content} />
    </div>
  );
};
