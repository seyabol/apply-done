import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 pt-2  text-white  ">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Logo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-l font-bold">Apply Done</h2>
          <p className="text-gray-200">
            همراه شما در مسیر مهاجرت و تحصیل. ارائه خدمات مشاوره، پذیرش و پرداخت‌های ارزی.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">لینک‌های سریع</h3>
          <Link href="/" className="hover:underline">خانه</Link>
          <Link href="/consultation" className="hover:underline">مشاوره</Link>
          <Link href="/dashboard/services-entry" className="hover:underline">خدمات ورود</Link>
          <Link href="/dashboard/document-editing" className="hover:underline">ویرایش اسناد</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">تماس با ما</h3>
          <div className="flex items-center gap-2 text-gray-200">
            <MapPinIcon className="w-5 h-5" />
            <span>تهران، ایران</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <PhoneIcon className="w-5 h-5" />
            <span>+98 912 345 6789</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <EnvelopeIcon className="w-5 h-5" />
            <span>info@applydone.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-indigo-500 pt-4 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Apply Done. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
