import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // regstor user
  const registor = async (user) => {
    console.log(user);
  };

  // login user
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // logout user
  const logout = async (user) => {
    console.log("logout");
  };

  // check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("check");
  };

  return (
    <AuthContext.Provider
      value={{ user, error, registor, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
