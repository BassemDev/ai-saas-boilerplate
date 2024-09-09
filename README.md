# AI SAAS Boilerplate 🤖
A full project with all the necessary tools/lib/third parties to launch an AI SAAS 10x faster. In the project you will find all the modules needed for a business to run smoothly like authentication, , payment, error and live chat.

## Technical aspects ℹ️
The project is using NextJs framework. You need to install nodejs in your system and make sure to have npx already installed too (Links are below):

1- Install stable [nodejs version](https://nodejs.org/en/download/package-manager)

2- Install npx `` npm install -g npx ``

Now when it comes to the databse, I picked postgre and with Prisma ORM I was able to handle all the different request to db and table.

3- so you might either install local database and use the credential while developing new feature in the app.
alternativewoudl be to opt for a cloud service. For me it was [render](https://dashboard.render.com/). (they provide you with FREE postgre DB)

## Documentation 📝
The project uses many third party services for the authentication, chat with customer and payment of subscription. Below you will find the service and the related docs so you can change or adapt them based on your preferences.

* [Stripe](https://stripe.com/) : payment 💰 solution dedicated for the developer. [Docs](https://docs.stripe.com/)
* [Crisp](https://crisp.chat/) : A chat 💬 box which can be integrated easily to website and allow real-time interaction with users. [Docs](https://docs.crisp.chat/)
* [Clerk](https://clerk.com/): Authentication and user 👤 management tool based on Oaut 2.0. [Docs](https://clerk.com/docs)

## Prequirements ⚠️
Since the project uses thrid party libraires, you need to setup the token in your environment variable.
So first create in the root folder of the project a new file called ``.env``

After that please add the following variable with the exact name and make sure to fill every one of these after you have register in every service. (alternative you can change it based on your preferences)

Example:

```
# keys and token related to authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<REPLACE_USER>
CLERK_SECRET_KEY=<REPLACE_USER>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Open ai key
OPENAI_API_KEY =<REPLACE_USER>

# Replicate key
REPLICATE_API_KEY=<REPLACE_USER>

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://<REPLACE_USER>:<REPLACE_HERE>.<REPLACE_USER>"

# stripe key 
STRIPE_API_KEY=<REPLACE_USER>
STRIPE_WEBHOOK_SECRET=<REPLACE_USER>
NEXT_PUBLIC_APP_URL=<REPLACE_USER>
```

## Run the project 🎬
This is a nodeJs project, so in the end you can run the project with the following two command.

1- Install the dependencies ``npm i``

2- Start the project locally``npm run dev``

