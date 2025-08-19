import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/app/ui/profile-form";
import prisma from "@/app/lib/db";

export default async function ProfilePage() {
   const session = await auth();
   if (!session) {
      redirect("/login");
   }

   const user = await prisma.user.findUnique({ where: { id: session.user.id } });

   return (
      <main className="max-w-3xl mx-auto py-10 px-4">
         <h1 className="text-3xl font-bold mb-6">پروفایل کاربری</h1>
         <p className="text-gray-600 mb-10">اطلاعات حساب خود را مشاهده و به‌روزرسانی کنید.</p>

         <ProfileForm user={user} />
      </main>
   );
}
