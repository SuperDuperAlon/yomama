import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

console.log(process.env.DATABASE_ID);

// try {
//     const something = databases.listDocuments(process.env.DATABASE_ID, process.env.COLLECTION_ID)
//     console.log(something);
// } catch (err) {
//     console.log(err);
// }

export { client, account, databases, storage, ID, Query };