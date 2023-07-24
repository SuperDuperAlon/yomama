import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) // Your project ID
    ;

const promise = databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_COLLECTION_ID);

promise.then(function (response) {
    console.log(response.documents); // Success
}, function (error) {
    console.log(error); // 
})

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page