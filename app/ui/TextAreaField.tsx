"use client"
interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  dir?: "rtl" | "ltr"
}

export function TextAreaField({ label, dir = "rtl", ...props }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-right font-semibold">{label}</label>
      <textarea
        {...props}
        dir={dir}
        className="w-full rounded-lg border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
      />
    </div>
  )
}
