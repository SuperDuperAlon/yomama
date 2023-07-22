import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);

const storage = new Storage(client);
const account = new Account(client);
const databases = new Databases(client);

console.log(account);

export { client, account, databases, storage, ID, Query };