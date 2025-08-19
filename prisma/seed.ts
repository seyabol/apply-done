import { PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
   // Clear old data in correct order (Requests first due to FK constraint)
   await prisma.request.deleteMany();
   await prisma.user.deleteMany();

   const hashedPassword = await bcrypt.hash("test", 10);

   // Create users with password: 'test'
   const admin = await prisma.user.create({
      data: {
         email: "admin@example.com",
         username: "admin",
         password: hashedPassword,
         admin: true,
      },
   });

   const john = await prisma.user.create({
      data: {
         email: "john.doe@example.com",
         username: "johnny",
         password: hashedPassword,
      },
   });

   const jane = await prisma.user.create({
      data: {
         email: "jane.doe@example.com",
         username: "janeD",
         password: hashedPassword,
      },
   });

   // Requests for admin
   await prisma.request.create({
      data: {
         userId: admin.id,
         type: "consultation",
         subtype: "legal",
         message: "Need legal consultation regarding contracts.",
         credentials: "JD, LLM",
         status: "approved",
         note: "Scheduled for next Tuesday at 10am.",
      },
   });

   // Requests for John
   await prisma.request.createMany({
      data: [
         {
            userId: john.id,
            type: "document-editing",
            subtype: "cv",
            message: "Please help improve my CV.",
            credentials: "USERNAME & PASSOWRD",
            status: "pending",
         },
         {
            userId: john.id,
            type: "consultation",
            subtype: "financial",
            message: "Need advice on investment options.",
            credentials: "USERNAME & PASSOWRD",
            status: "rejected",
            note: "Lack of required documentation.",
         },
         {
            userId: john.id,
            type: "consultation",
            message: "General career advice needed.",
            status: "approved",
         },
      ],
   });

   // Requests for Jane
   await prisma.request.createMany({
      data: [
         {
            userId: jane.id,
            type: "document-editing",
            subtype: "cover-letter",
            message: "Need help drafting a compelling cover letter.",
            credentials: "CoverLetter.pdf",
            status: "pending",
         },
         {
            userId: jane.id,
            type: "consultation",
            message: "Looking for mentorship in tech.",
            status: "pending",
            note: "Candidate seems promising.",
         },
      ],
   });

   console.log("✅ Seed data inserted successfully");
}

main()
   .catch((e) => {
      console.error("❌ Seeding failed:", e);
      process.exit(1);
   })
   .finally(() => prisma.$disconnect());
