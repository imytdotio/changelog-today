import { createContext, useState } from "react";
import { supabase } from "../Config/supabase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();
  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      console.log(data);
    }
  };

  const signInWithPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      console.log(data);
      setUser(data.user);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signInWithPassword, signOut, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
