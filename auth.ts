import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { authConfig } from "@/auth.config";
import { signInSchema } from "@/app/lib/zod";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import type { User } from "@prisma/client";
import { getUserByEmail } from "@/app/lib/data";

///////////////////////////////////
///////////////////////////////////

declare module "next-auth" {
   interface Session {
      user: {
         username?: string;
         admin?: boolean;
         id?: string;
      } & DefaultSession["user"];
   }
   interface User {
      username?: string;
      admin?: boolean;
      id?: string;
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      username?: string;
      admin?: boolean;
      id?: string;
   }
}

///////////////////////////////////
///////////////////////////////////


export const { handlers, signIn, signOut, auth } = NextAuth({
   ...authConfig,
   providers: [
      Credentials({
         async authorize(credentials): Promise<User | null> {
            try {
               const parsedCredentials = signInSchema.safeParse(credentials);

               if (!parsedCredentials.success) {
                  console.log("Invalid Credentials ,in authorize(▶️)");
                  return null;
               }

               const { email, password } = parsedCredentials.data;
               const user = await getUserByEmail(email);
               if (!user) return null;

               const passwordsMatch = await bcrypt.compare(password, user.password);
               if (!passwordsMatch) return null;
               console.log(`user from Data base in authorized 🦺🦺🦺`, user)
               return user;
               
            } catch (error) {
               console.log(`Error in authorize(🚫)`);
               console.log(error);
               return null
            }
         },
      }),
   ],
   callbacks: {
      jwt({ token, user }) {
         console.log(`jwt Callback 🧸🧸🧸`, { user, token })
         if (user) {
            token.admin = user.admin;
            token.username = user.username;
            token.id = user.id
         }
         return token;
      },
      session({ session, token }) {
         if (session.user) {
            // console.log(`Session Callback token🎃🎃🎃`, token)
            session.user.admin = token.admin as boolean;
            session.user.username = token.username as string;
            session.user.id = token.id as string;
         }
         console.log(`Session Callback session 🎃🎃🎃`, session)
         return session

      
      },
   },

});