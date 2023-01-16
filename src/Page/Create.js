import React, { useState } from "react";
import { Button, Label, TextInput } from "../Components/Components";
import { supabase } from "../Config/supabaseClient";

/**
 * @author
 * @function Create
 **/

export const Create = (props) => {
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  // const [projectColor, setProjectColor] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [note, setNote] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("changelogs")
      .insert({ title, project, tag, tagColor, note })
      .select();

    if (data) {
      console.log(data);
      setTitle("");
      setProject("");
      setTag("");
      setTagColor("");
      setNote("");
      setError(null);
    }

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create</h1>
      <form
        className="text-left w-full md:w-96 m-auto"
        onSubmit={submitHandler}
      >
        <Label text="title">
          <TextInput
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Label>

        <Label text="Project">
          <TextInput
            type="text"
            onChange={(e) => setProject(e.target.value)}
            value={project}
          />
        </Label>

        {/* <Label text="Project Color">
          <TextInput
            type="text"
            onChange={(e) => setProjectColor(e.target.value)}
          />
        </Label> */}

        <Label text="Tag">
          <TextInput
            type="text"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />
        </Label>

        <Label text="Tag Color">
          <TextInput
            type="text"
            onChange={(e) => setTagColor(e.target.value)}
            value={tagColor}
          />
        </Label>

        {/* {tags && tags.map((tag) => <p></p>)} */}

        <p className="mr-4 px-2 text-gray-600 text-sm">Note</p>
        <textarea
          className="border p-2 h-64 md:w-96 w-full rounded-xl"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <br />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
