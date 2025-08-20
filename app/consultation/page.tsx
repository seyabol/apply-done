import UniversityLogo from "@/app/ui/university-logo";
import RequestForm from "@/app/ui/RequestForm";
import { Suspense } from "react";
import type { Field } from "@/app/ui/RequestForm";
import { submitConsultation } from "@/app/lib/requestActions";

export default function ConsultationPage() {
  const fields: Field[] = [
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
    <main className="flex flex-col items-center p-6 space-y-12">
      {/* Context Section */}
      <section className="w-full max-w-3xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-700">مشاوره تحصیلی و مالی</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          ما خدمات مشاوره را هم به صورت آنلاین و هم به صورت حضوری در دفتر مرکزی ارائه می‌دهیم. 
          شما می‌توانید از طریق فرم زیر درخواست خود را ثبت کنید یا برای دریافت مشاوره حضوری، 
          به دفتر ما مراجعه کنید.
        </p>

        {/* Contact Info */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm bg-indigo-50 p-6 rounded-2xl shadow">
          <div>
            <h3 className="font-bold text-indigo-800 text-xl">تلفن تماس</h3>
            <p className="text-gray-700 text-lg">+98 21 1234 5678</p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-800 text-xl">ایمیل</h3>
            <p className="text-gray-700 text-lg">info@applydon.com</p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-800 text-xl">آدرس</h3>
            <p className="text-gray-700 text-lg">تهران، میدان تجریش، دفتر مرکزی</p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-800 text-xl">ساعات کاری</h3>
            <p className="text-gray-700 text-lg">شنبه تا چهارشنبه: ۹ صبح تا ۵ عصر</p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://maps.google.com/maps?q=35.8088856,51.4301723&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full max-w-lg">
        <div className="flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
          {/* Logo */}
          <div className="mx-auto">
            <UniversityLogo variant="dark" />
          </div>

          {/* Consultation Form */}
          <Suspense fallback={<p className="text-center">فرم مشاوره در حال بارگذاری است...</p>}>
            <RequestForm
              title="درخواست مشاوره"
              fields={fields}
              action={submitConsultation}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
