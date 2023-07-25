import { Client, Databases } from "appwrite";

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


  // query.then(function (response) {
  //   console.log(response); // Success
  // }, function (error) {
  // 
  // })


  
}


export const appService = {
  query
}