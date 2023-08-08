import React from 'react'
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) // Your project ID


const catchAll = async() => {
  const data = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_COLLECTION_ID);
  return data
}

try {
  const retreived = await catchAll()
} catch (error) {
  console.log(error); // 
}

const page = () => {
  return (
    <div>page</div>
  )
}

export default page