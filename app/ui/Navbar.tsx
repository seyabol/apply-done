import UniversityLogo from "@/app/ui/university-logo";
import NavLinks from "@/app/ui/nav-links";
import { auth } from "@/auth";
import Link from "next/link";
import LogoutButton from "@/app/ui/logout-button";

export default async function Navbar() {
   const session = await auth();
   return (
      <nav className="w-full bg-indigo-600 shadow-md">
         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            {/* Logo (left) */}
            <Link href="/">
               <UniversityLogo variant="light" />
            </Link>

            {/* Nav Links (center) */}
            <div className="hidden md:flex flex-1 justify-center">
               <NavLinks />
            </div>

            {/* Logout (right) */}
            <div className="flex justify-end">
               {session?.user ? (
                  <div className="flex justify-center items-center">
                     <Link href="/dashboard" className="border border-gray-100 rounded-md px-2 py-1.5">
                        پنل کاربری
                     </Link>
                     <LogoutButton />
                  </div>
               ) : (
                  <div className="flex gap-3 text-xl">
                     <Link href="/register">ثبت نام</Link>
                     <Link href="/login">ورود</Link>
                  </div>
               )}
            </div>
         </div>
      </nav>
   );
}
