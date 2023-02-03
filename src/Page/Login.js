import React, { useContext } from "react";
import { SignIn } from "../Components/Auth";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { user } = useContext(AuthContext);
  return <>{user ? "" : <SignIn />}</>;
};

export default Login;
