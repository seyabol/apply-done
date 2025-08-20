import RequestForm from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";
import type { Field } from "@/app/ui/RequestForm";
import { submitDocumentEditing } from "@/app/lib/requestActions";

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
      <main className="flex h-full justify-center items-center p-4">
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
            {/* Logo */}
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>

            {/* Consultation Form */}
            <Suspense fallback={<p className="text-center">فرم مشاوره در حال بارگذاری است...</p>}>
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
