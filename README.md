# Appwrite Employee Management with Nextjs and Tailwind css

## Appwrite Installation

Installation with docker [https://appwrite.io/docs/installation]

## Appwrite for web installation
[https://appwrite.io/docs/getting-started-for-web]

- step 1 : `npm install appwrite`
- step 2 : create api folder in root directory
- step 3 : create `api/appwrite.js` and initialize appwrite client and create `.env.local` and add Enviornment Variable
`
NEXT_PUBLIC_REACT_APP_ENDPOINT=<PROJECT_ENDPOINT>
NEXT_PUBLIC_REACT_APP_PROJECT=<PROJECT_PROJECTID>
NEXT_PUBLIC_REACT_APP_DATABASE_ID=<PROJECT_DATABASE_ID>
NEXT_PUBLIC_REACT_APP_COLLECTION_ID=<COLLECTION_ID>
`


- step 4 : Open localhost:80 and create account
- step 5 : create new project
- step 6 : Add new platform with some project name and hostname as `localhost`
- step 7 : Copy project id and add it to `.env.local`
- step 8 : create database from dashboard on `localhost:80` and copy the database id and set in `.env.local`
- step 9 : create attributes for fields
