import { useState, useEffect } from "react";
import firebase from "../../firebase";

// a hook
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => setUser(response.user))
      .catch((err) => setUser(null));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((response) => {
        console.log(response, "signout");
        setUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setUser(null);
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // remove the listener on component will unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
};

export { useAuthProvider };
