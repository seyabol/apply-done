// "use client"
// import { Button } from "./Button"

// interface AdminRequestCardProps {
//   id: number
//   userEmail: string
//   type: string
//   subtype?: string
//   message?: string
//   status: string
//   note?: string
//   onApprove: () => void
//   onReject: () => void
// }

// export function AdminRequestCard({
//   id, userEmail, type, subtype, message, status, note, onApprove, onReject
// }: AdminRequestCardProps) {
//   return (
//     <div className="border rounded-xl p-4 shadow-sm bg-white">
//       <h3 className="font-bold text-indigo-700 mb-2" dir="rtl">{type}{subtype && ` / ${subtype}`}</h3>
//       <p className="text-gray-600 text-sm mb-2" dir="rtl">ایمیل کاربر: {userEmail}</p>
//       {message && <p className="text-gray-800 mb-2" dir="rtl">{message}</p>}
//       <p className="text-sm mb-2" dir="rtl">وضعیت: <span className="font-semibold">{status}</span></p>
//       {note && <p className="text-xs text-gray-500" dir="rtl">یادداشت: {note}</p>}
//       <div className="flex gap-2 mt-3">
//         <Button variant="primary" onClick={onApprove}>تایید</Button>
//         <Button variant="danger" onClick={onReject}>رد</Button>
//       </div>
//     </div>
//   )
// }
