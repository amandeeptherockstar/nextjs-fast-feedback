import { useState, useEffect } from "react";
import firebase from "@/lib/firebase";
import { createUser } from "@/lib/firestore";

// a hook
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const formatUser = (user) => ({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  });

  const signInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        // create the user in firestore
        const formattedUser = formatUser(response.user);
        createUser(formattedUser);
        setUser(formattedUser);
      })
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
        setUser(formatUser(user));
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
