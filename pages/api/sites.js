import { getSites } from "@/lib/firestore-admin";

const handler = async (req, res) => {
  const sites = await getSites();
  return res.status(200).json({ sites });
};

export default handler;
