import { auth } from "@/auth";

export default async function Page() {
   const session = await auth();
   console.log(`session in Admin is 🦧🦧`, session);
   if (!session?.user.admin) return <main>Not authorized</main>;
   return <main>Admin Page</main>;
}
