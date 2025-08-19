import { AcademicCapIcon } from "@heroicons/react/24/solid";

interface UniversityLogoProps {
  variant?: "light" | "dark"; // light = white text, dark = indigo text
}

export default function UniversityLogo({ variant = "dark" }: UniversityLogoProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center ${
        isLight ? "text-white" : "text-indigo-600"
      }`}
    >
      <AcademicCapIcon
        className={`h-10 w-10 rotate-[15deg] ${
          isLight ? "text-indigo-300" : "text-indigo-600"
        }`}
      />
      <span className="ml-2 text-2xl font-bold tracking-wide">اپلای دان</span>
    </div>
  );
}
