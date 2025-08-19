import UniversityLogo from "@/app/ui/university-logo";
import RequestForm from "@/app/ui/RequestForm";
import { Suspense } from "react";
import type { Field } from "@/app/ui/RequestForm";
import { submitConsultation } from "@/app/lib/requestActions";

export default function ConsultationPage() {
   const fields: Field[] = [
      // { name: "نام کامل", label: "نام", type: "text", required: true },
      // { name: "ایمیل", label: "ایمیل", type: "email", required: true },
      {
         name: "subtype",
         label: "نوع مشاوره",
         type: "select",
         options: [
            { value: "financial", label: "مالی" },
            { value: "academic", label: "آموزشی" },
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
               <RequestForm title="درخواست مشاوره" fields={fields} action={submitConsultation} />
            </Suspense>
         </div>
      </main>
   );
}
