import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
  .setProject("63c837cdd74e18a3bb20"); // Your project ID //// Go to localhost:80 // Sign Up // Create-Project // under setting You will get projectID

export const account = new Account(client);

export const databases = new Databases(client, "63c83a51ab4ca7ad05e6");
