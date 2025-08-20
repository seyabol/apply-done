"use client";

import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

export default function FeatureCard({ title, description, href, icon }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col p-5 rounded-xl border shadow hover:shadow-lg transition cursor-pointer bg-white",
        "hover:bg-indigo-50"
      )}
    >
      {icon && <div className="mb-3 mx-auto text-indigo-600">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
