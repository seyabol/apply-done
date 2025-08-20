import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-700 text-white pt-12"
      dir="rtl"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Logo */}
        <div className="flex flex-col gap-4 bg-indigo-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold tracking-wide">Apply Done</h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            همراه شما در مسیر{" "}
            <span className="font-semibold text-indigo-200">
              مهاجرت و تحصیل
            </span>
            . ارائه خدمات مشاوره، پذیرش و پرداخت‌های ارزی.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 bg-indigo-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-lg mb-2 border-b border-indigo-500 pb-2">
            لینک‌های سریع
          </h3>
          {[
            { href: "/", label: "خانه" },
            { href: "/consultation", label: "مشاوره" },
            { href: "/dashboard/services-entry", label: "خدمات ورود" },
            { href: "/dashboard/document-editing", label: "ویرایش اسناد" },
            { href: "/about", label: "درباره ما" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-100 transition-all hover:translate-x-1 inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 bg-indigo-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-lg mb-2 border-b border-indigo-500 pb-2">
            تماس با ما
          </h3>

          <a
            href="https://maps.app.goo.gl/K9Df5PEtC7x1sj7m9?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-200 hover:text-indigo-100 transition-colors"
          >
            <MapPinIcon className="w-6 h-6 flex-shrink-0" />
            <span>تهران، ایران . تجریش فنا خسرو</span>
          </a>

          <a
            href="tel:+989123456789"
            className="flex items-center gap-3 text-gray-200 hover:text-indigo-100 transition-colors"
          >
            <PhoneIcon className="w-6 h-6 flex-shrink-0" />
            <span>+98 912 345 6789</span>
          </a>

          <a
            href="mailto:info@applydone.com"
            className="flex items-center gap-3 text-gray-200 hover:text-indigo-100 transition-colors"
          >
            <EnvelopeIcon className="w-6 h-6 flex-shrink-0" />
            <span>info@applydone.com</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-indigo-500 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">Apply Done</span>. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
