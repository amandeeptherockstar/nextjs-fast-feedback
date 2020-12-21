import firebase from "./firebase";

const firestore = firebase.firestore();

// what does merge option does? => it allows only store unique key values
export const createUser = (user) =>
  firestore.collection("users").doc(user.uid).set(user, { merge: true });

// website = {name, url}
export const createSite = (website) =>
  firestore.collection("sites").add(website);
