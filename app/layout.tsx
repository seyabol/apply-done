import type { Metadata } from "next";
import { lateef } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export const metadata: Metadata = {
   title: "Apply Done",
   description: "Apply Done - Your Way to Prosperity",
};

export const experimental_ppr = true;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={`${lateef.className} antialiased`}>
            <div className="">
               {/* Navbar */}
               <div className="w-full bg-indigo-600 text-white shadow-md">
                  <Navbar />
               </div>

               {/* Content */}
               <div className="flex-grow overflow-y-auto">{children}</div>

               {/* Footer */}
               <Footer />
            </div>
         </body>
      </html>
   );
}
