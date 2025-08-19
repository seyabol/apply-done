import LoginForm from "@/app/ui/login-form";
import UniversityLogo from "@/app/ui/university-logo";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="flex h-full justify-center items-center">
      <div className="w-full max-w-lg flex flex-col space-y-6 p-8 bg-white shadow-xl rounded-2xl border border-indigo-100">
        {/* Logo */}
        <div className="mx-auto">
          <UniversityLogo variant="dark" />
        </div>

        {/* Login Form */}
        <Suspense fallback={<p className="text-center">فرم ورود در حال بارگذاری است...</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
