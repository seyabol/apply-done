"use client";

import RequestForm, { Field } from "@/app/ui/RequestForm";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense, useState } from "react";
import { submitAppOrPayment } from "@/app/lib/requestActions";

export default function ApplicationFeesPage() {
   const [requestType, setRequestType] = useState<"application-fees" | "foreign-payments">("application-fees");

   const fields: Field[] = [
      {
         name: "requestType",
         label: "نوع درخواست",
         type: "select",
         options: [
            { value: "application-fees", label: "اپلیکیشن فی‌ها" },
            { value: "foreign-payments", label: "پرداخت‌های خارجی" },
         ],
         required: true,
         onChange: (e) => setRequestType(e.target.value as "application-fees" | "foreign-payments"),
      },
      {
         name: "subtype",
         label: "زیرنوع درخواست",
         type: "select",
         options:
            requestType === "application-fees"
               ? [
                    { value: "wes", label: "WES" },
                    { value: "ece", label: "ECE" },
                    { value: "fsca", label: "FSCA" },
                    { value: "ircc", label: "IRCC" },
                    { value: "toefl", label: "TOEFL" },
                    { value: "gre", label: "GRE" },
                    { value: "coursera", label: "Coursera" },
                 ]
               : [
                    { value: "tuition", label: "شهریه" },
                    { value: "refund", label: "بازپرداخت" },
                    { value: "sevis", label: "SEVIS" },
                    { value: "other", label: "سایر" },
                 ],
         required: true,
      },
      {
         name: "credentials",
         label: "یوزر و پسورد شما (برای اینکه بتوانیم لاگین شویم)",
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
               <RequestForm title="درخواست پرداخت‌ها" fields={fields} action={submitAppOrPayment} />
            </Suspense>
         </div>
      </main>
   );
}
