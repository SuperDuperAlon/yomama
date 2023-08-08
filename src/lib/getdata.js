
import { databases } from "../../appwrite";

export const getData = async () => {
  const data = await databases.listDocuments(
    process.env.DATABASE_ID,
    process.env.COLLECTION_ID
  );
  return data.documents;
};