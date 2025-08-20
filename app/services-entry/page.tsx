import RequestForm from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";
import type { Field } from "@/app/ui/RequestForm";
import { submitServiceEntry } from "@/app/lib/requestActions";

export default function ServicesEntry() {
   const fields: Field[] = [
      {
         name: "subtype",
         label: "نوع درخواست",
         type: "select",
         options: [
            { value: "home", label: "رزرو اقامت‌گاه" },
            { value: "reserve", label: "سایر رزروها (بلیط، خوابگاه و ...)" },
         ],
         required: true,
      },
      { name: "message", label: "پیام شما", type: "textarea", required: true },
   ];

   return (
      <main className="flex flex-col items-center p-6 space-y-10">
         {/* Intro Section */}
         <section className="max-w-2xl text-center space-y-4">
            <h1 className="text-3xl font-bold text-indigo-700">خدمات ورود</h1>
            <p className="text-gray-700 leading-relaxed text-lg">
               یکی از مهم‌ترین دغدغه‌های دانشجویان و مراجعان پس از ورود به کشور مقصد،
               دریافت خدمات اقامتی و رفاهی است. ما در تیم پشتیبانی با ارائه خدماتی مانند{" "}
               <span className="font-semibold">رزرو خوابگاه، بلیط، و سایر رزروهای ضروری</span>{" "}
               تلاش می‌کنیم تا شروع مسیر شما را آسان‌تر کنیم.
            </p>
         </section>

         {/* Form Section */}
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>
            <Suspense fallback={<p className="text-center">فرم در حال بارگذاری است...</p>}>
               <RequestForm
                  title="ثبت درخواست خدمات ورود"
                  fields={fields}
                  action={submitServiceEntry}
               />
            </Suspense>
         </div>
      </main>
   );
}
