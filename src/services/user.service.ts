import { Account, Client } from "appwrite";

const client = new Client();
const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!) // Your project ID
  ;

async function login(email: string, password: string) {
    try {
      const user = await account.createEmailSession(email, password )
      console.log(user);
    } catch (error){
      console.log(error);
    }
  }

  export const userService = {
    login
  }