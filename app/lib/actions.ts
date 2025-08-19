"use server";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { registerSchema } from "@/app/lib/zod";
import { z } from "zod";

import { redirect } from "next/navigation";

import { getUserByUsername, getUserByEmail, createUser } from "@/app/lib/data";

////////////////////////////////////////////////
////////////////////////////////////////////////

export async function authenticate(prevState: string | undefined, formData: FormData) {
   try {
      await signIn("credentials", formData);
   } catch (error) {
      // console.log(`Error during signIn() 🧪🧪`, error);
      // In App Router + server actions, a redirect is implemented by throwing an internal NEXT_REDIRECT error
      // So nothing is actually “broken” — this is expected behavior.
      if (error instanceof AuthError) {
         // Handle auth errors
         switch (error.type) {
            case "CredentialsSignin":
               return "Invalid credentials.";
            default:
               return "Something went wrong.";
         }
      }
      throw error; // Rethrow all other errors
   }
}

////////////////////////////////////////////////
////////////////////////////////////////////////

export type State = {
   errors?: {
      username?: string[];
      email?: string[];
      password?: string[];
   };
   message?: string | null;
};

export async function register(prevState: State | undefined, formData: FormData): Promise<State>  {
   try {
      const parsed = registerSchema.safeParse({
         email: formData.get("email"),
         username: formData.get("username"),
         password: formData.get("password"),
      });

      if (!parsed.success) {
         const flattened = z.flattenError(parsed.error);
         return {
            errors: {
               email: flattened.fieldErrors.email,
               username: flattened.fieldErrors.username,
               password: flattened.fieldErrors.password,
            },
            message: "Validation failed",
         };
      }

      const { email, password, username } = parsed.data;

      const existingUser = await getUserByUsername(username);

      if (existingUser) {
         return {
            errors: { username: ["Username already exists"] },
            message: "Validation failed",
         };
      }

      const existingEmail = await getUserByEmail(email);

      if (existingEmail) {
         return {
            errors: { email: ["Email already exists"] },
            message: "Validation failed",
         };
      }
      await createUser({ email, username, password });
   } catch (error) {
      console.log(error)
      return { message: "Database Error: Failed to Create User" };
   }
   await signIn("credentials", formData);
   redirect("/");
}

////////////////////////////////////////////////
////////////////////////////////////////////////

// Every user-facing service form should map to a Request record in your DB.

