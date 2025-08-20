// app/ui/RequestForm.tsx
"use client";
import { useActionState } from "react";

export type Field = {
   name: string;
   label: string;
   type: "text" | "email" | "textarea" | "number" | "select"; // ✅ added select
   required?: boolean;
   options?: { value: string; label: string }[]; // ✅ for select
   onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void; // ✅ new
};

export type ErrorState = { error: string } | undefined;

interface RequestFormProps {
   title: string;
   fields: Field[];
   submitLabel?: string;
   action: (prevState: ErrorState, formData: FormData) => Promise<ErrorState>;
}

export default function RequestForm({ title, fields, submitLabel = "ارسال فرم", action }: RequestFormProps) {
   const [errorMessage, formAction] = useActionState<ErrorState, FormData>(action, undefined);

   return (
      <form action={formAction} className="space-y-4 ">
         <h2 className="text-2xl text-center font-bold text-indigo-700">{title}</h2>
         {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
               <label className="mb-1 text-right font-medium">{field.label}</label>

               {field.type === "textarea" ? (
                  <textarea
                     name={field.name}
                     required={field.required}
                     className="border rounded-lg p-2"
                     dir="rtl"
                     onChange={field.onChange}
                  />
               ) : field.type === "select" ? (
                  <select
                     name={field.name}
                     required={field.required}
                     className="border rounded-lg p-2"
                     dir="rtl"
                     onChange={field.onChange}
                  >
                     <option value="">انتخاب کنید</option>
                     {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                           {opt.label}
                        </option>
                     ))}
                  </select>
               ) : (
                  <input
                     type={field.type}
                     name={field.name}
                     required={field.required}
                     className="border rounded-lg p-2"
                     dir="rtl"
                     onChange={field.onChange}
                  />
               )}
            </div>
         ))}

         {errorMessage && <p className="text-red-600">{errorMessage.error}</p>}

         <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
         >
            {submitLabel}
         </button>
      </form>
   );
}
