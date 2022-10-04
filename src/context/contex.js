import { createContext, createElement, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ProviderContext({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async (email, password, user) => {
    await signInWithEmailAndPassword(auth, email, password, user);
  };

  return (
    <getContext.Provider value={{ user, setUser, login }}>
      {children}
    </getContext.Provider>
  );
}
