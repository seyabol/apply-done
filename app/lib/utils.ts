// 👉 Handle Persian/Gregorian date formatting
export function formatDate(date: string | Date, locale: "fa" | "en" = "fa") {
  const d = new Date(date);
  return d.toLocaleDateString(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// 👉 Avoid repeating clsx or Tailwind conditionals
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// 👉 Map statuses (pending/approved/rejected) to Persian labels + colors
export const statusLabels = {
  pending: "در انتظار بررسی",
  approved: "تأیید شده",
  rejected: "رد شده",
};

export const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

