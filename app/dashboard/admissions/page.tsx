"use client";

import RequestForm, { Field } from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";
import { submitAdmissions } from "@/app/lib/requestActions";

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

   return (
      <main className="flex h-full justify-center items-center p-4">
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
            {/* Logo */}
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>

            <Suspense fallback={<p className="text-center">در حال بارگذاری فرم...</p>}>
               <RequestForm title="درخواست پذیرش" fields={fields} action={submitAdmissions} />
            </Suspense>
         </div>
      </main>
   );
}
