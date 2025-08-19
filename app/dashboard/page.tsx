import { auth } from "@/auth";
import Link from "next/link";
import {
  DocumentTextIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="max-w-5xl mx-auto py-10 px-4" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">
        سلام {user?.username || user?.email || "کاربر"} 👋
      </h1>
      <p className="text-gray-600 mb-10">
        به داشبورد خوش آمدید! از اینجا می‌توانید درخواست‌ها و سرویس‌های خود را مدیریت کنید.
      </p>

      {/* Grid of cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Requests */}
        <Link
          href="/dashboard/requests"
          className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition group"
        >
          <DocumentTextIcon className="w-8 h-8 text-indigo-600 group-hover:text-indigo-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2">همه درخواست‌ها</h2>
          <p className="text-gray-600 text-sm">
            مشاهده و پیگیری وضعیت تمامی درخواست‌های ثبت‌شده
          </p>
        </Link>

        {/* New Service */}
        <Link
          href="/services"
          className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition group"
        >
          <PlusCircleIcon className="w-8 h-8 text-green-600 group-hover:text-green-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2">درخواست جدید</h2>
          <p className="text-gray-600 text-sm">
            انتخاب و ارسال درخواست جدید از بین سرویس‌های موجود
          </p>
        </Link>

        {/* Profile */}
        <Link
          href="/dashboard/profile"
          className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition group"
        >
          <UserCircleIcon className="w-8 h-8 text-purple-600 group-hover:text-purple-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2">پروفایل</h2>
          <p className="text-gray-600 text-sm">
            مشاهده و ویرایش اطلاعات حساب کاربری
          </p>
        </Link>
      </div>
    </main>
  );
}
