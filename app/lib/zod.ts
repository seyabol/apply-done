import { object, string, email } from "zod";

export const signInSchema = object({
   //   email: string({ error: "Email is required" })
   //     .min(1, "Email is required")
   //     .email("Invalid email"),
   email: email({ error: "Email is not valid" }),
   password: string({ error: "Password is required" })
      // .min(1, "Password is required")
      // .min(4, "Password must be more than 6 characters")
      // .max(32, "Password must be less than 32 characters"),
});

export const registerSchema = object({
   email: email({ error: "Email is not valid" }),
   password: string().min(6, "Password must be at least 6 characters"),
   username: string().min(7, "User Namess must be at least 6 characters"),
});
