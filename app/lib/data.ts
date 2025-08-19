import prisma from "@/app/lib/db";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";

export async function getUserByEmail(email: string): Promise<User | null> {
   try {
      const user = await prisma.user.findUnique({
         where: {
            email,
         },
      });
      return user;
   } catch (error) {
      console.error("Failed to fetch user by email:", error);
      throw new Error("Failed to fetch user by email. [Error]");
   }
}

export async function getUserByUsername(username: string): Promise<User | null> {
   try {
      const user = await prisma.user.findUnique({
         where: {
            username,
         },
      });
      return user;
   } catch (error) {
      console.error("Failed to fetch user by username:", error);
      throw new Error("Failed to fetch user by username. [Error]");
   }
}

export async function createUser(userData: { email: string; username: string; password: string }): Promise<User> {
   try {
      // Hash the password before storing it for security
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      const newUser = await prisma.user.create({
         data: {
            email: userData.email,
            username: userData.username,
            password: hashedPassword,
         },
      });
      return newUser;
   } catch (error) {
      console.error("Failed to create user:", error);
      throw new Error("Failed to create user. [Error]");
   }
}

export async function fetchRequestsById(userId: string) {
   try {
      const userRequests = await prisma.request.findMany({
         where: {
            userId, // filter by userId (string)
         },
         orderBy: { createdAt: "desc" },
      });
      return userRequests;
   } catch (error) {
      console.error("Failed to Fetch user all Requests", error);
      throw new Error("Failed to Fetch user all Requests. [Error]");
   }
}
