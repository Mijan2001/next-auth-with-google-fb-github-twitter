import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import mongoClientPromise from './lib/mongoClientPromise';
import CredentialProvider from 'next-auth/providers/credentials';
import { userModel } from './models/user-model';
import { dbConnect } from './lib/mongo';

export const {
    handlers: { GET, POST }, // for providing custom routes
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {
        databaseName: process.env.NODE_ENV
    }),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                if (credentials === null) {
                    return null;
                }

                await dbConnect();

                try {
                    const user = await userModel.findOne({
                        email: credentials?.email
                    });
                    if (user) {
                        const isMatch =
                            user?.password === credentials?.password;
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error('Invalid credentials');
                        }
                    } else {
                        throw new Error('Invalid credentials');
                    }
                } catch (error) {
                    throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        })
    ]
});
