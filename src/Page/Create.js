import React, { useState } from "react";
import { Button, Label, TextInput } from "../Components/Components";

/**
 * @author
 * @function Create
 **/

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
          <TextInput type="text" onChange={(e) => setTitle(e.target.value)} />
        </Label>

        <Label text="Project">
          <TextInput type="text" onChange={(e) => setProject(e.target.value)} />
        </Label>

        <Label text="Tags">
          <TextInput type="text" onChange={(e) => setTags(e.target.value)} />
        </Label>

        {tags && tags.map((tag) => <p></p>)}

        <p className="mr-4 px-2 text-gray-600 text-sm">Note</p>
        <textarea
          className="border p-2 h-64 md:w-96 w-full rounded-xl"
          onChange={(e) => setNote(e.target.value)}
        />
        <br />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
