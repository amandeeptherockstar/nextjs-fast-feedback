import firestore from "./firebase-admin";

export const getSites = async () => {
  const siteSnapshot = await firestore.collection("sites").get();
  if (siteSnapshot.empty) {
    return [];
  }
  const sites = [];
  siteSnapshot.forEach((doc) => {
    sites.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return sites;
};
