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
            { value: "application-fees", label: "پرداخت اپلیکیشن فی" },
            { value: "foreign-payments", label: "پرداخت‌های خارجی (شهریه و ...)" },
         ],
         required: true,
         onChange: (e) => setRequestType(e.target.value as "application-fees" | "foreign-payments"),
      },
      {
         name: "subtype",
         label: "جزئیات درخواست",
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
                    { value: "tuition", label: "شهریه دانشگاه" },
                    { value: "refund", label: "بازپرداخت" },
                    { value: "sevis", label: "هزینه SEVIS" },
                    { value: "other", label: "سایر پرداخت‌ها" },
                 ],
         required: true,
      },
      {
         name: "credentials",
         label: "یوزرنیم و پسورد (جهت ورود به حساب کاربری شما)",
         type: "textarea",
         required: true,
      },
   ];

   return (
      <main className="flex flex-col items-center p-6 space-y-10">
         {/* Intro Section */}
         <section className="max-w-2xl text-center space-y-4">
            <h1 className="text-3xl font-bold text-indigo-700">پرداخت اپلیکیشن فی و هزینه‌های خارجی</h1>
            <p className="text-gray-700 text-xl leading-relaxed">
               پرداخت هزینه‌های بین‌المللی (از جمله اپلیکیشن فی دانشگاه‌ها، آزمون‌ها و شهریه‌ها)
               برای بسیاری از متقاضیان چالش‌برانگیز است. تیم ما با استفاده از روش‌های مطمئن
               و سریع، این پرداخت‌ها را در کوتاه‌ترین زمان برای شما انجام می‌دهد.
            </p>
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-lg text-indigo-800">
               ⚡️ توجه: لطفاً اطلاعات کاربری خود (یوزر و پسورد) را دقیق وارد کنید تا پرداخت‌ها
               بدون مشکل انجام شوند.
            </div>
         </section>

         {/* Form Section */}
         <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
            <div className="mx-auto">
               <UniversityLogo variant="dark" />
            </div>
            <Suspense fallback={<p className="text-center">در حال بارگذاری فرم...</p>}>
               <RequestForm
                  title="ثبت درخواست پرداخت"
                  fields={fields}
                  action={submitAppOrPayment}
               />
            </Suspense>
         </div>
      </main>
   );
}
