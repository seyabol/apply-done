"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { register } from "@/app/lib/actions"; 

export default function RegisterForm() {
  const [status, formAction, isPending] = useActionState(register, undefined);

  return (
    <form action={formAction} className="space-y-5">
      {/* Title */}
      <h1 className="text-2xl text-center font-bold text-indigo-700">
        لطفا ثبت نام کنید
      </h1>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-right font-semibold"
        >
          ایمیل
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full rounded-lg border border-gray-300 py-2 pr-9 pl-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
            dir="rtl"
          />
          <AtSymbolIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500" />
        </div>
        {status?.errors?.email && (
          <p className="text-sm text-red-500 mt-1">
            {status.errors.email.join(", ")}
          </p>
        )}
      </div>

      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block mb-1 text-right font-semibold"
        >
          نام کاربری
        </label>
        <div className="relative">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="نام کاربری خود را وارد کنید"
            className="w-full rounded-lg border border-gray-300 py-2 pr-9 pl-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
            dir="rtl"
          />
          <UserIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500" />
        </div>
        {status?.errors?.username && (
          <p className="text-sm text-red-500 mt-1">
            {status.errors.username.join(", ")}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-right font-semibold"
        >
          پسورد
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="پسورد خود را وارد کنید"
            className="w-full rounded-lg border border-gray-300 py-2 pr-9 pl-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
            dir="rtl"
          />
          <KeyIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500" />
        </div>
        {status?.errors?.password && (
          <p className="text-sm text-red-500 mt-1">
            {status.errors.password.join(", ")}
          </p>
        )}
      </div>

      {/* General error */}
      {status?.message && (
        <p className="flex items-center text-sm text-red-500" dir="rtl">
          <ExclamationCircleIcon className="h-5 w-5 mr-1" />
          {status.message}
        </p>
      )}

      {/* Submit */}
      <Button
        className="w-full bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600"
        aria-disabled={isPending}
      >
        ثبت نام
        <ArrowLeftIcon className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
