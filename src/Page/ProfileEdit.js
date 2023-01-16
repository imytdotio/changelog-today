import React, { useState } from "react";
import { Profile } from "../Components/Profile";
import { Button, Label, TextInput } from "../Components/Components";
import { FaInstagram, FaTwitter } from "react-icons/fa";

/**
 * @author
 * @function ProfileEdit
 **/

const SocialLink = (props) => {
  return (
    <div className="flex m-2 h-12">
      <p className="text-lg mr-4 mt-4">
        {props.icon == "twitter" ? <FaTwitter /> : <FaInstagram />}
      </p>
      <TextInput value={props.link} />
    </div>
  );
};

export const ProfileEdit = (props) => {
  const [username, setUsername] = useState("YT");
  const [motto, setMotto] = useState(
    "He said one day, you'll leave the world behind, so live a life you will remember."
  );
  const [mCount, setMCount] = useState(motto ? motto.length : 0);
  const [selfIntro, setSelfIntro] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "
  );
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Edit Profile</h1>
      <form
        className="text-left w-full md:w-96 m-auto"
        onSubmit={submitHandler}
      >
        {/* TODO: Avatar */}
        <Label text="Username">
          <TextInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label text="Motto">
          <TextInput
            type="text"
            value={motto}
            onChange={(e) => {
              setMotto(e.target.value);
              setMCount(e.target.value.length);
            }}
            maxLength={90}
          />
          <p
            className={`text-sm ml-2 ${
              mCount == 90
                ? "text-pink-600"
                : mCount > 75
                ? "text-orange-600"
                : mCount > 60
                ? "text-orange-300"
                : "text-gray-600"
            }`}
          >
            {mCount}/90
          </p>
        </Label>
        <Label text="Self Introduction">
          <textarea
            value={selfIntro}
            className="border p-2 h-64 md:w-96 w-full rounded-xl"
            onChange={(e) => setSelfIntro(e.target.value)}
          />
        </Label>
        {/* TODO: Tags */}
        <Label text="links">
          {/* TODO: should be changed to this structure */}
          {/* TODO: {socialLinks.map(socialLink => {
                return <SocialLink icon='' link = ''/>
            })} */}
          <SocialLink icon="instagram" link="https://instagram.com/imyt.io" />
          <SocialLink icon="twitter" link="https://twitter.com/imyt_io" />
        </Label>
      </form>
      <hr className="w-96 mt-8 mb-4 m-auto"/>
      <h3 className="font-bold text-xl mb-4">Preview</h3>
      <Profile username={username} motto={motto} selfIntro={selfIntro} />
      <Button type="submit">Update</Button>
    </div>
  );
};
