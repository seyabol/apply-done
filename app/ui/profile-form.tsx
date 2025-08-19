"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import type { User } from "@prisma/client";

export default function ProfileForm({ user }: { user: User | null }) {
  const [name, setName] = useState(user?.username || "");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/profile", {
//       method: "POST",
//       body: JSON.stringify({ name }),
//       headers: { "Content-Type": "application/json" },
//     });

//     setLoading(false);
//     if (res.ok) {
//       router.refresh(); // revalidate session data
//     } else {
//       alert("خطا در به‌روزرسانی پروفایل");
//     }
//   }

  return (
    <form action='/'
      className="bg-white p-6 rounded-2xl shadow-md space-y-6" dir="rtl"
    >
      <div className="flex items-center space-x-4">
        <UserCircleIcon className="w-16 h-16 text-gray-400" />
        <div>
          <p className="font-semibold">{user?.email}</p>
          <p className="text-sm text-gray-500">ایمیل غیرقابل تغییر است</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">نام</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
      //   disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
      >
        {/* {loading ? "در حال ذخیره..." : "ذخیره تغییرات"} */} SAVE
      </button>
    </form>
  );
}
