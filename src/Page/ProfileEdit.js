import React, { useContext, useEffect, useState } from "react";
import { Profile } from "../Components/Profile";
import { Button, Label, TextInput } from "../Components/Components";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { isElementType } from "@testing-library/user-event/dist/utils";
import { AuthContext } from "../Context/AuthContext";
import { supabase } from "../Config/supabase";

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
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [motto, setMotto] = useState("");
  const [mCount, setMCount] = useState();
  const [selfIntro, setSelfIntro] = useState("");
  const [handle, setHandle] = useState("");
  const [userId, setUserId] = useState("imyt.io");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const fetchUser = async (uid) => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("uid", uid);

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setUsername(data[0].username);
      setMotto(data[0].motto);
      setSelfIntro(data[0].selfIntro);
      setHandle(data[0].handle);
      setMCount(data[0].motto.length);
    }
  };
  useEffect(() => {
    user && fetchUser(user.user.id);
  }, [user]);

  const updateProfile = async () => {
    const { data, error } = await supabase
      .from("users")
      .update({ username, motto, selfIntro })
      .eq("uid", user.user.id);

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form
        className="text-left w-full md:w-96 m-auto"
        onSubmit={submitHandler}
      >
        {/* TODO: Avatar */}
        <Label text="Handle">
          <TextInput
            type="text"
            value={handle}
            disabled={true}
            onChange={() => {}}
          />
        </Label>
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
      <hr className="w-96 mt-8 mb-4 m-auto" />
      <h3 className="font-bold text-xl mb-4">Preview</h3>
      <Profile
        pfpUrl="https://i.ibb.co/RHKQZx7/IMG-4935.jpg"
        username={username}
        userId={userId}
        motto={motto}
        selfIntro={selfIntro}
      />
      <Button type="submit" onClick={updateProfile}>
        Update
      </Button>
    </div>
  );
};
