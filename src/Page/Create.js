import React, { useState } from "react";

/**
 * @author
 * @function Create
 **/

const Label = (props) => {
  return (
    <div className="mb-2">
      <p className="mr-4 px-2 text-gray-600 text-sm">{props.text}</p>
      {props.children}
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="mb-2">
      <input
        type={props.type}
        onChange={props.onChange}
        className="p-2 border rounded-md w-full md:w-96"
      />
      {props.children}
    </div>
  );
};

export const Create = (props) => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [tags, setTags] = useState([]);
  const [note, setNote] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(tags);
  };
  return (
    <div>
      <h1>Create</h1>
      <form
        className="text-left w-full md:w-96 m-auto"
        onSubmit={submitHandler}
      >
        <Label text="title">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded-md w-full md:w-96"
          />
        </Label>

        <Label text="Project">
          <input
            type="text"
            onChange={(e) => setProject(e.target.value)}
            className="p-2 border rounded-md w-full md:w-96"
          />
        </Label>

        <Label text="Tags">
          <input
            type="text"
            onChange={(e) => setTags(e.target.value)}
            className="p-2 border rounded-md w-full md:w-96"
          />
        </Label>

        {tags && tags.map((tag) => <p></p>)}

        <p className="mr-4 px-2 text-gray-600 text-sm">Note</p>
        <textarea
          className="border p-2 h-64 md:w-96 w-full rounded-xl"
          onChange={(e) => setNote(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-xl w-full md:w-96 mt-4"
        >
          Create
        </button>
      </form>
    </div>
  );
};
