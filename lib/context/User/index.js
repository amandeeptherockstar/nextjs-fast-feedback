import { createContext, useContext } from "react";

const UserContext = createContext({
  user: null,
  signInWithGithub: () => {},
  signOut: () => {},
});

const useUserAuthContext = () => {
  return useContext(UserContext);
};

export { UserContext, useUserAuthContext };
