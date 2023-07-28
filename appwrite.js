import { Client, Databases, ID } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) // Your project ID
  ;

async function query() {
  try {
    const query = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_COLLECTION_ID);
    const data = query.documents
    return data
  } catch (error) {
    console.log(error);
  }
}

async function create(newFlower) {
  try {
    // Create a new flower object
    const flower = {
      name: newFlower.name,
      price: parseInt(newFlower.price),
    };

    // Use Appwrite to create a new document in the "flowers" collection (replace with your collection name)
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID,
      ID.unique(),
      flower
    );

    return response;
  } catch (error) {
    throw new Error('Error creating flower: ' + error.message);
  }
}

async function remove(id) {
  try {
    await databases.deleteDocument(process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID, id);
  } catch (error) {
    console.log(error);
  }
}

async function update(id) {
  try {
    await databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID, id);
  } catch (error) {
    console.log(error);
  }
}


export const appService = {
  query,
  create,
  remove,
  update
}