import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allConext =useFirebase();
  return (
    <AuthContext.Provider value={allConext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
