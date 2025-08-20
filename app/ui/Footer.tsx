import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-700 text-white pt-12" dir="rtl">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Logo */}
        <div className="flex flex-col gap-4 bg-indigo-800/50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Apply Done</h2>
          <p className="text-gray-200 leading-relaxed">
            همراه شما در مسیر مهاجرت و تحصیل. ارائه خدمات مشاوره، پذیرش و پرداخت‌های ارزی.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 bg-indigo-800/50 p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold text-lg mb-2">لینک‌های سریع</h3>
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors hover:translate-x-1"
          >
            خانه
          </Link>
          <Link
            href="/consultation"
            className="hover:text-gray-300 transition-colors hover:translate-x-1"
          >
            مشاوره
          </Link>
          <Link
            href="/dashboard/services-entry"
            className="hover:text-gray-300 transition-colors hover:translate-x-1"
          >
            خدمات ورود
          </Link>
          <Link
            href="/dashboard/document-editing"
            className="hover:text-gray-300 transition-colors hover:translate-x-1"
          >
            ویرایش اسناد
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 bg-indigo-800/50 p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold text-lg mb-2">تماس با ما</h3>
          <div className="flex items-center gap-3 text-gray-200 hover:text-gray-300 transition-colors cursor-pointer">
            <MapPinIcon className="w-6 h-6" />
            <span>تهران، ایران</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200 hover:text-gray-300 transition-colors cursor-pointer">
            <PhoneIcon className="w-6 h-6" />
            <span>+98 912 345 6789</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200 hover:text-gray-300 transition-colors cursor-pointer">
            <EnvelopeIcon className="w-6 h-6" />
            <span>info@applydone.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-indigo-500 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Apply Done. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
