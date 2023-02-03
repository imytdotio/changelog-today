import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, TextInput } from "./Components";

export const SignIn = () => {
  const { signUp, signInWithPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-col gap-2 justify-center mx-auto ">
        <TextInput
          placeholder="email"
          type="email"
          className="mx-auto"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="password"
          type="password"
          className="mx-auto"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2 justify-center mx-auto w-full md:w-96">
        <Button variant="outline" onClick={() => signUp(email, password)}>
          Sign Up
        </Button>
        <Button onClick={() => signInWithPassword(email, password)}>
          Sign In
        </Button>
      </div>
    </>
  );
};

export const SignOut = () => {
  return <div>SignOut</div>;
};
