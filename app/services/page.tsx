import FeatureCard from "@/app/ui/FeatureCard";
import {
   AcademicCapIcon,
   UserGroupIcon,
   DocumentTextIcon,
   BanknotesIcon,
   GlobeAltIcon,
   CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default async function Page() {
   const features = [
      {
         title: "ورود و ثبت نام",
         description: "ساخت حساب کاربری و مدیریت ورود",
         href: "/login",
         icon: <UserGroupIcon  className="w-8 h-8" />,
      },
      {
         title: "مشاوره",
         description: "دریافت مشاوره مالی و تحصیلی از تیم ما",
         href: "/consultation",
         icon: <AcademicCapIcon  className="w-8 h-8" />,
      },
      {
         title: "خدمات ورود",
         description: "رزرو وقت و دریافت راهنمایی برای خدمات ورود",
         href: "/dashboard/services-entry",
         icon: <GlobeAltIcon   className="w-8 h-8"/>,
      },
      {
         title: "ویرایش مکاتبات انگلیسی",
         description: "ویرایش انگیزه نامه، رزومه، توصیه نامه و سایر اسناد",
         href: "/dashboard/document-editing",
         icon: <DocumentTextIcon  className="w-8 h-8"/>,
      },
      {
         title: "اپلیکیشن فی ها و پرداخت های ارزی",
         description: "پرداخت و مدیریت هزینه‌های اپلیکیشن و پرداخت شهریه",
         href: "/dashboard/application-fees",
         icon: <BanknotesIcon  className="w-8 h-8" />,
      },
      {
         title: "پذیرش تحصیلی کانادا",
         description: "راهنمای پذیرش، ویزا و بورسیه‌های تحصیلی",
         href: "/dashboard/admissions",
         icon: <CheckBadgeIcon  className="w-8 h-8"/>,
      },
   ];

   const whyChooseUs = [
      {
         title: "تخصص و تجربه",
         points: [
            "سال‌ها تجربه در کمک به دانشجویان برای گذر از فرآیند پیچیده‌ی پذیرش تحصیلی",
            "درک عمیق از چالش‌ها و نیازهای خاص متقاضیان",
            "کارنامه‌ای پربار در گرفتن پذیرش از دانشگاه‌های برتر دنیا",
         ],
      },
      {
         title: "راهنمایی اختصاصی فردی",
         points: [
            "مشاوره‌ اختصاصی متناسب با نیازها و اهداف متقاضی",
            "پشتیبانی جامع در طول فرآیند کامل درخواست",
            "راهنمایی اختصاصی در انتخاب کشور و دانشگاه مناسب",
         ],
      },
      {
         title: "آشنایی کامل با دانشگاه‌ها",
         points: [
            "اطلاعات کامل از سیاست‌ها و روندهای پذیرش",
            "اطلاعات به‌روز از آخرین تحولات آموزش بین‌المللی",
            "کمک به انتخاب بهترین دانشگاه‌ها برای هر دانشجو",
         ],
      },
      {
         title: "ارتباط قوی با دانشگاه‌های معتبر",
         points: [
            "روابط مستحکم با دانشگاه‌های برتر جهان",
            "ارتباط مستقیم با مسئولان پذیرش بین‌المللی",
            "افزایش شانس پذیرش در برنامه‌های رقابتی",
         ],
      },
      {
         title: "صداقت و شفافیت",
         points: [
            "تعهد به ارائه مشاوره‌ی درست و شفاف",
            "اطلاع‌رسانی دقیق از هزینه‌ها و مراحل",
            "پاسخگویی کامل و به‌موقع به سوالات دانشجویان",
         ],
      },
      {
         title: "دیگر خدمات",
         points: [
            "راهنمایی برای تهیه مدارک درخواست ویزا",
            "پشتیبانی پس از پذیرش برای اقامت و آشنایی فرهنگی",
            "کمک به موفقیت تحصیلی در کشور مقصد",
         ],
      },
   ];

   return (
      <main className="min-h-screen flex flex-col items-center p-6 space-y-16">
         {/* Page Title */}
         <section className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-indigo-700">خدمات ما</h1>
            <p className="text-lg text-gray-600">
               اپلای دان همراه شما در تمام مراحل پذیرش، مشاوره، و موفقیت تحصیلی.
            </p>
         </section>

         {/* Feature Grid */}
         <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl text-center"  >
            {features.map((feature) => (
               <FeatureCard 
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  href={feature.href}
                  icon={feature.icon}
               />
            ))}
         </section>

         {/* Why Choose Us */}
         <section className="w-full max-w-6xl" dir="rtl">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
               چرا اپلای دان را انتخاب کنید؟
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
               {whyChooseUs.map((section) => (
                  <div
                     key={section.title}
                     className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow"
                  >
                     <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                        {section.title}
                     </h3>
                     <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {section.points.map((point, i) => (
                           <li key={i}>{point}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </section>
      </main>
   );
}
