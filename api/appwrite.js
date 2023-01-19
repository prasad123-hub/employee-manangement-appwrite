import { Client, Account, Databases } from "appwrite";

const client = new Client();

if (client) {
  client
    .setEndpoint(process.env.NEXT_PUBLIC_REACT_APP_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_REACT_APP_PROJECT);
}

export const account = new Account(client);

export const databases = new Databases(
  client,
  process.env.NEXT_PUBLIC_REACT_APP_DATABASE
);
