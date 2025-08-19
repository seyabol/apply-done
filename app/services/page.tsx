import FeatureCard from "@/app/ui/FeatureCard";

export default async function Page() {
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
      <main className="min-h-screen flex flex-col items-center p-6">
         {/* Page Title */}
         <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">خدمات ما</h1>

         {/* Feature Grid */}
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {features.map((feature) => (
               <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  href={feature.href}
               />
            ))}
         </div>
      </main>
   );
}
