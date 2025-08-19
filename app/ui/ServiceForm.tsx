"use client";

import { useState, FormEvent } from "react";
import { Button } from "./button";

interface Field {
  name: string;
  type: "text" | "email" | "textarea" | string;
  placeholder?: string;
  required?: boolean;
}

interface ServiceFormProps {
  title: string;
  fields: Field[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

export default function ServiceForm({ title, fields, onSubmit }: ServiceFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await onSubmit(formData);
      setSuccess("فرم با موفقیت ارسال شد!");
      setFormData({});
    } catch (err) {
      // setError(err.message || "خطایی رخ داده است.");
      setError("خطایی رخ داده است.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl text-center font-bold text-indigo-700">{title}</h2>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1 text-right font-semibold">{field.name}</label>

          {field.type === "textarea" ? (
            <textarea
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
              dir="rtl"
            />
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
              dir="rtl"
            />
          )}
        </div>
      ))}

      {error && <p className="text-sm text-red-500 text-right">{error}</p>}
      {success && <p className="text-sm text-green-500 text-right">{success}</p>}

      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600" aria-disabled={isSubmitting}>
        ارسال فرم
      </Button>
    </form>
  );
}


{/* <ServiceForm
  title="درخواست مشاوره مالی"
  fields={[
    { name: "نام و نام خانوادگی", type: "text", required: true },
    { name: "ایمیل", type: "email", required: true },
    { name: "توضیحات", type: "textarea", placeholder: "شرح درخواست خود را وارد کنید..." },
  ]}
  onSubmit={async (data) => {
    await fetch("/api/consultation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  }}
/> */}

