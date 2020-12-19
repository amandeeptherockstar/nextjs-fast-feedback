import { UserContext } from ".";
import { useAuthProvider } from "./useAuthProvider";

const UserAuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export default UserAuthProvider;
