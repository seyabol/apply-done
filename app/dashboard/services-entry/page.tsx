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
            { value: "home", label: "رزرو اقامت گاه" },
            { value: "reserve", label: "سایر رزرو ها" },
         ],
         required: true,
      },
      { name: "message", label: "پیام شما", type: "textarea", required: true },
   ];

   return (
      <main className="flex h-full justify-center items-center p-4">
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>

            <Suspense fallback={<p className="text-center">فرم در حال بارگذاری است</p>}>
               <RequestForm title="درخواست خدمات ورود" fields={fields} action={submitServiceEntry} />
            </Suspense>
         </div>
      </main>
   );
}
