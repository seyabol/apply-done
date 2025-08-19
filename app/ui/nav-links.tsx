"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "درباره ما", href: "/about" },
  { name: "مشاوره", href: "/consultation" },
  { name: "خدمات", href: "/services" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "relative text-lg transition-colors duration-200 hover:text-indigo-300",
            pathname === link.href
              ? "font-bold text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-indigo-300"
              : "text-indigo-100"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
