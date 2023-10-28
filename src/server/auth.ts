import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env.mjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface UserRole {
    value: string;
    label: string;
  }

  interface User {
    id: string;
    email: string;
    role: UserRole;
  }
}

interface ApiError {
  message: string;
  errors: Record<string, string[]>;
}

interface ApiToken {
  access_token: string;
  expires_in: number;
  type: string;
}

interface ApiUser {
  id: string;
  email: string;
  role: {
    value: string;
    label: string;
  }
}

interface User extends ApiUser {
  token: ApiToken;
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    jwt({token, user}) {
      if (user) {
        token.id = user.id
      }

      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  providers: [
    CredentialsProvider({
      name: 'Resume API',
      credentials: {
        email: {type:'email'},
        password: {type: 'password'}
      },
      async authorize(credentials, req): Promise<null | User>
      {

        const apiBaseUrl = env.RESUME_BUILDER_API_URL;

        const authResponse = await fetch(`${apiBaseUrl}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })

        const token = await authResponse.json() as ApiToken;

        const userResponse = await fetch(`${apiBaseUrl}/auth/user`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token.access_token}` }
        })

        const user = await userResponse.json() as ApiUser;

        return {
          ...user,
          token
        } as User;
      }
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
