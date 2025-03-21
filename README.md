# NextAuth Authentication with Multiple Providers(Google,Github,Facebook,Twitter,MongoDB)

This project demonstrates the implementation of authentication using **NextAuth.js** with multiple providers, including Google, GitHub, Facebook, Twitter, and MongoDB. Users can log in using any of these providers or directly with MongoDB.

## Features

-   **Google Authentication**
-   **GitHub Authentication**
-   **Facebook Authentication**
-   **Twitter Authentication**
-   **MongoDB Authentication**

## Project Screenshot

![Project Screenshot](./public/images/login-page.png)

## Prerequisites

Before running this project, ensure you have the following:

-   Node.js installed
-   MongoDB database set up
-   API keys for Google, GitHub, Facebook, and Twitter

## Installation

1. Clone the repository:

    ```bash
    git clone ..............
    cd next-auth
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

    ```env
    NEXTAUTH_URL=http://localhost:3000

    # Google
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret

    # GitHub
    GITHUB_CLIENT_ID=your-github-client-id
    GITHUB_CLIENT_SECRET=your-github-client-secret

    # Facebook
    FACEBOOK_CLIENT_ID=your-facebook-client-id
    FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

    # Twitter
    TWITTER_CLIENT_ID=your-twitter-client-id
    TWITTER_CLIENT_SECRET=your-twitter-client-secret

    # MongoDB
    MONGODB_URI=your-mongodb-connection-string
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

-   Navigate to the login page.
-   Choose a provider (Google, GitHub, Facebook, Twitter) or log in using MongoDB credentials.
-   Upon successful login, you will be redirected to the dashboard.

## Technologies Used

-   **Next.js**
-   **NextAuth.js**
-   **MongoDB**
-   **OAuth Providers (Google, GitHub, Facebook, Twitter)**

## Necessary Links :

-   Google : https://console.cloud.google.com/apis/credentials?pli=1&project=next-auth-login-446517
-   Github : https://github.com/settings/applications/2928871
-   Facebook : https://developers.facebook.com/
-   Twitter : https://developer.twitter.com/en/portal/projects/1902771264332439552/apps/30425725/settings
-   MongoDB : https://authjs.dev/getting-started/adapters/mongodb
