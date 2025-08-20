import RequestForm, { Field } from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";
import { submitAdmissions } from "@/app/lib/requestActions";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // ✅ using shadcn/ui Accordion

export default function AdmissionsPage() {
   const fields: Field[] = [
      {
         name: "subtype",
         label: "مقطع مورد نظر",
         type: "select",
         options: [
            { value: "undergraduate", label: "کارشناسی" },
            { value: "graduate", label: "کارشناسی ارشد" },
            { value: "phd", label: "دکتری" },
            { value: "transfer", label: "انتقالی" },
         ],
         required: true,
      },
      {
         name: "message",
         label: "توضیحات اضافی",
         type: "textarea",
         required: true,
      },
   ];

   const sections = [
      {
         title: "۱. شرایط تحصیل در کانادا",
         content:
            "کانادا به دلیل سیستم آموزشی با کیفیت، جامعه چندفرهنگی و فرصت‌های اقامتی پس از تحصیل، مقصد محبوبی برای دانشجویان بین‌المللی است. دانشگاه‌های کانادا در رشته‌های مختلف و مقاطع تحصیلی گوناگون برنامه‌های متنوعی ارائه می‌دهند. مدارک لازم برای تحصیل شامل ریزنمرات، توصیه‌نامه‌ها، انگیزه‌نامه، تاییده تحصیلی از WES و مدارک مالی است.",
      },
      {
         title: "۲. مراحل تحصیل در کانادا",
         content:
            "مراحل شامل تحقیق درباره دانشگاه‌ها، آماده‌سازی مدارک، درخواست پذیرش از دانشگاه‌ها و سپس درخواست ویزای تحصیلی است. دانشجویان باید حداقل ۶ تا ۱۲ ماه قبل از شروع ترم دانشگاهی برنامه‌ریزی خود را آغاز کنند و در صورت نیاز، برای پذیرش زبان یا آزمون‌های تخصصی آماده شوند.",
      },
      {
         title: "۳. مدارک لازم برای تحصیل در کانادا",
         content:
            "مدارک مورد نیاز شامل ریزنمرات تحصیلی، نمرات آزمون‌های زبان، انگیزه‌نامه، توصیه‌نامه‌ها و مدارک مالی است. برخی دانشگاه‌ها ممکن است نیاز به ارائه مدارک تکمیلی داشته باشند، مانند پروپوزال تحقیقاتی برای دوره‌های پژوهشی.",
      },
      {
         title: "۴. مزایای تحصیل در کانادا",
         content:
            "مزایای تحصیل شامل کیفیت بالای آموزش، فرصت‌های شغلی پس از تحصیل، و امکان درخواست اقامت دائم است. دانشگاه‌های کانادا از نظر بین‌المللی معتبر هستند و دانشجویان می‌توانند از برنامه‌های تحصیلی چندزبانه بهره‌مند شوند.",
      },
      {
         title: "۵. مقاطع تحصیلی در کانادا",
         content:
            "تحصیلات شامل کارشناسی، کارشناسی ارشد، و دکتری است. هر یک از این مقاطع بسته به دانشگاه و رشته شامل دروس تئوری، عملی و پژوهشی است.",
      },
   ];

   return (
      <main className="flex flex-col items-center p-6 space-y-12">
         {/* Content Section */}
         <section className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold text-indigo-700 text-center mb-6">شرایط و راهنمای تحصیل در کانادا</h1>
            <Accordion type="single" collapsible className="space-y-3">
               {sections.map((section, index) => (
                  <AccordionItem
                     key={index}
                     value={`item-${index}`}
                     className="border rounded-xl shadow-sm bg-white cursor-pointer"
                     dir="rtl"
                  >
                     <AccordionTrigger className="px-4 py-3 text-right font-bold text-2xl cursor-pointer">
                        {section.title}
                     </AccordionTrigger>
                     <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed text-xl">
                        {section.content}
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </section>

         {/* Form Section */}
         <section className="w-full max-w-lg">
            <div className="flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
               <div className="mx-auto">
                  <UniversityLogo variant="dark" />
               </div>
               <Suspense fallback={<p className="text-center">در حال بارگذاری فرم...</p>}>
                  <RequestForm title="درخواست پذیرش" fields={fields} action={submitAdmissions} />
               </Suspense>
            </div>
         </section>
      </main>
   );
}
