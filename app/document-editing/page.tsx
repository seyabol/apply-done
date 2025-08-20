import RequestForm from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";
import type { Field } from "@/app/ui/RequestForm";
import { submitDocumentEditing } from "@/app/lib/requestActions";
import { SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function DocumentEditingPage() {
   const fields: Field[] = [
      {
         name: "subtype",
         label: "نوع مدرک",
         type: "select", // ✅ dropdown
         options: [
            { value: "cv", label: "رزومه (CV)" },
            { value: "sop", label: "انگیزه‌نامه (SOP)" },
            { value: "lor", label: "توصیه‌نامه (LOR)" },
            { value: "transcript", label: "کارنامه/ریز نمرات" },
            { value: "other", label: "سایر" },
         ],
         required: true,
      },

      { name: "message", label: "پیام شما", type: "textarea", required: true },
   ];

   return (
      <main className="flex flex-col items-center p-6 md:p-10 space-y-10">
         {/* Intro Section */}
         <section className="max-w-3xl text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
               ویرایش حرفه‌ای و اختصاصی مدارک شما
            </h1>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
               اگر قصد اپلای به{" "}
               <span className="font-semibold text-indigo-600">
                  دانشگاه‌های معتبر بین‌المللی
               </span>{" "}
               یا دریافت فرصت‌های شغلی خاص دارید، مدارکی مثل{" "}
               <span className="font-semibold text-indigo-600">
                  رزومه، انگیزه‌نامه و توصیه‌نامه
               </span>{" "}
               نقش کلیدی در موفقیت شما دارند. تیم ما مدارک شما را بازبینی،
               ویرایش و حرفه‌ای‌سازی می‌کند تا بهترین نسخه از توانایی‌ها و
               دستاوردهایتان ارائه شود.
            </p>
         </section>

         {/* Highlights */}
         <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
            {[
               { icon: SparklesIcon, text: "اصلاح نگارشی و ساختاری" },
               { icon: CheckBadgeIcon, text: "تطبیق با استانداردهای دانشگاهی" },
               { icon: SparklesIcon, text: "افزایش شانس پذیرش" },
               { icon: CheckBadgeIcon, text: "بازخورد اختصاصی برای هر مدرک" },
            ].map(({ icon: Icon, text }, i) => (
               <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-indigo-100 bg-indigo-50 hover:bg-indigo-100 transition"
               >
                  <Icon className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-700">{text}</span>
               </div>
            ))}
         </section>

         {/* Form Section */}
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-2xl rounded-2xl border border-indigo-100">
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>

            <Suspense fallback={<p className="text-center">فرم در حال بارگذاری...</p>}>
               <RequestForm
                  title="درخواست ویرایش مدارک"
                  fields={fields}
                  action={submitDocumentEditing}
               />
            </Suspense>
         </div>
      </main>
   );
}
