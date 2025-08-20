import Image from "next/image";
import FeatureCard from "@/app/ui/FeatureCard";
import { auth } from "@/auth";
import Link from "next/link";

export default async function HomePage() {
   const session = await auth();
   console.log(`session in Home is 🐸🐸🐸`, session);

   const features = [
      {
         title: "ورود و ثبت نام",
         description: "ساخت حساب کاربری و مدیریت ورود",
         href: "/login",
      },
      {
         title: "مشاوره",
         description: "دریافت مشاوره مالی و تحصیلی از تیم ما",
         href: "/consultation",
      },
      {
         title: "خدمات ورود",
         description: "رزرو وقت و دریافت راهنمایی برای خدمات ورود",
         href: "/dashboard/services-entry",
      },
      {
         title: "ویرایش مکاتبات انگلیسی",
         description: "ویرایش انگیزه نامه، رزومه، توصیه نامه و سایر اسناد",
         href: "/dashboard/document-editing",
      },
      {
         title: "اپلیکیشن فی ها و پرداخت های ارزی",
         description: "پرداخت و مدیریت هزینه‌های اپلیکیشن و پرداخت شهریه",
         href: "/dashboard/application-fees",
      },
      {
         title: "پذیرش تحصیلی کانادا",
         description: "راهنمای پذیرش، ویزا و بورسیه‌های تحصیلی",
         href: "/dashboard/admissions",
      },
   ];

   return (
      <main className="flex flex-col gap-16">
         {/* Hero Section 1 */}
         <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
            {/* Background image with Next.js Image */}
            <Image
               src="/hero-1.jpeg"
               alt="Hero background"
               fill
               className="object-cover"
               priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center text-white">
               <h1 className="text-3xl md:text-5xl font-bold">اپلای دان، بی‌حد و مرز</h1>
               <p className="text-lg md:text-xl max-w-2xl">
                  آینده خود را با مشاوره دقیق و خدمات مهاجرتی و مالی ما بسازید
               </p>
               <div className="flex gap-4">
                  <Link
                     href="/consultation"
                     className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-white font-semibold"
                  >
                     دریافت مشاوره
                  </Link>
                  <Link
                     href="/services"
                     className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
                  >
                     خدمات
                  </Link>
               </div>
            </div>
         </section>

         {/* Services / Feature Grid */}
         <section className="container mx-auto px-6 md:px-12">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">خدمات ما</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
               {features.map((feature) => (
                  <FeatureCard
                     key={feature.title}
                     title={feature.title}
                     description={feature.description}
                     href={feature.href}
                  />
               ))}
            </div>
         </section>

         {/* Hero Section 2 */}
         <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
            {/* Background image with Next.js Image */}
            <Image
               src="/hero-2.jpeg"
               alt="Hero background 2"
               fill
               className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-indigo-950/70" />
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center text-white">
               <h2 className="text-2xl md:text-4xl font-bold">همراه شما در مسیر مهاجرت</h2>
               <p className="text-lg max-w-2xl">با بیش از ده سال تجربه در امور مهاجرتی، تیم ما آماده همراهی شماست.</p>
               <div className="flex gap-4">
                  <Link
                     href="/consultation"
                     className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 transition text-white font-semibold"
                  >
                     رزرو وقت مشاوره
                  </Link>
                  <Link
                     href="/contact"
                     className="px-6 py-3 rounded-lg bg-white text-indigo-700 hover:bg-gray-200 transition font-semibold"
                  >
                     ارتباط با ما
                  </Link>
               </div>
            </div>
         </section>
      </main>
   );
}
